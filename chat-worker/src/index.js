// native.beer network chat
// Everyone with the same public IP (same school / home network) lands in the same room.
// Nothing is saved: messages only go to whoever is connected right now.

const MAX_LEN = 300
const RATE_COUNT = 5        // messages...
const RATE_WINDOW = 8000    // ...per 8 seconds
const KICK_MS = 24 * 60 * 60 * 1000

// extend this list as needed. matched as whole words, case insensitive
const BAD_WORDS = [
  "fuck", "fucking", "fucker", "shit", "bitch", "cunt", "dick", "cock", "pussy",
  "asshole", "bastard", "whore", "slut", "nigger", "nigga", "faggot", "fag",
  "retard", "retarded", "kys", "porn", "sex", "nude", "nudes", "rape"
]
const badRe = new RegExp(`\\b(${BAD_WORDS.join("|")})\\b`, "gi")
const linkRe = /(https?:\/\/|www\.)\S+|\b[\w-]+\.(com|net|org|io|gg|xyz|beer|co|me|ly|tk|app|dev|link)\b\S*/gi

const ADJECTIVES = ["Swift", "Sneaky", "Sleepy", "Mighty", "Tiny", "Fuzzy", "Brave", "Silly", "Cosmic", "Turbo", "Lucky", "Chill", "Spicy", "Frosty", "Pixel", "Shadow"]
const ANIMALS = ["Fox", "Panda", "Otter", "Tiger", "Koala", "Falcon", "Shark", "Llama", "Gecko", "Moose", "Penguin", "Raccoon", "Wolf", "Frog", "Owl", "Duck"]

function randomName() {
  const pick = a => a[Math.floor(Math.random() * a.length)]
  return pick(ADJECTIVES) + pick(ANIMALS) + Math.floor(Math.random() * 90 + 10)
}

function clean(text) {
  return text
    .replace(linkRe, "[link removed]")
    .replace(badRe, w => "*".repeat(w.length))
}

function cleanName(name) {
  name = String(name || "").replace(/[^A-Za-z0-9 _-]/g, "").trim().slice(0, 20)
  badRe.lastIndex = 0
  if (name.length < 2 || badRe.test(name)) return null
  return name
}

async function hash(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text))
  return [...new Uint8Array(buf)].slice(0, 12).map(b => b.toString(16).padStart(2, "0")).join("")
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname !== "/ws") return new Response("native chat", { status: 200 })

    if (request.headers.get("Upgrade") !== "websocket") {
      return new Response("expected websocket", { status: 426 })
    }

    const origin = request.headers.get("Origin") || ""
    const allowed = (env.ALLOWED_ORIGINS || "").split(",").map(s => s.trim())
    if (!allowed.includes(origin)) return new Response("forbidden", { status: 403 })

    if (env.CHAT_ENABLED === "false") return new Response("chat disabled", { status: 503 })

    // room = optional code, otherwise a hash of the network's public IP (the IP itself is never sent anywhere)
    const code = (url.searchParams.get("room") || "").toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 20)
    let roomKey
    if (code.length >= 3) {
      roomKey = "code:" + code
    } else {
      const ip = request.headers.get("CF-Connecting-IP") || "local"
      roomKey = "net:" + await hash("native-chat:" + ip)
    }

    const stub = env.ROOMS.get(env.ROOMS.idFromName(roomKey))
    const forwarded = new Request(request)
    forwarded.headers.set("X-Room-Label", code.length >= 3 ? code : "")
    return stub.fetch(forwarded)
  }
}

export class ChatRoom {
  constructor(ctx, env) {
    this.ctx = ctx
    this.env = env
  }

