import os

FOLDER = "."

ADSENSE_CODE = """
<!-- Google AdSense -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2182964775239262"
     crossorigin="anonymous"></script>
"""

for root, dirs, files in os.walk(FOLDER):
    for file in files:
        if not file.endswith(".html"):
            continue

        if file.lower() == "index.html":
            continue

        path = os.path.join(root, file)

        try:
            with open(path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()

            # skip if already added
            if "ca-pub-" in content:
                continue

            if "</body>" in content:
                print("Adding AdSense to:", path)

                new_content = content.replace(
                    "</body>",
                    ADSENSE_CODE + "\n</body>"
                )

                with open(path, "w", encoding="utf-8") as f:
                    f.write(new_content)

        except Exception:
            print("Skipped:", path)

print("Done.")