  async fetch(request) {
    const url = new URL(request.url)
    const cid = (url.searchParams.get("cid") || "").slice(0, 64) || crypto.randomUUID()

    // kicked clients stay out for a day
    const kickedUntil = await this.ctx.storage.get("kick:" + cid)
    if (kickedUntil && kickedUntil > Date.now()) {
      return new Response("kicked", { status: 403 })
    }

    const pair = new WebSocketPair()
    const [client, server] = Object.values(pair)

    const me = {
      id: crypto.randomUUID().slice(0, 8),
      cid,
      name: cleanName(url.searchParams.get("name")) || randomName(),
      admin: false,
      sent: []
    }

    this.ctx.acceptWebSocket(server)
    server.serializeAttachment(me)

    const locked = !!(await this.ctx.storage.get("locked"))
    const online = this.ctx.getWebSockets().length

    this.send(server, {
      type: "welcome",
      you: { id: me.id, name: me.name },
      online,
      locked,
      room: request.headers.get("X-Room-Label") || ""
    })
    this.broadcast({ type: "system", text: `${me.name} joined` }, server)
    this.broadcast({ type: "online", n: online })

    return new Response(null, { status: 101, webSocket: client })
  }

  async webSocketMessage(ws, raw) {
    const me = ws.deserializeAttachment()
    let data
    try {
      data = JSON.parse(raw)
    } catch {
      return
    }

    if (data.type === "msg") {
      const now = Date.now()
      me.sent = me.sent.filter(t => now - t < RATE_WINDOW)
      if (me.sent.length >= RATE_COUNT) {
        return this.send(ws, { type: "error", text: "Slow down! You're sending messages too fast." })
      }

      if (!me.admin && await this.ctx.storage.get("locked")) {
        return this.send(ws, { type: "error", text: "Chat is locked right now." })
      }

      const text = clean(String(data.text || "").replace(/\s+/g, " ").trim().slice(0, MAX_LEN))
      if (!text) return

      me.sent.push(now)
      ws.serializeAttachment(me)

      this.broadcast({
        type: "msg",
        from: { id: me.id, name: me.name, admin: me.admin },
        text,
        ts: now
      })
    }

    else if (data.type === "name") {
      const name = cleanName(data.name)
      if (!name) return this.send(ws, { type: "error", text: "That name isn't allowed (2-20 letters/numbers)." })
      const old = me.name
      me.name = name
      ws.serializeAttachment(me)
      this.send(ws, { type: "you", id: me.id, name })
      this.broadcast({ type: "system", text: `${old} is now ${name}` })
    }

    else if (data.type === "admin") {
      if (this.env.ADMIN_KEY && data.key === this.env.ADMIN_KEY) {
        me.admin = true
        ws.serializeAttachment(me)
        this.send(ws, { type: "admin", ok: true })
      } else {
        this.send(ws, { type: "error", text: "Wrong admin key." })
      }
    }

    else if (data.type === "kick" && me.admin) {
      for (const other of this.ctx.getWebSockets()) {
        const them = other.deserializeAttachment()
        if (them.id !== data.id) continue
        await this.ctx.storage.put("kick:" + them.cid, Date.now() + KICK_MS)
        this.send(other, { type: "error", text: "You were kicked from chat." })
        other.close(4003, "kicked")
        this.broadcast({ type: "system", text: `${them.name} was kicked` })
      }
    }

    else if ((data.type === "lock" || data.type === "unlock") && me.admin) {
      await this.ctx.storage.put("locked", data.type === "lock")
      this.broadcast({ type: "system", text: data.type === "lock" ? "Chat locked by admin" : "Chat unlocked" })
      this.broadcast({ type: "locked", locked: data.type === "lock" })
    }
  }

  async webSocketClose(ws) {
    this.left(ws)
  }

  async webSocketError(ws) {
    this.left(ws)
  }

  left(ws) {
    const me = ws.deserializeAttachment()
    const online = this.ctx.getWebSockets().filter(s => s !== ws).length
    if (me) this.broadcast({ type: "system", text: `${me.name} left` }, ws)
    this.broadcast({ type: "online", n: online }, ws)
  }

  send(ws, obj) {
    try {
      ws.send(JSON.stringify(obj))
    } catch {}
  }

  broadcast(obj, except) {
    const msg = JSON.stringify(obj)
    for (const ws of this.ctx.getWebSockets()) {
      if (ws === except) continue
      try {
        ws.send(msg)
      } catch {}
    }
  }
}
