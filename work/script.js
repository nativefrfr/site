/* GAME LIST */

const params = new URLSearchParams(window.location.search);
let games

if (params.get("icon") == "bypass") {
    games=[
        ["soundboard", "abcd"]
    ]
}
else{

    games=[
    // optional third item: a link to open instead of native.beer/work/<id>
    ['spotify 📱+💻', 'spotify', 'https://grrmondays.native.beer'],
    ['1v1.lol💻', '1v1lol'],
    ['8ball billiards 📱+💻', '8ballbillards'],
    ['A Difficult Game About Climbing 📱+💻', 'adgac'],
    ['angry birds📱+💻', 'angrybirds'],
    ['attack hole📱+💻', 'attackhole'],
    ['roblox 📱+💻', 'WebBlox'],
    ['backrooms ❔', 'backrooms'],
    ['bad piggies 📱+💻', 'badpiggies'],
    ['baldi 📱+💻', 'baldi'],
    ['plague inc 📱+💻', 'plagueinc'],
    ['rocket goal.io 📱+💻', 'rocketgoal'],
    ['space flight simulator📱+💻', 'spaceflightsim'],
    ['basket random 📱+💻', 'basketrandom'],
    ['basketball ❔', 'basketball'],
    ['bitlife📱+💻', 'bit'],
    ['blockblast 📱+💻', 'blockblast'],
    ['bloons tower defense 2 📱+💻', 'td2'],
    ['bloons tower defense 4 📱+💻', 'td4'],
    ['Bloons tower defense 5 📱+💻','btd5'],
    ['apes vs helium 📱+💻','avh'],
    ['bottle jump 📱+💻', 'bottlejump'],
    ['bowmasters 📱+💻', 'bowmasters'],
    ['boxing random 📱+💻', 'boxingrandom'],
    ['buckshot roulette 💻', 'buckshot'],
    ['celeste 💻', 'celeste'],
    ['Stardew Valley 📱+💻', 'Stardew Valley'],
    ['cluster rush 📱+💻', 'clusterrush'],
    ['colour match 📱+💻', 'colourmatch'],
    ['cookie clicker 💻', 'cookie'],
    ['crazy cattle 💻', 'crazy'],
    ['Nautilus OS 📱+💻', 'NautilusOS'],
    ["Who's Your Daddy 📱+💻", "Who's Your Daddy"],
    ['crossy road 📱+💻', 'crossyroad'],
    ['cut the rope 📱+💻', 'cuttherope'],
    ['dig deep 📱+💻', 'digdeep'],
    ['doom 💻', 'doom'],
    ['draw climber 📱+💻', 'drawclimber'],
    ['driven wild 📱+💻', 'drivienwild'],
    ['emulator ❔', 'emulator'],
    ['fireboy and water girl 3 📱+💻', 'fireboywatergirl3'],
    ['fireboy and water girl 📱+💻', 'fireboywatergirl'],
    ['flappy bird multiplayer 📱+💻', 'flappybirdmulti'],
    ['flappy dunk 📱+💻', 'flappydunk'],
    ['fnaf 1 📱+💻', 'fnaf1'],
    ['fnaf 2 📱+💻', 'fnaf2'],
    ['fnaf 3 📱+💻', 'fnaf3'],
    ['fnaf 4 📱+💻', 'fnaf4'],
    ['fork n sausage 📱+💻', 'forknsausage'],
    ['friday night funkin 📱+💻', 'fnf'],
    ['fruit ninja 📱+💻', 'fruitninja'],
    ['geometry dash 📱+💻', 'geometrydash'],
    ['gladihoppers ❔', 'gladihoppers'],
    ['gobble ❔ ', 'gobble'],
    ['granny📱+💻', 'gran'],
    ['grow a garden 📱+💻', 'growagarden'],
    ['gunspin 📱+💻', 'gunspin'],
    ['halflife 💻', 'halflife'],
    ['happy wheels 💻', 'happywheels'],
    ['highway racer 📱+💻', 'highwayracer'],
    ['hollow knight 💻', 'hk'],
    ['stick man hook 📱+💻', 'hook'],
    ['icedodo ❔', 'icedodo'],
    ['jellydrift 📱+💻', 'jellydrift'],
    ['jetpackjoyride 📱+💻', 'jetpackjoyride'],
    ['magic tiles 📱+💻', 'magictiles'],
    ['mobcontrol 📱+💻', 'mobcontrol'],
    ['monster tracks 📱+💻', 'monstertracks'],
    ['moto X3M 2 📱+💻', 'motox3m2'],
    ['moto X3M 3 📱+💻', 'motox3m3'],
    ['moto X3M 6 📱+💻', 'motox3m6'],
    ['omori💻', 'omori'],
    ['oneshot 📱+💻', 'oneshot'],
    ['osu 📱+💻', 'osu'],
    ['ovo 2 📱+💻', 'ovo2'],
    ['ovo dimensions 📱+💻', 'ovod'],
    ['ovo 📱+💻', 'ovo'],
    ['peggle 📱+💻', 'peggle'],
    ['pixel gun survival 📱+💻', 'pixelgun'],
    ['pou 📱+💻', 'pou'],
    ['pvz2💻', 'pvz2'],
    ['pvz📱+💻', 'pvz'],
    ['raft📱+💻', 'raft'],
    ['ragdoll hit 📱+💻', 'ragdollhit'],
    ['repo 💻', 'repo'],
    ['retro bowl college 📱+💻', 'retrobowlc'],
    ['retro bowl 📱+💻', 'retrobowl'],
    ['road of fury 📱+💻', 'roadoffury'],
    ['slime rancher 💻', 'slime'],
    ['slither.io 📱+💻', 'slither'],
    ['slope 📱+💻', 'slope'],
    ['solar smash 📱+💻', 'solarsmash'],
    ['sprunki 📱+💻', 'sprunki'],
    ['steal a brainrot (ONLINE) 📱+💻', 'stealabrainrotonline'],
    ['steal a brainrot 📱+💻', 'stealabrainrot'],
    ['survivor.io📱+💻', 'survivorio'],
    ['temple run 📱+💻', 'templerun'],
    ['terraria 💻', 'ter'],
    ['thats not my neighbor💻', 'tnmn'],
    ['the binding of isaac 💻', 'tboi'],
    ['ultimate custom night (fnaf) 📱+💻', 'customnight'],
    ['ultrakill📱+💻', 'ultra'],
    ['water sort 📱+💻', 'watersort'],
    ['wave 📱+💻', 'wave'],
    ['wordle 📱+💻', 'wordle'],
    ['worldbox 📱+💻', 'worldbox'],
    ['Minecraft pocket 📱+💻', 'minecraftpocket'],
    ['minesweeper 💻','Minesweeper Plus'],
    ['Bendy 💻','bendy'],
    ['Brawl Stars 📱+💻','brawlstars'],
    ['cooking mama 📱+💻','cookingmama'],
    ['crazy cars 📱+💻','crazycars'],
    ['drift hunters 📱+💻','drifthunters'],
    ['elastic man 📱+💻','elasticman'],
    ['going balls 📱+💻','goingballs'],
    ['Getting Over It 💻','goiwbf'],
    ['madalin stunt 📱+💻','madalinstunt'],
    ['super meat boy 💻','meatboy'],
    ['needy streamer overload 💻','nso'],
    ['Paper.io 📱+💻','paperio'],
    ['sandboxels 📱+💻','sandboxels'],
    ['shwarma kiosk 💻','shwarmakiosk'],
    ['Hollow knight silksong 💻','silksong'],
    ['superhot 💻','superhot'],
    ['Build A Plane 📱+💻','buildaplane'],
    ['Mega Car Jumps 📱+💻','megacarjumps'],
    ['Twerk race 📱+💻','twerkrace'],
    ['Blade Ball 📱+💻','bladeball'],
    ['Suika Game 📱+💻','suikagame'],
    ['Draw The Line 📱+💻','drawtheline'],
    ['Gorilla tag 📱+💻','gorillatag'],
    ['Just Fall.lol 📱+💻','justfalllol'],
    ['Tall Man Run 📱+💻','tallmanrun'],
    ['Drift Boss 📱+💻','driftboss'],
    ['Build Now.gg 📱+💻','buildnowgg'],
    ['Super Star Car 📱+💻','superstarcar'],
    ['Tattle Tail 📱+💻','tattletail'],
    ['Fortzone 📱+💻','fortzone'],
    ['Iron Lung 💻','ironlung'],
    ['State.io 📱+💻','stateio'],
    ['Rainbow Obby 📱+💻','rainbowobby'],
    ['Idle Miner 📱+💻','idlemine'],
    ['Pokemon Emerald 📱+💻','pokemon'],
    ['Aqua Park 📱+💻','aquapark'],
    ['Flying Gorilla','flyinggorilla'],
    ["10 Minutes Till Dawn 📱+💻","10 Minutes Till Dawn"],
    ["3D Bowling 📱+💻","3D Bowling"],
    ["8 Ball Billiards Classic 📱+💻","8 Ball Billiards Classic"],
    ["A Game About Feeding A Black Hole 📱+💻","A Game About Feeding A Black Hole"],
    ["Adventure Drivers 📱+💻","Adventure Drivers"],
    ["Ages of Conflict 📱+💻","Ages of Conflict"],
    ["Angry Birds Chrome 📱+💻","Angry Birds Chrome"],
    ["Anton Blast Demo v1.2 📱+💻","Anton Blast Demo v1.2"],
    ["Avia masters 📱+💻","Aviamasters"],
    ["BART BLAST📱+💻","BART BLAST (INDEV VERSION)"],
    ["BASEBALL BROS! | Official Site 📱+💻","BASEBALL BROS!  Official Site"],
    ["BERGENTRUCK_201X 📱+💻","BERGENTRUCK_201X"],
    ["BFDI: Branches 📱+💻","BFDI Branches"],
    ["BLOODMONEY! 📱+💻","BLOODMONEY!"],
    ["Bad Time Simulator (Sans Fight) 📱+💻","Bad Time Simulator (Sans Fight)"],
    ["Ball Blast HTML5 📱+💻","Ball Blast HTML5"],
    ["Basket Bros 📱+💻","Basket Bros"],
    ["Big Tower Tiny Square 2 📱+💻","Big Tower Tiny Square 2"],
    ["Bit Planes 📱+💻","Bit Planes"],
    ["Blade Ball 📱+💻","Blade Ball"],
    ["Block Blast Puzzle 📱+💻","Block Blast Puzzle"],
    ["Blockpost 📱+💻","Blockpost"],
    ["Blumgi Rocket 📱+💻","Blumgi Rocket"],
    ["Bottle Jump 3D 📱+💻","Bottle Jump 3D"],
    ["Bouncemasters 📱+💻","Bouncemasters"],
    ["Boxing Random 📱+💻","Boxing Random"],
    ["BreakLock 📱+💻","BreakLock"],
    ["Brotato 📱+💻","Brotato"],
    ["Candy Crush 📱+💻","Candy Crush"],
    ["Cannon Balls 3D 📱+💻","Cannon Balls 3D"],
    ["Carrom Clash 📱+💻","Carrom Clash"],
    ["Cat Connection - V2 📱+💻","Cat Connection - V2"],
    ["Cat Gunner 📱+💻","Cat Gunner"],
    ["Cell Machine 📱+💻","Cell Machine"],
    ["Chess Classic 📱+💻","Chess Classic"],
    ["Chiikawa Puzzle 📱+💻","Chiikawa Puzzle"],
    ["ChoppyOrc 📱+💻","ChoppyOrc"],
    ["Christmas Massacre 📱+💻","Christmas Massacre"],
    ["Class of 09 📱+💻","Class of '09"],
    ["ClothingShop 📱+💻","ClothingShop"],
    ["Core Ball, Level 4 📱+💻","Core Ball, Level 4"],
    ["Crossy Road 📱+💻","Crossy Road"],
    ["DEAD PLATE 📱+💻","DEAD PLATE"],
    ["DONT YOU LECTURE ME WITH YOUR THIRTY DOLLAR WEBSITE 📱+💻","DON'T YOU LECTURE ME WITH YOUR THIRTY DOLLAR WEBSITE"],
    ["Dadish 2 📱+💻","Dadish 2"],
    ["Dadish 3 📱+💻","Dadish 3"],
    ["Dadish 📱+💻","Dadish"],
    ["Death Run 3D 📱+💻","Death Run 3D"],
    ["Dice a Million 📱+💻","Dice a Million"],
    ["Dig Deep 📱+💻","Dig Deep"],
    ["Do NOT Take This Cat Home 📱+💻","Do NOT Take This Cat Home"],
    ["Dogeminer 📱+💻","Dogeminer"],
    ["Dragon Vs Bricks 📱+💻","Dragon Vs Bricks"],
    ["Draw the Hill 📱+💻","Draw the Hill"],
    ["DrawJoust 📱+💻","DrawJoust"],
    ["Dreadhead Parkour 📱+💻","Dreadhead Parkour"],
    ["ElementalMasters 📱+💻","ElementalMasters"],
    ["Endoparasitic 📱+💻","Endoparasitic"],
    ["Endoparasitic2 📱+💻","Endoparasitic2"],
    ["Escape Road 📱+💻","Escape Road"],
    ["Evil Glitch 📱+💻","Evil Glitch"],
    ["EvoWars.io 📱+💻","EvoWars.io"],
    ["Fallout 📱+💻","Fallout"],
    ["Fashion Battle 📱+💻","Fashion Battle"],
    ["Fear Assessment 📱+💻","Fear Assessment"],
    ["Five Nights at Candys 1 📱+💻","Five Nights at Candy's 1"],
    ["Five Nights at Candys 2 📱+💻","Five Nights at Candy's 2"],
    ["Five Nights at Freddys 4 Halloween 📱+💻","Five Nights at Freddy's 4 Halloween"],
    ["Five Nights at Freddys Pizzeria Simulator 📱+💻","Five Nights at Freddy's Pizzeria Simulator"],
    ["Five Nights at Freddys Sister Location 📱+💻","Five Nights at Freddy's Sister Location"],
    ["Five Nights at Freddys World 📱+💻","Five Nights at Freddy's World"],
    ["Five Nights at Shreks Hotel 📱+💻","Five Nights at Shreks Hotel"],
    ["Flambe Game📱+💻","Flambe Game (JSEmbed)"],
    ["Fundamental Paper Novel 📱+💻","Fundamental Paper Novel"],
    ["Fused 240 📱+💻","Fused 240"],
    ["Gods Flesh 📱+💻","God's Flesh"],
    ["Google Feud 📱+💻","Google Feud"],
    ["Guess Their Answer 📱+💻","Guess Their Answer"],
    ["GunBuild 📱+💻","GunBuild"],
    ["HCR Lite 1.0 📱+💻","HCR Lite 1.0"],
    ["Harvest.io 📱+💻","Harvest.io"],
    ["Highway Racer 2 📱+💻","Highway Racer 2"],
    ["Idle Dice 📱+💻","Idle Dice"],
    ["Idle Lumber Inc 📱+💻","Idle Lumber Inc"],
    ["Idle breakout 📱+💻","Idle breakout"],
    ["Jelly Mario 📱+💻","Jelly Mario"],
    ["Kindergarten 3 📱+💻","Kindergarten3Port"],
    ["Kitchen Bazar 📱+💻","Kitchen Bazar"],
    ["KittyToy 📱+💻","KittyToy"],
    ["Look Outside 📱+💻","Look Outside"],
    ["Madalin Stunt Cars 2 📱+💻","Madalin Stunt Cars 2"],
    ["Madalin Stunt Cars 3 📱+💻","Madalin Stunt Cars 3"],
    ["Merge Harvest 📱+💻","Merge Harvest"],
    ["Ninja vs EVILCORP 📱+💻","Ninja vs EVILCORP"],
    ["Om Nom Run 📱+💻","Om Nom Run"],
    ["Outhold 📱+💻","Outhold"],
    ["Overburden 📱+💻","Overburden"],
    ["PICO-8 Cartridge 📱+💻","celeste PICO-8 Cartridge"],
    ["Pac-Man 📱+💻","Pac-Man"],
    ["Papery Planes 📱+💻","Papery Planes"],
    ["Parking Fury 3D 📱+💻","Parking Fury 3D"],
    ["Parking Rush 📱+💻","Parking Rush"],
    ["Pizza Tower📱+💻","Pizza Tower 1.1.0 Web Port"],
    ["PortaBoy 📱+💻","PortaBoy"],
    ["Quake III Arena 📱+💻","Quake III Arena"],
    ["Ragdoll Archers 📱+💻","Ragdoll Archers"],
    ["Recoil📱+💻","Recoil Unblocked"],
    ["Rolly Vortex 📱+💻","Rolly Vortex"],
    ["Rooftop Snipers 2 📱+💻","Rooftop Snipers 2"],
    ["Run 3 📱+💻","Run 3"],
    ["SANDTRIS 📱+💻","SANDTRIS"],
    ["SPACEBAR CLICKER 📱+💻","SPACEBAR CLICKER"],
    ["Shipo📱+💻","Shipo - v10.1"],
    ["Slope 2 📱+💻","Slope 2"],
    ["SnowBattle.io 📱+💻","SnowBattle.io"],
    ["Sonic 3 A.I.R. 📱+💻","Sonic 3 A.I.R."],
    ["Sonic Legacy 📱+💻","Sonic Legacy"],
    ["Sonic Robo Blast 2 📱+💻","Sonic Robo Blast 2"],
    ["SpelunkyClassicHD 📱+💻","SpelunkyClassicHD"],
    ["Stick Slasher 📱+💻","Stick Slasher"],
    ["Stickman Boost 📱+💻","Stickman Boost"],
    ["Stickman Climb 📱+💻","Stickman Climb"],
    ["Super Mario 64📱+💻","Super Mario 64 on the Web!"],
    ["Sushi Roll 📱+💻","Sushi Roll"],
    ["TTG - Jump Jousts 2 📱+💻","TTG - Jump Jousts 2"],
    ["Tasty Pastry Party 📱+💻","Tasty Pastry Party"],
    ["Telekinesis Car 3D 📱+💻","Telekinesis Car 3D"],
    ["Telekinesis Quest 📱+💻","Telekinesis Quest"],
    ["Territorial.io 📱+💻","Territorial.io"],
    ["Time Shooter 2 📱+💻","Time Shooter 2"],
    ["Time Shooter 3 SWAT 📱+💻","Time Shooter 3 SWAT"],
    ["Time Shooter 📱+💻","Time Shooter"],
    ["Tiny Fishing 1 📱+💻","Tiny Fishing 1"],
    ["Tower Crash 3D 📱+💻","Tower Crash 3D"],
    ["Tug of War 📱+💻","Tug of War"],
    ["Tunnel Rush 📱+💻","Tunnel Rush"],
    ["Turbo Stars 📱+💻","Turbo Stars"],
    ["UNDERTALE YELLOW 📱+💻","UNDERTALE YELLOW"],
    ["UNDERTALE 📱+💻","UNDERTALE"],
    ["Ultrapool 📱+💻","Ultrapool"],
    ["Weapon Upgrade Rush 📱+💻","Weapon Upgrade Rush"],
    ["Worst Time Simulator 📱+💻","Worst Time Simulator"],
    ["YandereSimulator 📱+💻","YandereSimulator"],
    ["Yume Nikki 📱+💻","Yume Nikki"],
    ["bartbash 📱+💻","bartbash"],
    ["bazookaBoy 📱+💻","bazookaBoy"],
    ["circloO 2📱+💻","circloO 2"],
    ["circloO 📱+💻","circloO"],
    ["country defense 3d 📱+💻","countrydefense3d"],
    ["Kindergarten 📱+💻","Kindergarten"],
    ["Kindergarten2 📱+💻","Kindergarten2"],
    ["journey downhill 📱+💻","journey downhill"],
    ["wheel-scale 📱+💻","wheel-scale"],
    ["-3","gn816"],
    ["-b","gn817"],
    ["1 Date Danger","gn653"],
    ["12 Mini Battles","gn295"],
    ["20 Minutes Till Dawn","gn819"],
    ["2048","gn114"],
    ["2048 Merge Run","gn375"],
    ["3D Bolt Master","gn663"],
    ["60 Seconds! Reatomized","gn858"],
    ["64 in 1 NES","gn732"],
    ["8 Ball Classic","gn146"],
    ["8 Ball Pool","gn115"],
    ["99 Balls","gn431"],
    ["A Bite at Freddy's","gn258"],
    ["A Dance of Fire and Ice","gn59"],
    ["A Small World Cup","gn435"],
    ["Abandoned","gn432"],
    ["Ace Attorney Investigations - Miles Edgeworth","gn823"],
    ["Achievement Unlocked","gn60"],
    ["Achievement Unlocked 2","gn61"],
    ["Achievement Unlocked 3","gn62"],
    ["Adventure Capatalist","gn354"],
    ["Alien Hominid","gn304"],
    ["Amanda the Adventurer","gn450"],
    ["Amaze","gn26"],
    ["Andy's Apple Farm","gn426"],
    ["Angry Birds Showdown","gn147"],
    ["Animal Crossing (GAMECUBE)","gn828"],
    ["Antonblast","gn711"],
    ["Apollo Justice - Ace Attorney","gn821"],
    ["Aquapark.io","gn448"],
    ["Archery World Tour","gn148"],
    ["Arthur's Nightmare","gn645"],
    ["Awesome Tanks","gn436"],
    ["Awesome Tanks 2","gn438"],
    ["Azahar (Emulator)","gn849"],
    ["Bacon May Die","gn268"],
    ["Bad Ice Cream","gn269"],
    ["Bad Ice Cream 2","gn270"],
    ["Bad Ice Cream 3","gn271"],
    ["Bad Monday Simulator","gn522"],
    ["Bad Parenting 1","gn166"],
    ["Bad Time Simulator","gn472"],
    ["Baldi's Basics","gn65"],
    ["Baldi's Basics Classic Remastered","gn466"],
    ["Baldi's Basics Plus","gn467"],
    ["Baldi's Basics The Ultra Decompile","gn815"],
    ["Ball Blast","gn149"],
    ["Bank Robbery","gn697"],
    ["Bank Robbery 2","gn439"],
    ["Bank Robbery 3","gn698"],
    ["Baseball Bros","gn547"],
    ["Basket Battle","gn25"],
    ["Basketball Frvr","gn28"],
    ["Basketball Stars","gn272"],
    ["BeatBlock","gn787"],
    ["Bendy and the Ink Machine","gn215"],
    ["Bendy and the Ink Machine: ALL CHAPTERS","gn803"],
    ["BFDIA 5b","gn637"],
    ["BFDIA 5b: 5*30","gn638"],
    ["Big ICE Tower Tiny Square","gn69"],
    ["Big NEON Tower Tiny Square","gn68"],
    ["Big Tower Tiny Square","gn67"],
    ["Binding of Issac: Wrath of the Lamb","gn350"],
    ["BitGun.io","gn561"],
    ["BlackJack","gn312"],
    ["Blocky Snakes","gn168"],
    ["Bloons TD","gn71"],
    ["Bloons TD 2","gn72"],
    ["Bloons TD 3","gn73"],
    ["Bloons TD 4","gn74"],
    ["Bloons TD 5","gn75"],
    ["Bloxorz","gn169"],
    ["Bob The Robber 2","gn76"],
    ["Boom Slingers: Reboom","gn562"],
    ["Brawl Guys.io","gn121"],
    ["Brawl Simulator 3D","gn755"],
    ["Breath of the Wild NDS","gn726"],
    ["Bridge Race","gn14"],
    ["Build a Big Army","gn376"],
    ["Build a Queen","gn319"],
    ["Burrito Bison: Launcha Libre","gn78"],
    ["Bust a Loop","gn521"],
    ["Buster Jam","gn646"],
    ["Camouflage and Sniper","gn378"],
    ["Cannon Basketball","gn79"],
    ["Cannon Basketball 2","gn80"],
    ["Car Survival 3D","gn379"],
    ["CaseOh's Basics in Eating and Fast Food","gn758"],
    ["Cat Connection","gn536"],
    ["Cat Gunner: Super Zombie Shoot","gn537"],
    ["Cave Story","gn632"],
    ["Celeste PICO","gn440"],
    ["CG FC 25","gn563"],
    ["Chain-Chillas","gn873"],
    ["Chat Bot AI (A.I GPT)","gn253"],
    ["Cheese Chompers 3D","gn165"],
    ["Cheese Rolling","gn762"],
    ["City Defense","gn380"],
    ["City Smash","gn449"],
    ["Clash Of Vikings","gn545"],
    ["Clothing Shop 3D","gn381"],
    ["Clover Pit","gn716"],
    ["ClusterTruck","gn848"],
    ["Code Editor","gn429"],
    ["Color Match","gn31"],
    ["Color Water Sort 3D","gn15"],
    ["Command & Conquer","gn773"],
    ["Cooking Mama 2","gn682"],
    ["Cooking Mama 3","gn683"],
    ["Cool Cars Run 3D","gn382"],
    ["Coreball","gn83"],
    ["Count Masters: Stickman Games","gn564"],
    ["Crazy Cattle 3D","gn164"],
    ["Crazy Chicken 3D","gn255"],
    ["Crazy Kitty 3D","gn256"],
    ["Cruelty Squad","gn825"],
    ["Crush Cars 3D","gn383"],
    ["Cubefield","gn84"],
    ["Cuphead","gn465"],
    ["Cut the Rope: Holiday Gift","gn214"],
    ["Cut the Rope: Time Travel","gn213"],
    ["Dadish 3D","gn358"],
    ["Daily Dadish","gn359"],
    ["Dalgona Candy Honeycomb Cookie","gn565"],
    ["Dan The Man","gn520"],
    ["Deltatraveler","gn560"],
    ["Destiny Run 3D","gn384"],
    ["Destroy The Car 3D","gn385"],
    ["Diamond Seeker","gn386"],
    ["Dimension Incident","gn727"],
    ["DON'T YOU LECTURE ME","gn352"],
    ["Doodle Jump","gn470"],
    ["Doom 2","gn602"],
    ["Doom 3","gn626"],
    ["Duck Life","gn234"],
    ["Duck Life 2","gn235"],
    ["Duck Life 3","gn236"],
    ["Duck Life 4","gn237"],
    ["Duck Life 5","gn238"],
    ["Duck Life 8","gn695"],
    ["Dumb Ways to Die","gn738"],
    ["Emulator.JS","gn87"],
    ["Endacopia","gn860"],
    ["Endroll","gn631"],
    ["Escape Road 2","gn265"],
    ["Escape Road 3","gn792"],
    ["Escape Road City 2","gn744"],
    ["Evolving Bombs 3D","gn388"],
    ["Famidash","gn735"],
    ["Fancy Pants Adventure","gn333"],
    ["Fancy Pants Adventure 2","gn334"],
    ["Fancy Pants Adventure 3","gn335"],
    ["Fancy Pants Adventure 4 Part 1","gn336"],
    ["Fancy Pants Adventure 4 Part 2","gn337"],
    ["Fear & Hunger","gn706"],
    ["Fear & Hunger 2: Termina","gn794"],
    ["Fears to Fathom: Home Alone","gn460"],
    ["FIFA 10","gn686"],
    ["FIFA 11","gn685"],
    ["Fih","gn797"],
    ["Final Earth 2","gn512"],
    ["Final Fantasy VII","gn654"],
    ["Find the Alien","gn323"],
    ["Fire and Frost Master","gn389"],
    ["Fireboy and Watergirl 2","gn88"],
    ["FISH","gn761"],
    ["Fitness Empire","gn390"],
    ["Five Nights at Candy's","gn503"],
    ["Five Nights at Epstein's","gn710"],
    ["Five Nights at Freddy's","gn38"],
    ["Five Nights at Freddy's 2","gn39"],
    ["Five Nights at Freddy's 3","gn40"],
    ["Five Nights at Freddy's 4","gn41"],
    ["Five Nights at Freddy's: Into The Pit","gn869"],
    ["Five Nights at Freddy's: Pizza Simulator","gn191"],
    ["Five Nights at Freddy's: Ultimate Custom Night","gn192"],
    ["Five Nights at Freddy's: World Refreshed","gn704"],
    ["Five Nights at Frickbear's 3","gn813"],
    ["Five Nights at Last Breath","gn750"],
    ["Five Nights at Winston's","gn204"],
    ["Flappy Bird","gn129"],
    ["Flick Goal","gn391"],
    ["Flip Master","gn392"],
    ["Flying Gorilla 3D","gn763"],
    ["FNF vs Bob v2.0 (Bob’s Onslaught)","gn618"],
    ["FNF vs Pibby Corrupted","gn700"],
    ["FNF Vs. Hypno's Lullaby v2","gn600"],
    ["FNF Vs. Sonic.EXE 3.0/4.0","gn601"],
    ["Football Bros","gn548"],
    ["Fortzone Battle Royale","gn120"],
    ["Friday Night Funkin vs Carol V2","gn610"],
    ["Friday Night Funkin VS Impostor v4","gn608"],
    ["Friday Night Funkin vs Nonsense","gn644"],
    ["Friday Night Funkin vs Shaggy","gn559"],
    ["Friday Night Funkin vs Shucks v2","gn836"],
    ["Friday Night Funkin vs Sunday Remastered HD","gn609"],
    ["Friday Night Funkin vs Tabi","gn714"],
    ["Friday Night Funkin vs Undertale","gn657"],
    ["Friday Night Funkin vs Zardy","gn715"],
    ["Friday Night Funkin Vs. Cyber Sensation","gn558"],
    ["Friday Night Funkin Vs. Dave and Bambi v3","gn615"],
    ["Friday Night Funkin VS. KAPI","gn555"],
    ["Friday Night Funkin VS. Sky","gn556"],
    ["Friday Night Funkin' D-Sides","gn636"],
    ["Friday Night Funkin' Drop and Roll, but Playable","gn613"],
    ["Friday Night Funkin' Sunday Night Suicide: Rookies Edition","gn642"],
    ["Friday Night Funkin' vs Hypno Lullaby","gn583"],
    ["Friday Night Funkin' VS Impostor B-Sides","gn639"],
    ["Friday Night Funkin': 17 Bucks: Floor 1","gn498"],
    ["Friday Night Funkin': AKAGE","gn690"],
    ["Friday Night Funkin': B-Sides","gn475"],
    ["Friday Night Funkin': Chaos Nightmare - Sonic Vs. Fleetway","gn634"],
    ["Friday Night Funkin': Creepypasta JP","gn484"],
    ["Friday Night Funkin': Darkness Takeover","gn525"],
    ["Friday Night Funkin': FIRE IN THE HOLE: Lobotomy Dash Funkin'","gn499"],
    ["Friday Night Funkin': Gumballs","gn621"],
    ["Friday Night Funkin': Heartbreak Havoc [Vs. Sky: REDUX]","gn691"],
    ["Friday Night Funkin': Hit Single Real","gn483"],
    ["Friday Night Funkin': Indie Cross","gn489"],
    ["Friday Night Funkin': Jeffy's Endless Aethos","gn496"],
    ["Friday Night Funkin': Mario's Madness","gn582"],
    ["Friday Night Funkin': Mistful Crimson Morning Reboot","gn488"],
    ["Friday Night Funkin': Neo","gn478"],
    ["Friday Night Funkin': Pibby: Apocalypse","gn541"],
    ["Friday Night Funkin': Rev-Mixed","gn619"],
    ["Friday Night Funkin': Sarvente's Mid-Fight Masses","gn480"],
    ["Friday Night Funkin': Sonic Legacy","gn486"],
    ["Friday Night Funkin': TWIDDLEFINGER","gn500"],
    ["Friday Night Funkin': V.S. Whitty","gn474"],
    ["Friday Night Funkin': vs. BOPCITY","gn497"],
    ["Friday Night Funkin': vs. Garcello","gn485"],
    ["Friday Night Funkin': Vs. Hatsune Miku","gn477"],
    ["Friday Night Funkin': VS. Henry Stickmin V4","gn862"],
    ["Friday Night Funkin': Vs. Hex","gn476"],
    ["Friday Night Funkin': VS. Impostor: Alternated","gn633"],
    ["Friday Night Funkin': VS. Mario Ultra Rebooted","gn861"],
    ["Friday Night Funkin': vs. QT","gn487"],
    ["Friday Night Funkin': VS. Seek's Cool Deltarune","gn864"],
    ["Friday Night Funkin': VS. Super Mario Bros. Funk Mix DX","gn863"],
    ["Friday Night Funkin': vs. Tricky","gn481"],
    ["Friday Night Funkin’ Soft","gn509"],
    ["Friday Night Funkin’ Wednesday's Infidelity","gn616"],
    ["Gabriel's Awesome Schoolhouse (GASH)","gn784"],
    ["Gamble With Friends","gn871"],
    ["game inside a game inside a game inside a game inside a game inside a game","gn729"],
    ["Gang Beasts","gn867"],
    ["Generic Fighter Maybe","gn519"],
    ["Geometry Dash Lite (REMAKE)","gn27"],
    ["Get Yoked","gn625"],
    ["Getaway Shootout","gn338"],
    ["Getting Over It with Bennett Foddy","gn557"],
    ["Giant Wanted","gn393"],
    ["Goblin Goopmaxxing","gn655"],
    ["Godzilla Daikaiju Battle Royale","gn641"],
    ["Google Baseball","gn257"],
    ["Grand Theft Auto 3","gn851"],
    ["Granny 2","gn125"],
    ["Granny 3","gn852"],
    ["groon groon, babey!","gn495"],
    ["Growden.io","gn603"],
    ["Gun Clone","gn394"],
    ["Gun Runner","gn395"],
    ["Half Life: Opposing Force","gn693"],
    ["Hammer 2: Reloaded","gn844"],
    ["Happy Sheepies","gn351"],
    ["Helltaker","gn790"],
    ["Hide N Seek","gn16"],
    ["High Heels","gn422"],
    ["Highway Racer 2 REMASTERED","gn568"],
    ["Hill Climb Racing Lite","gn157"],
    ["Hobo 1","gn673"],
    ["Hobo 2","gn674"],
    ["Hobo 3","gn675"],
    ["Hobo 4","gn676"],
    ["Hobo 5","gn677"],
    ["Hobo 6","gn678"],
    ["Hobo 7","gn679"],
    ["Hotline Miami","gn217"],
    ["House of Hazards","gn339"],
    ["Hula Hoop Race","gn569"],
    ["Human Expenditure Program","gn482"],
    ["Hungry Lamu","gn798"],
    ["Hungry Lamu 2","gn799"],
    ["Hypper Sandbox","gn551"],
    ["I Have No Mouth, and I Must Scream","gn779"],
    ["I Wanna Be The Guy","gn834"],
    ["I woke up next to you again.","gn491"],
    ["Idle Mining Empire","gn364"],
    ["In Stars and Time","gn667"],
    ["Infinimoes","gn442"],
    ["Inscryption","gn857"],
    ["Into Space 2","gn837"],
    ["JavascriptPS1","gn702"],
    ["Jeffrey Epstein Basics In Education And Kidnapping","gn751"],
    ["Jelly Restaurant","gn570"],
    ["Johnny Trigger","gn93"],
    ["JoJo's Bizarre Adventure: Heritage for the Future","gn859"],
    ["Jumbo Mario","gn712"],
    ["Just Shapes & Beats","gn826"],
    ["Kaji Run","gn396"],
    ["Karlson","gn542"],
    ["Kirby Squeak Squad","gn684"],
    ["Kirby Super Star Ultra","gn680"],
    ["Kirby ~ Soft & Wet","gn692"],
    ["La Madriguera (Lazy Bear Game)","gn843"],
    ["Lacey's Flash Games","gn463"],
    ["Layers Roll","gn571"],
    ["Lazy Jumper","gn572"],
    ["Learn to Fly","gn340"],
    ["Learn to Fly 2","gn341"],
    ["Learn to Fly 3","gn342"],
    ["Learn to Fly Idle","gn343"],
    ["Lethal Ape","gn793"],
    ["Lethal Company","gn865"],
    ["Line Rider","gn95"],
    ["Little Runmo","gn302"],
    ["Lobotomy Corporation","gn850"],
    ["Love Letters","gn538"],
    ["Madness Combat: Project Nexus (classic)","gn471"],
    ["Magic Tiles 3","gn17"],
    ["Make a SuperBoat","gn397"],
    ["Makeover Run","gn398"],
    ["Man Runner 2048","gn573"],
    ["Match Triple 3D","gn665"],
    ["Maze Speedrun","gn324"],
    ["Meatboy","gn689"],
    ["Melon Playground","gn172"],
    ["Metal Gear Solid","gn599"],
    ["Midnight Shift","gn658"],
    ["Milk Inside a Bag of Milk Inside a Bag of Milk","gn650"],
    ["Milk Outside A Bag Of Milk Outside A Bag Of Milk","gn651"],
    ["Mindwave","gn648"],
    ["Minecraft 1.12.2","gn182"],
    ["Minecraft 1.21.4","gn183"],
    ["Minecraft 1.5.2","gn297"],
    ["Minecraft 1.8.8","gn181"],
    ["Minecraft Alpha 1.2.6","gn298"],
    ["Minecraft Beta 1.3","gn299"],
    ["Minecraft Beta 1.7.3","gn300"],
    ["Minecraft Indev","gn301"],
    ["Minecraft Pocket Edition","gn754"],
    ["Minesweeper Mania","gn313"],
    ["Minesweeper Plus","gn604"],
    ["MiSide","gn814"],
    ["Mob Control HTML5","gn22"],
    ["Money Rush","gn400"],
    ["Monster Box 3D","gn401"],
    ["Moto X3M","gn96"],
    ["Moto X3M Pool Party","gn124"],
    ["Moto X3M Spooky","gn99"],
    ["Moto X3M Winter","gn100"],
    ["Mountain Bike Racer","gn774"],
    ["Mutilate a Doll 2","gn640"],
    ["My Talking Baby Hippo","gn840"],
    ["myTeardrop","gn540"],
    ["n-gon","gn180"],
    ["Nazi Zombies: Portable","gn308"],
    ["Need For Speed: Carbon","gn810"],
    ["Need For Speed: Most Wanted","gn811"],
    ["Need For Speed: Underground 2","gn812"],
    ["Newgrounds Rumble","gn587"],
    ["Nijika's Ahoge","gn447"],
    ["Nubby's Number Factory","gn517"],
    ["Off","gn629"],
    ["Office Fight","gn402"],
    ["Offroad Mountain Bike","gn116"],
    ["One Shot: World Machine edition","gn846"],
    ["Oneshot (LEGACY)","gn622"],
    ["Orange Roulette","gn659"],
    ["Oshi Oshi Punch!","gn516"],
    ["OvO 3 Dimensions","gn3"],
    ["Pac Man World","gn592"],
    ["Pac Man World 2","gn593"],
    ["Pac-Man Superfast","gn158"],
    ["PacMan (Horror)","gn515"],
    ["Papa's Bakeria","gn218"],
    ["Papa's Burgeria","gn219"],
    ["Papa's Cheeseria","gn220"],
    ["Papa's Cupcakeria","gn221"],
    ["Papa's Donuteria","gn222"],
    ["Papa's Freezeria","gn223"],
    ["Papa's Hot Doggeria","gn224"],
    ["Papa's Pancakeria","gn225"],
    ["Papa's Pastaria","gn226"],
    ["Papa's Pizeria","gn227"],
    ["Papa's Scooperia","gn228"],
    ["Papa's Sushiria","gn229"],
    ["Papa's Taco Mia","gn230"],
    ["Papa's Wingeria","gn231"],
    ["Paper.io 2","gn102"],
    ["Papers, Please","gn187"],
    ["Parappa The Rapper","gn524"],
    ["PEAK","gn847"],
    ["Peaks of Yore","gn717"],
    ["People Playground","gn194"],
    ["Pet The Cat","gn877"],
    ["Phoenix Wright - Ace Attorney","gn820"],
    ["Phoenix Wright - Ace Attorney - Justice for All","gn822"],
    ["Phoenix Wright - Ace Attorney - Trials and Tribulations","gn824"],
    ["Pico's School (1999)","gn687"],
    ["PikuNiku","gn856"],
    ["Pizza Tower: Scoutdigo","gn628"],
    ["Plants vs Zombies","gn232"],
    ["Plants vs. Zombies 2 Gardenless","gn597"],
    ["Plants vs. Zombies GOTY Edition","gn842"],
    ["Please Dont Touch Anything","gn660"],
    ["Plinko","gn544"],
    ["Pokemon Firered","gn694"],
    ["Pokemon HeartGold","gn696"],
    ["Pokemon Red","gn505"],
    ["Pokey Ball","gn326"],
    ["Poly Track","gn123"],
    ["Postal","gn617"],
    ["Pottery Master","gn574"],
    ["Power Hover","gn743"],
    ["Protektor","gn282"],
    ["Race Master 3D","gn160"],
    ["Raft Wars","gn344"],
    ["Raft Wars 2","gn345"],
    ["Raldi's Crackhouse","gn670"],
    ["Ravenfield","gn854"],
    ["RE:RUN","gn260"],
    ["Real Flight Simulator","gn701"],
    ["Red Ball","gn239"],
    ["Red Ball 2","gn240"],
    ["Red Ball 3","gn241"],
    ["Red Ball 4","gn242"],
    ["Red Ball 4 Vol. 2","gn243"],
    ["Red Ball 4 Vol. 3","gn244"],
    ["Resident Evil","gn741"],
    ["Resident Evil 2","gn742"],
    ["Rhythm Heaven","gn809"],
    ["Rich Run 3D","gn421"],
    ["Riddle School","gn287"],
    ["Riddle School 2","gn288"],
    ["Riddle School 3","gn289"],
    ["Riddle School 4","gn290"],
    ["Riddle School 5","gn291"],
    ["Riddle Transfer","gn292"],
    ["Riddle Transfer 2","gn293"],
    ["RigBMX","gn493"],
    ["RigBMX 2","gn494"],
    ["Rio Rex","gn643"],
    ["ROAM0120.EXE","gn875"],
    ["Robot Invasion","gn403"],
    ["Rogue Sergeant The Final Operation","gn656"],
    ["Rolling Sky","gn553"],
    ["Rooftop Snipers","gn283"],
    ["Room Sort","gn321"],
    ["Roulette Hero","gn720"],
    ["Royal Towers: Medieval TD","gn661"],
    ["Ruffle","gn113"],
    ["Run 1","gn175"],
    ["Run 2","gn176"],
    ["s.p.l.i.t","gn839"],
    ["Saihate Station (さいはて駅)","gn737"],
    ["Sally Face","gn870"],
    ["Sam & Max Hit the Road","gn772"],
    ["sandspiel","gn317"],
    ["sandstone","gn469"],
    ["Scampton The Great","gn802"],
    ["Scary Shawarma Kiosk: the ANOMALY","gn765"],
    ["Schoolboy Runaway","gn605"],
    ["SCP: Containment Breach","gn853"],
    ["Scrap Metal 3","gn188"],
    ["Scratch Inc","gn781"],
    ["Seat Jam 3D","gn404"],
    ["Serial Experiments Lain","gn778"],
    ["Shapez.io","gn595"],
    ["Shift at Midnight","gn721"],
    ["Shipo.io","gn306"],
    ["Shooting Master","gn405"],
    ["Shovel 3D","gn575"],
    ["ShredSauce","gn725"],
    ["Side Effects","gn318"],
    ["Silent Hill","gn713"],
    ["Sky Riders","gn576"],
    ["Slender: The 8 Pages","gn451"],
    ["Slendytubbies 1","gn796"],
    ["Slendytubbies 2","gn806"],
    ["Slendytubbies 2D","gn807"],
    ["Slice it All","gn128"],
    ["Slime.io","gn327"],
    ["Slowroads","gn369"],
    ["Smash Karts","gn370"],
    ["Snow Rider 3D","gn119"],
    ["Soccer Random","gn739"],
    ["Sonic CD","gn589"],
    ["Sonic Mania","gn590"],
    ["Sonic the Hedgehog 2: Community's Cut","gn549"],
    ["Sonic the Hedgehog 3: Angel Island Remastered","gn550"],
    ["Sonic.EXE","gn598"],
    ["Sonic.EXE (ORIGINAL)","gn606"],
    ["Sort the Court","gn346"],
    ["Space Funeral","gn630"],
    ["Space Waves","gn117"],
    ["Speed Stars","gn266"],
    ["SpiderDoll","gn347"],
    ["Spiral Roll","gn349"],
    ["SpongeBob SquarePants: Krabby Katch","gn533"],
    ["SpongeBob SquarePants: Land Ho!","gn526"],
    ["SpongeBob SquarePants: Sandy's Sponge Stacker","gn529"],
    ["SpongeBob SquarePants: SpongeBob Run","gn527"],
    ["SpongeBob SquarePants: Squidward's Sizzlin' Scare","gn528"],
    ["SpongeBob SquarePants: Tasty Pastry Party","gn530"],
    ["SpongeBob SquarePants: The Kah-Ray-Tay Squid","gn531"],
    ["SpongeBob SquarePants: WereSquirrel","gn532"],
    ["Stacky Dash","gn18"],
    ["Station 141","gn452"],
    ["Station Saturn","gn453"],
    ["Steal Brainrot Online","gn577"],
    ["Stick War: Legacy","gn666"],
    ["Stick With It","gn502"],
    ["Stickman and Guns","gn578"],
    ["Stickman Destruction","gn699"],
    ["Stickman Duel","gn769"],
    ["Stickman Fight Ragdoll","gn371"],
    ["Stickman Golf","gn374"],
    ["Stickman Kombat 2D","gn768"],
    ["Stone Grass Mowing Simulator","gn584"],
    ["Sugary Spire Exhibition Night: Pizzano's Awesome Night Mod","gn876"],
    ["Super Mario 63","gn314"],
    ["Super Mario Bros","gn508"],
    ["Super Mario Bros. Remastered","gn736"],
    ["Super Monkey Ball 1&2","gn749"],
    ["Super Smash Flash","gn647"],
    ["Supermarket 3D","gn406"],
    ["Supreme Duelist","gn19"],
    ["Survival Race","gn122"],
    ["Survive to Victory","gn407"],
    ["Swordfight!!","gn513"],
    ["Swords and Sandals 2","gn845"],
    ["Swords and Souls","gn178"],
    ["Tag","gn627"],
    ["Tall.io","gn664"],
    ["Tanuki Sunset","gn305"],
    ["Team Fortress 2","gn866"],
    ["Teen Titans GO!: Jump Jousts","gn534"],
    ["Teen Titans GO!: Jump Jousts 2","gn535"],
    ["Telekinesis","gn411"],
    ["Telekinesis Attack","gn408"],
    ["Telekinesis Car","gn409"],
    ["Telekinesis Drive","gn410"],
    ["Temple Run 2","gn10"],
    ["Tetris","gn733"],
    ["Tetris","gn745"],
    ["The Deadseat","gn458"],
    ["The Impossible Quiz","gn507"],
    ["The Legend of Zelda Majora's Mask","gn612"],
    ["The Legend of Zelda Ocarina of Time","gn611"],
    ["The Man In The Window","gn459"],
    ["The One Fish","gn872"],
    ["The Oregon Trail","gn586"],
    ["The World's Hardest Game","gn103"],
    ["The World's Hardest Game 3","gn104"],
    ["The World's Hardest Game 4","gn105"],
    ["They Are Coming","gn348"],
    ["Thing-Thing Arena 3","gn780"],
    ["This Is The Only Level","gn106"],
    ["This Is The Only Level 2","gn107"],
    ["Three Goblets","gn620"],
    ["TileTopia","gn329"],
    ["Time Shooter 1","gn199"],
    ["Tiny Fishing","gn108"],
    ["Tomb Of The Mask","gn109"],
    ["Tomodachi Collection","gn510"],
    ["Toss The Turtle","gn110"],
    ["Totally Accurate Battle Simulator (TABS)","gn827"],
    ["Touhou 1 Touhou-Reiiden","gn829"],
    ["Touhou 2 Touhou-Fuumaroku","gn830"],
    ["Touhou 3 Touhou-Yumejikuu","gn831"],
    ["Touhou 4 Touhou-Gensokyou","gn832"],
    ["Touhou 5 Touhou-Kaikidan","gn833"],
    ["Touhou Mother","gn523"],
    ["Touhou: Luminous Strike","gn518"],
    ["Toy Rider","gn614"],
    ["Traffic Racer","gn707"],
    ["Traffic Rider","gn580"],
    ["Trees Hate You","gn801"],
    ["Trivia Crack","gn163"],
    ["Trombone Champion","gn855"],
    ["Tube Jumpers","gn111"],
    ["Tug of War with Cars","gn413"],
    ["Twerk Race 3D","gn414"],
    ["Twisted Rope 3D","gn415"],
    ["t³ (T cubed)","gn818"],
    ["Um Jammer Lammy","gn782"],
    ["Undertale Last Breath PHASE THREE","gn748"],
    ["Undertale: Last Breath","gn731"],
    ["UNDERWHEELS","gn492"],
    ["Untitled Goose Game","gn718"],
    ["UvuvwevwevweOnyetenvewveUgwemubwemOssas","gn795"],
    ["Vampire Survivors","gn804"],
    ["Vena","gn838"],
    ["Vex 1","gn45"],
    ["Vex 2","gn46"],
    ["Vex 3","gn47"],
    ["Vex 3 XMAS","gn48"],
    ["Vex 4","gn49"],
    ["Vex 5","gn50"],
    ["Vex 6","gn51"],
    ["Vex 7","gn52"],
    ["Vex 8","gn53"],
    ["Vex Challenges","gn54"],
    ["Vex X3M","gn55"],
    ["Vex X3M 2","gn56"],
    ["Vib-Ribbon","gn788"],
    ["Volley Random","gn786"],
    ["VS Rewrite: ROUND 2","gn703"],
    ["Wall Crawler","gn416"],
    ["War Regions","gn417"],
    ["War The Knights","gn284"],
    ["WarioWare: Touched!","gn841"],
    ["Waterworks!","gn594"],
    ["We Become What We Behold","gn671"],
    ["Weapon Craft Run","gn418"],
    ["Weapon Scale","gn420"],
    ["Web Dashers","gn785"],
    ["WebFishing","gn423"],
    ["Wheely","gn245"],
    ["Wheely 2","gn246"],
    ["Wheely 3","gn247"],
    ["Wheely 4","gn248"],
    ["Wheely 5","gn249"],
    ["Wheely 6","gn250"],
    ["Wheely 7","gn251"],
    ["Wheely 8","gn252"],
    ["Witch's Heart","gn756"],
    ["Wolfenstein 3D","gn874"],
    ["YoHoHo.io","gn835"],
    ["Your Only Move Is HUSTLE","gn776"],
]
}

/* BUILD GRID */

const abToggle = document.getElementById("abToggle");
const container=document.getElementById("games")

function getPlays(id){
    return Number(localStorage.getItem("plays_"+id)) || 0
}

games.forEach(g=>{

const plays = getPlays(g[1])

// device tags live in the name (💻 = pc, 📱 = mobile). untagged games show for both
const pc = g[0].includes("💻")
const mobile = g[0].includes("📱")
const tagged = pc || mobile
const name = g[0].replace(/💻|📱|❔|\+/g, "").trim()

const card=document.createElement("a")
card.className="game gameLink"
card.dataset.id=g[1]
card.dataset.name=name.toLowerCase()
// letters and numbers only, so "geometrydash" finds "geometry dash" and "1v1" finds "1v1.lol"
card.dataset.flat=name.toLowerCase().replace(/[^a-z0-9]/g, "")
card.dataset.pc=pc || !tagged
card.dataset.mobile=mobile || !tagged
card.dataset.order=container.children.length
card.dataset.plays=plays
card.dataset.global=0
card.dataset.hot=0
card.href=g[2] || `https://native.beer/work/${g[1]}`

card.innerHTML=`
<div class="thumb">
<img src="./assets/${g[1]}.png?v=3" loading="lazy" alt="" onload="this.classList.add('loaded')" onerror="this.style.visibility='hidden'">
<div class="playCount${plays ? " played" : ""}">Your plays: ${plays}</div>
<div class="hotTag">🔥 HOT</div>
<div class="playIcon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg></div>
<button class="favBtn" aria-label="Favourite" title="Favourite">☆</button>
</div>
<div class="gameInfo">
<div class="gameTitle"></div>
<div class="globalPlays">🌍 0 global plays</div>
<div class="tags">${pc ? '<span class="tag">PC</span>' : ""}${mobile ? '<span class="tag">Mobile</span>' : ""}</div>
</div>
`
card.querySelector(".gameTitle").textContent=name

container.appendChild(card)

})


/* FAVOURITES */

const library = document.getElementById("library")
const favList = document.getElementById("favList")
const favCount = document.getElementById("favCount")
const favSeg = document.getElementById("favSeg")

let favourites = []
try { favourites = JSON.parse(localStorage.getItem("favourites") || "[]") } catch {}

const gameById = new Map(games.map(g => [g[1], g]))
favourites = favourites.filter(id => gameById.has(id))

function cardFor(id){
    return container.querySelector(`.game[data-id="${CSS.escape(id)}"]`)
}

function renderFavourites(){
    favList.innerHTML = ""
    favourites.forEach(id => {
        const card = cardFor(id)
        const item = document.createElement("a")
        item.className = "favItem gameLink"
        item.dataset.id = id
        item.href = card.href
        item.innerHTML = `
<div class="thumb"><img src="./assets/${id}.png?v=3" alt="" onload="this.classList.add('loaded')" onerror="this.style.visibility='hidden'"></div>
<span class="gameTitle"></span>
<button class="favBtn on" aria-label="Remove from favourites" title="Remove from favourites">★</button>`
        item.querySelector(".gameTitle").textContent = card.querySelector(".gameTitle").textContent
        favList.appendChild(item)
    })
    favCount.textContent = favourites.length ? `${favourites.length} game${favourites.length === 1 ? "" : "s"}` : ""
    library.classList.toggle("noFavs", favourites.length === 0)

    container.querySelectorAll(".game").forEach(card => {
        const on = favourites.includes(card.dataset.id)
        const btn = card.querySelector(".favBtn")
        btn.classList.toggle("on", on)
        btn.textContent = on ? "★" : "☆"
        btn.title = on ? "Remove from favourites" : "Favourite"
    })
}

function toggleFavourite(id, btn){
    favourites = favourites.includes(id) ? favourites.filter(f => f !== id) : [...favourites, id]
    localStorage.setItem("favourites", JSON.stringify(favourites))
    renderFavourites()
    const cardBtn = cardFor(id).querySelector(".favBtn")
    cardBtn.classList.remove("pop")
    void cardBtn.offsetWidth
    cardBtn.classList.add("pop")
}

function setFavPosition(pos){
    library.dataset.fav = pos
    localStorage.setItem("favPosition", pos)
    favSeg.querySelectorAll("button").forEach(b => b.classList.toggle("active", b.dataset.fav === pos))
}

favSeg.querySelectorAll("button").forEach(b => b.onclick = () => setFavPosition(b.dataset.fav))
setFavPosition(localStorage.getItem("favPosition") || "top")
renderFavourites()


/* RECENTLY PLAYED */

const recentRow = document.getElementById("recentRow")
const recentList = document.getElementById("recentList")

let recent = []
try { recent = JSON.parse(localStorage.getItem("recent") || "[]") } catch {}
recent = recent.filter(r => gameById.has(r.id))

function timeAgo(t){
    const mins = Math.round((Date.now() - t) / 60000)
    if (mins < 1) return "just now"
    if (mins < 60) return `${mins}m ago`
    const hours = Math.round(mins / 60)
    if (hours < 24) return `${hours}h ago`
    const days = Math.round(hours / 24)
    return days === 1 ? "yesterday" : `${days} days ago`
}

function renderRecent(){
    recentList.innerHTML = ""
    recent.forEach(r => {
        const card = cardFor(r.id)
        const item = document.createElement("a")
        item.className = "recentItem gameLink"
        item.dataset.id = r.id
        item.href = card.href
        item.innerHTML = `
<div class="thumb"><img src="./assets/${r.id}.png?v=3" alt="" onload="this.classList.add('loaded')" onerror="this.style.visibility='hidden'"></div>
<span class="gameTitle"></span>
<small>${timeAgo(r.t)}</small>`
        item.querySelector(".gameTitle").textContent = card.querySelector(".gameTitle").textContent
        recentList.appendChild(item)
    })
    recentRow.classList.toggle("empty", recent.length === 0)
}

function addRecent(id){
    recent = [{ id, t: Date.now() }, ...recent.filter(r => r.id !== id)].slice(0, 12)
    localStorage.setItem("recent", JSON.stringify(recent))
    renderRecent()
}

document.getElementById("clearRecent").onclick = () => {
    recent = []
    localStorage.removeItem("recent")
    renderRecent()
}

renderRecent()


/* SORTING + GLOBAL STATS */

const STATS_URL = location.hostname === "localhost" ? "http://localhost:8787" : "https://chatapp.native.beer"
const sortSelect = document.getElementById("sortSelect")

function shortNum(n){
    if (n >= 1e6) return (n / 1e6).toFixed(n >= 1e7 ? 0 : 1).replace(/\.0$/, "") + "m"
    if (n >= 1e3) return (n / 1e3).toFixed(n >= 1e4 ? 0 : 1).replace(/\.0$/, "") + "k"
    return String(n)
}

function plural(n, word){
    return `${shortNum(n)} ${word}${n === 1 ? "" : "s"}`
}

function sortGames(){
    const mode = sortSelect.value
    const num = (card, key) => Number(card.dataset[key])
    const cards = [...container.children]

    cards.sort((a, b) => {
        if (mode === "az") return a.dataset.name.localeCompare(b.dataset.name)
        if (mode === "hot") {
            // hot games first (by plays in last 24h), then everything else by global plays
            const h = num(b, "hot") - num(a, "hot")
            if (h) return h
        }
        if (mode === "global" || mode === "hot") {
            const g = num(b, "global") - num(a, "global")
            if (g) return g
        }
        return num(b, "plays") - num(a, "plays") || num(a, "order") - num(b, "order")
    })

    cards.forEach(card => container.appendChild(card))
}

sortSelect.value = localStorage.getItem("sort") || "yours"
sortSelect.onchange = () => {
    localStorage.setItem("sort", sortSelect.value)
    filterGames() // re-sorts, and keeps search results ranked
    window.scrollTo({ top: document.querySelector(".hero").offsetTop + document.querySelector(".hero").offsetHeight - 60, behavior: "smooth" })
}
sortGames()

async function loadStats(){
    const res = await fetch(`${STATS_URL}/stats`)
    const stats = await res.json()
    const hot = new Map(stats.hot.map(h => [h.id, h.n]))

    container.querySelectorAll(".game").forEach(card => {
        const n = stats.totals[card.dataset.id] || 0
        card.dataset.global = n
        card.querySelector(".globalPlays").textContent = `🌍 ${plural(n, "global play")}`
        card.dataset.hot = hot.get(card.dataset.id) || 0
        card.classList.toggle("isHot", hot.has(card.dataset.id))
    })

    container.classList.add("statsLoaded")
    if (sortSelect.value !== "yours" && sortSelect.value !== "az") filterGames()
}

if (OFFLINE) {
    // global sorts make no sense without stats
    sortSelect.querySelectorAll('option[value="global"], option[value="hot"]').forEach(o => o.disabled = true)
    if (sortSelect.value === "global" || sortSelect.value === "hot") {
        sortSelect.value = "yours"
        sortGames()
    }
} else {
    loadStats().catch(() => {})
}

function countGlobalPlay(id){
    if (OFFLINE) return
    const body = new Blob([JSON.stringify({ id, cid: chatCid })], { type: "text/plain" })
    // sendBeacon still gets sent even though the page is navigating away
    if (!(navigator.sendBeacon && navigator.sendBeacon(`${STATS_URL}/play`, body))) {
        fetch(`${STATS_URL}/play`, { method: "POST", body, keepalive: true }).catch(() => {})
    }
}


/* CARD ENTRANCE (fade up as cards scroll into view) */

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches

if ("IntersectionObserver" in window && !reduceMotion) {
    let batch = 0
    let batchTimer = null
    const cardObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return
            const card = entry.target
            // stagger cards that appear together
            card.style.setProperty("--d", `${Math.min(batch++, 12) * 40}ms`)
            card.classList.remove("pre")
            card.classList.add("in")
            // drop the class once done so hover transforms work again
            card.addEventListener("animationend", ev => {
                if (ev.animationName === "cardIn") card.classList.remove("in")
            })
            cardObserver.unobserve(card)
        })
        clearTimeout(batchTimer)
        batchTimer = setTimeout(() => batch = 0, 100)
    }, { rootMargin: "0px 0px -40px 0px" })

    document.querySelectorAll(".game").forEach(card => {
        card.classList.add("pre")
        cardObserver.observe(card)
    })
}


/* LAUNCH ZOOM (thumbnail grows to fill the screen) */

// shared with the about:blank tab, which doesn't have this page's stylesheet
const LAUNCH_CSS = `
.launcher{
    position:fixed;
    z-index:2000;
    overflow:hidden;
    background:#000 center/cover no-repeat;
    border-radius:var(--radius);
    box-shadow:0 30px 80px rgba(0,0,0,0.6);
    transition:
        top 0.55s cubic-bezier(.7,0,.2,1),
        left 0.55s cubic-bezier(.7,0,.2,1),
        width 0.55s cubic-bezier(.7,0,.2,1),
        height 0.55s cubic-bezier(.7,0,.2,1),
        border-radius 0.55s,
        opacity 0.35s;
}

.launcher::before{
    content:"";
    position:absolute;
    inset:0;
    background:
        radial-gradient(circle at 50% 50%, transparent, rgba(0,0,0,0.85) 75%),
        color-mix(in srgb, var(--accent) 25%, rgba(0,0,0,0.45));
    opacity:0;
    transition:opacity 0.4s 0.2s;
}

.launcher.open::before{
    opacity:1;
}

.launchText{
    position:absolute;
    inset:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:16px;
    color:white;
    text-align:center;
    padding:20px;
    opacity:0;
    transform:scale(0.9);
    transition:0.35s 0.3s;
}

.launcher.open .launchText{
    opacity:1;
    transform:none;
}

.launchText b{
    font-size:clamp(22px, 4vw, 38px);
    font-weight:800;
    letter-spacing:-0.5px;
    text-shadow:0 4px 20px rgba(0,0,0,0.6);
}

.launchText span{
    opacity:0.8;
    font-size:14px;
}

.spinner{
    width:44px;
    height:44px;
    border-radius:50%;
    border:4px solid rgba(255,255,255,0.2);
    border-top-color:white;
    animation:spin 0.8s linear infinite;
}

@keyframes spin{
    to{ transform:rotate(360deg); }
}

.launcher.closing{
    opacity:0;
}
`

const launchStyle = document.createElement("style")
launchStyle.textContent = LAUNCH_CSS
document.head.appendChild(launchStyle)

function launchZoom(link, win = window){
    const doc = win.document
    const thumb = link.querySelector(".thumb")
    const r = thumb.getBoundingClientRect()
    const img = thumb.querySelector("img")

    const el = doc.createElement("div")
    el.className = "launcher"
    el.style.top = r.top + "px"
    el.style.left = r.left + "px"
    el.style.width = r.width + "px"
    el.style.height = r.height + "px"
    if (img && img.complete && img.naturalWidth) el.style.backgroundImage = `url("${img.src}")`

    el.innerHTML = `<div class="launchText"><div class="spinner"></div><b></b><span>Loading game…</span></div>`
    el.querySelector("b").textContent = link.querySelector(".gameTitle").textContent
    doc.body.appendChild(el)

    el.getBoundingClientRect() // force layout so the transition runs
    el.style.top = "0px"
    el.style.left = "0px"
    // a brand new tab may not know its size yet, so use viewport units there
    el.style.width = win === window ? doc.documentElement.clientWidth + "px" : "100vw"
    el.style.height = win === window ? win.innerHeight + "px" : "100vh"
    el.style.borderRadius = "0px"
    el.classList.add("open")

    return el
}

function closeLauncher(el){
    el.classList.add("closing")
    setTimeout(() => el.remove(), 400)
}

// the about:blank tab comes to the front straight away, so the zoom plays in there
// and fades out once the game has loaded (at least long enough to see it)
function launchZoomInTab(win, link, iframe){
    const doc = win.document
    const rootStyle = getComputedStyle(document.documentElement)
    const style = doc.createElement("style")
    style.textContent = `:root{ --accent:${rootStyle.getPropertyValue("--accent")}; --radius:14px; }
        body{ margin:0; background:#0e1015; font-family:system-ui,sans-serif; overflow:hidden; }
        ${LAUNCH_CSS}`
    doc.head.appendChild(style)

    const el = launchZoom(link, win)
    const shownAt = Date.now()
    let closed = false
    const close = () => {
        if (closed) return
        closed = true
        setTimeout(() => closeLauncher(el), Math.max(0, 1200 - (Date.now() - shownAt)))
    }
    iframe.addEventListener("load", close)
    setTimeout(close, 8000) // don't cover the game forever if load never fires
}

function noZoom(){
    return reduceMotion || localStorage.getItem("launchZoom") === "false"
}

// coming back with the back button: drop any leftover launcher
window.addEventListener("pageshow", () => {
    document.querySelectorAll(".launcher").forEach(el => el.remove())
})


/* TRACK PLAYS + TRUE ABOUT:BLANK */

document.addEventListener("click", (e) => {
  // star button sits inside the game link, so handle it first
  const favBtn = e.target.closest(".favBtn");
  if (favBtn) {
    e.preventDefault();
    toggleFavourite(favBtn.closest("[data-id]").dataset.id);
    return;
  }

  const link = e.target.closest(".gameLink");
  if (!link) return;

  const id = link.dataset.id;

  // track plays (on the main card, even when clicked from favourites)
  const card = cardFor(id);
  let plays = Number(localStorage.getItem("plays_" + id)) || 0;
  plays++;
  localStorage.setItem("plays_" + id, plays);
  card.dataset.plays = plays;
  card.querySelector(".playCount").innerText = `Your plays: ${plays}`;
  card.querySelector(".playCount").classList.add("played");
  countGlobalPlay(id);
  addRecent(id);

  // let ctrl/cmd/shift/middle clicks open normally
  if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;

  e.preventDefault();

  const url = link.href;
  const useAB = localStorage.getItem("aboutBlank") === "true";

  if (!useAB) {
    if (noZoom()) { location.href = url; return; }
    launchZoom(link);
    setTimeout(() => location.href = url, 650);
    return;
  }

  // open the tab straight away (inside the click) so popup blockers allow it
  const win = window.open("about:blank", "_blank");
  if (!win) { location.href = url; return; }

  // wait for tab to be ready
  win.document.body.style.margin = "0";

  const iframe = win.document.createElement("iframe");
  iframe.src = url;
  iframe.style.border = "none";
  iframe.style.width = "100vw";
  iframe.style.height = "100vh";
  iframe.allow = "fullscreen; gamepad; autoplay";

  win.document.body.appendChild(iframe);

  if (!noZoom()) launchZoomInTab(win, link, iframe);

  // stealth: use the same disguise as this tab
  const cloak = getCloak();
  win.document.title = cloak.title;
  const icon = win.document.createElement("link");
  icon.rel = "icon";
  icon.href = new URL(cloak.icon, location.href).href;
  win.document.head.appendChild(icon);
});


const saved = localStorage.getItem("aboutBlank");

if (saved === null) {
  // no saved state → default ON
  abToggle.checked = true;
  localStorage.setItem("aboutBlank", "true");
} else {
  // use saved value
  abToggle.checked = saved === "true";
}

abToggle.onchange = () => {
  localStorage.setItem("aboutBlank", abToggle.checked);
};

/* SEARCH */

const search=document.getElementById("search")
const count=document.getElementById("count")
const empty=document.getElementById("empty")

/* SEARCH FILTER */

let device = "all"

// typo tolerant search: smallest number of edits (wrong, missing, extra or swapped letter)
// needed to make the query appear anywhere inside the name
function fuzzyDistance(query, text){
    const m = query.length
    const n = text.length
    let prev2 = null
    let prev = new Array(n + 1).fill(0) // a match can start anywhere in the name
    for (let i = 1; i <= m; i++) {
        const row = new Array(n + 1)
        row[0] = i
        for (let j = 1; j <= n; j++) {
            const cost = query[i - 1] === text[j - 1] ? 0 : 1
            let best = Math.min(prev[j] + 1, row[j - 1] + 1, prev[j - 1] + cost)
            // swapped neighbours ("geomtery") count as one mistake
            if (prev2 && i > 1 && j > 1 && query[i - 1] === text[j - 2] && query[i - 2] === text[j - 1]) {
                best = Math.min(best, prev2[j - 2] + 1)
            }
            row[j] = best
        }
        prev2 = prev
        prev = row
    }
    return Math.min(...prev)
}

// how many mistakes we allow depends on how much has been typed
function allowedTypos(length){
    if (length <= 3) return 0
    if (length <= 6) return 1
    return 2
}

// lower = better match, Infinity = no match
function matchScore(card, query, flat){
    const name = card.dataset.name
    if (name.startsWith(query)) return 0
    if (name.includes(query)) return 0.5
    if (!flat) return Infinity
    if (card.dataset.flat.includes(flat)) return 0.75
    const allowed = allowedTypos(flat.length)
    if (!allowed) return Infinity
    const d = fuzzyDistance(flat, card.dataset.flat)
    return d <= allowed ? d : Infinity
}

function filterGames(){
    const query = search.value.toLowerCase().trim();
    const flat = query.replace(/[^a-z0-9]/g, "");
    library.classList.toggle("searching", query !== "");

    // start from the chosen sort, then put the best matches first
    sortGames();
    const scores = new Map();

    document.querySelectorAll(".game").forEach(card => {
        const deviceOk = device === "all" || card.dataset[device] === "true";
        const score = query ? matchScore(card, query, flat) : 0;
        if (score !== Infinity && deviceOk) {
            card.style.display = "";
            scores.set(card, score);
        } else {
            card.style.display = "none";
        }
    });

    if (query) {
        [...scores.keys()]
            .sort((a, b) => scores.get(a) - scores.get(b))
            .forEach(card => container.appendChild(card));
    }

    // highlight the matching filter chip
    allbutton.classList.toggle("active", device === "all");
    pcbutton.classList.toggle("active", device === "pc");
    tabletbutton.classList.toggle("active", device === "mobile");

    updateCount(); // Update the visible game count
}

search.addEventListener("input", filterGames);

let currentCount = 0
let countFrame = null

// time based so it always finishes in ~0.6s, even if the tab was in the background
function animateCount(target){

cancelAnimationFrame(countFrame)

const from = currentCount
const duration = 600
const start = performance.now()

function tick(now){
const t = Math.min(1, (now - start) / duration)
const eased = 1 - Math.pow(1 - t, 3)
currentCount = Math.round(from + (target - from) * eased)

count.innerHTML = `<span class="show">${currentCount} game${currentCount === 1 ? "" : "s"}</span>`

if(t < 1) countFrame = requestAnimationFrame(tick)
}

countFrame = requestAnimationFrame(tick)

}

function updateCount(){
let visible = 0

document.querySelectorAll(".game").forEach(g=>{
if(g.style.display!="none") visible++
})

empty.style.display = visible ? "none" : "block"
animateCount(visible)
}

updateCount()

/* PANIC BUTTON */
const classroombutton = document.getElementById("classroombutton");
const panicToggle = document.getElementById("panicToggle");

panicToggle.checked = localStorage.getItem("panicButton") === "true";
classroombutton.style.display = panicToggle.checked ? "flex" : "none";

panicToggle.onchange = () => {
    localStorage.setItem("panicButton", panicToggle.checked);
    classroombutton.style.display = panicToggle.checked ? "flex" : "none";
};

const panicKeyBtn = document.getElementById("panicKeyBtn");
const panicUrlField = document.getElementById("panicUrl");
let listeningForKey = false;

function panic(){
    let url = (localStorage.getItem("panicUrl") || "").trim() || "https://classroom.google.com/";
    if (!/^https?:\/\//i.test(url)) url = "https://" + url;
    location.replace(url);
}

classroombutton.onclick = panic;

function showPanicKey(){
    const key = localStorage.getItem("panicKey");
    panicKeyBtn.textContent = key ? (key === " " ? "Space" : key) : "None";
}

panicKeyBtn.onclick = () => {
    listeningForKey = true;
    panicKeyBtn.classList.add("listening");
    panicKeyBtn.textContent = "Press a key…";
};

panicUrlField.value = localStorage.getItem("panicUrl") || "";
panicUrlField.oninput = () => localStorage.setItem("panicUrl", panicUrlField.value);

document.addEventListener("keydown", (e) => {
    if (listeningForKey) {
        e.preventDefault();
        listeningForKey = false;
        panicKeyBtn.classList.remove("listening");
        // Escape / Backspace clear the key
        if (e.key === "Escape" || e.key === "Backspace") localStorage.removeItem("panicKey");
        else localStorage.setItem("panicKey", e.key);
        showPanicKey();
        return;
    }
    const key = localStorage.getItem("panicKey");
    if (!key || e.key !== key) return;
    // don't fire while typing in a box
    if (e.target.closest("input, textarea, [contenteditable]")) return;
    panic();
}, true);

showPanicKey();

/* CHANGE TAB FOR ?icon=classroom */
if (params.get("icon") === "classroom") {
    localStorage.setItem("cloak", "classroom");
    applyCloak();
    redtext.innerText='The tab is named "Home - Classroom"!'
    redtext.style.color='#16a34a'
    classroombutton.style.display="flex"
}

/* DISCLAIMER (only once per version) */

// bump this whenever the disclaimer text changes so everyone sees it again
const DISCLAIMER_VERSION = "1"

const agree=document.getElementById("agree")
const enter=document.getElementById("enter")
const overlay=document.getElementById("overlay")

search.value=''

let skipDisclaimer = localStorage.getItem("disclaimerAccepted") === DISCLAIMER_VERSION

if (params.get("icon") === "admin") {
    // Change tab title
    document.title = "admin panel"
    skipDisclaimer = true
    redtext.style.color='#0072FE'
    let totalPlayed = 0;

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        if (key.startsWith("plays_")) {
            totalPlayed += Number(localStorage.getItem(key)) || 0;
        }
    }

    console.log(totalPlayed);
    redtext.innerText=`you are admin. total played games: ${totalPlayed}`
}

if (params.get("icon") === "clear") {
    // Change tab title
    document.title = "admin panel"
    skipDisclaimer = true
    redtext.style.color='#0072FE'
    let totalPlayed = 0;
    (() => {
        localStorage.clear();
        console.log("Local storage cleared");
    })();
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        if (key.startsWith("plays_")) {
            totalPlayed += Number(localStorage.getItem(key)) || 0;
        }
    }

    console.log(totalPlayed);
    redtext.innerText=`you are admin. total played games: ${totalPlayed}`

}

// Show overlay unless this version was already accepted
if (!skipDisclaimer) {
    overlay.classList.remove("hidden")
} else if (params.get("icon") !== "admin") {
    // runs after the rest of the script has loaded
    setTimeout(() => maybeStartTour(), 700)
}

// Enable enter button only when checked
agree.onchange=()=>{
    enter.disabled=!agree.checked
}

enter.onclick = () => {
    localStorage.setItem("disclaimerAccepted", DISCLAIMER_VERSION)
    overlay.classList.add("hidden")
    agree.checked = false;
    enter.disabled = true;
    setTimeout(() => maybeStartTour(), 400)
};


/* THEME */

const body=document.body
const btn=document.getElementById("themeBtn")
const themeSeg=document.getElementById("themeSeg")

function setTheme(theme){
    body.classList.remove("dark","light")
    body.classList.add(theme)
    localStorage.setItem("theme",theme)
    themeSeg.querySelectorAll("button").forEach(b=>{
        b.classList.toggle("active", b.dataset.theme === theme)
    })
}

setTheme(body.classList.contains("light") ? "light" : "dark")

btn.onclick=()=>{
    setTheme(body.classList.contains("dark") ? "light" : "dark")
}

themeSeg.querySelectorAll("button").forEach(b=>{
    b.onclick=()=>setTheme(b.dataset.theme)
})

/* FILTER CHIPS */

pcbutton.onclick=()=>{
    device='pc'
    filterGames()
}

tabletbutton.onclick=()=>{
    device='mobile'
    filterGames()
}

allbutton.onclick=()=>{
    device='all'
    filterGames()
}

clear.onclick=()=>{
    search.value=''
    filterGames()
    search.focus()
}


/* BACKGROUND FX */

const bgFx = document.getElementById("bgFx")
const spotlight = document.getElementById("spotlight")
const fxToggle = document.getElementById("fxToggle")

// sparkles: random size, speed and sway
for (let i = 0; i < 18; i++) {
    const sp = document.createElement("div")
    sp.className = "spark"
    sp.style.left = Math.random() * 100 + "vw"
    sp.style.setProperty("--size", (2 + Math.random() * 4).toFixed(1) + "px")
    sp.style.setProperty("--dur", (12 + Math.random() * 16).toFixed(1) + "s")
    sp.style.setProperty("--delay", (-Math.random() * 25).toFixed(1) + "s")
    sp.style.setProperty("--sway", (Math.random() * 120 - 60).toFixed(0) + "px")
    bgFx.appendChild(sp)
}

let spotFrame = null
window.addEventListener("pointermove", (e) => {
    if (spotFrame) return
    spotFrame = requestAnimationFrame(() => {
        spotlight.style.setProperty("--mx", e.clientX + "px")
        spotlight.style.setProperty("--my", e.clientY + "px")
        spotFrame = null
    })
})

const sizeSeg = document.getElementById("sizeSeg")
function setCardSize(size){
    document.documentElement.dataset.size = size
    localStorage.setItem("cardSize", size)
    sizeSeg.querySelectorAll("button").forEach(b => b.classList.toggle("active", b.dataset.size === size))
}
sizeSeg.querySelectorAll("button").forEach(b => b.onclick = () => setCardSize(b.dataset.size))
setCardSize(document.documentElement.dataset.size)

const zoomToggle = document.getElementById("zoomToggle")
zoomToggle.checked = localStorage.getItem("launchZoom") !== "false"
zoomToggle.onchange = () => localStorage.setItem("launchZoom", zoomToggle.checked)

const offlineToggle = document.getElementById("offlineToggle")
offlineToggle.checked = OFFLINE
offlineToggle.onchange = () => {
    localStorage.setItem("offline", offlineToggle.checked)
    location.reload()
}
if (OFFLINE) document.getElementById("chatToggleLabel").classList.add("disabled")

fxToggle.checked = localStorage.getItem("bgFx") !== "false"
fxToggle.onchange = () => {
    localStorage.setItem("bgFx", fxToggle.checked)
    document.documentElement.classList.toggle("nofx", !fxToggle.checked)
}


/* RANDOM GAME + SHORTCUTS */

const randomBtn = document.getElementById("randomBtn")

function playRandom(){
    // picks from whatever the current search / filter shows
    const visible = [...container.querySelectorAll(".game")].filter(c => c.style.display !== "none")
    if (!visible.length) return
    randomBtn.classList.remove("roll")
    void randomBtn.offsetWidth
    randomBtn.classList.add("roll")
    visible[Math.floor(Math.random() * visible.length)].click()
}

randomBtn.onclick = playRandom

document.addEventListener("keydown", (e) => {
    // the panic key picker already used this key press
    if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return
    if (e.target.closest("input, textarea, select, [contenteditable]")) return
    if (e.key === "/") {
        e.preventDefault()
        search.focus()
        search.select()
    } else if (e.key === "r" || e.key === "R") {
        playRandom()
    }
})


/* YOUR STATS */

const statGrid = document.getElementById("statGrid")

function renderStats(){
    let total = 0
    let tried = 0
    let top = null
    container.querySelectorAll(".game").forEach(card => {
        const n = Number(card.dataset.plays)
        if (!n) return
        total += n
        tried++
        if (!top || n > Number(top.dataset.plays)) top = card
    })

    const tiles = [
        [shortNum(total), "total plays"],
        [`${tried} / ${games.length}`, "games tried"],
        [String(favourites.length), "favourites"],
        [top ? top.querySelector(".gameTitle").textContent : "—", top ? `most played (${top.dataset.plays})` : "most played"]
    ]

    statGrid.innerHTML = ""
    tiles.forEach(([value, label]) => {
        const el = document.createElement("div")
        el.className = "stat"
        el.innerHTML = "<b></b><span></span>"
        el.querySelector("b").textContent = value
        el.querySelector("b").title = value
        el.querySelector("span").textContent = label
        statGrid.appendChild(el)
    })
}


/* SETTINGS */

const settingsOverlay=document.getElementById("settingsOverlay")
const cloakGrid=document.getElementById("cloakGrid")
const customCloak=document.getElementById("customCloak")
const cloakTitle=document.getElementById("cloakTitle")
const cloakIcon=document.getElementById("cloakIcon")
const swatches=document.getElementById("swatches")

function openSettings(){
    renderStats()
    settingsOverlay.classList.remove("hidden")
}

function closeSettings(){
    settingsOverlay.classList.add("hidden")
}

settingsBtn.onclick=openSettings
const closeSettingsBtn=document.getElementById("closeSettings")
closeSettingsBtn.onclick=closeSettings

settingsOverlay.addEventListener("click",(e)=>{
    if(e.target===settingsOverlay) closeSettings()
})

document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape") { closeSettings(); chatCloseFn() }
})

// tab disguise
function renderCloak(){
    const current = localStorage.getItem("cloak") || "classroom"
    cloakGrid.querySelectorAll(".cloakOpt").forEach(o=>{
        o.classList.toggle("active", o.dataset.cloak === current)
    })
    customCloak.classList.toggle("show", current === "custom")
    cloakTitle.value = localStorage.getItem("cloakTitle") || ""
    cloakIcon.value = localStorage.getItem("cloakIcon") || ""
}

cloakGrid.querySelectorAll(".cloakOpt").forEach(o=>{
    o.onclick=()=>{
        localStorage.setItem("cloak", o.dataset.cloak)
        applyCloak()
        renderCloak()
    }
})

cloakTitle.oninput=()=>{
    localStorage.setItem("cloakTitle", cloakTitle.value)
    applyCloak()
}

cloakIcon.oninput=()=>{
    localStorage.setItem("cloakIcon", cloakIcon.value)
    applyCloak()
}

renderCloak()

// accent colour
function renderSwatches(){
    const current = localStorage.getItem("accent") || "blue"
    swatches.innerHTML=""
    Object.entries(ACCENTS).forEach(([name, colour])=>{
        const s=document.createElement("button")
        s.className="swatch" + (name===current ? " active" : "")
        s.style.background=colour
        s.title=name
        s.setAttribute("aria-label", name)
        s.onclick=()=>{
            localStorage.setItem("accent", name)
            document.documentElement.style.setProperty("--accent", colour)
            renderSwatches()
        }
        swatches.appendChild(s)
    })
}

renderSwatches()

// clear storage
document.getElementById("clearStorage").onclick=()=>{
    if(!confirm("Clear all local storage? This resets play counts, settings and the disclaimer.")) return
    localStorage.clear()
    location.reload()
}


/* FIRST VISIT TOUR */

const TOUR_STEPS = [
    {
        title: "Welcome to Playables! 👋",
        text: "Here's a quick tour so you know where everything is. Takes about 20 seconds, or skip it any time."
    },
    {
        target: () => document.querySelector(".searchField"),
        title: "Search",
        text: `Type to search all ${games.length} games instantly.`
    },
    {
        target: () => document.querySelector(".hero .chips"),
        title: "Filter and sort",
        text: "Only show games that work on PC or mobile, and sort by your plays, global plays, or what's hot right now."
    },
    {
        target: () => [...document.querySelectorAll(".game")].find(g => g.style.display !== "none"),
        title: "Play a game",
        text: "Click any game to play. Tap the ☆ to favourite it so it shows up at the top. Cards also show your plays, global plays, and a 🔥 HOT tag on today's most played games."
    },
    {
        target: () => document.getElementById("settingsBtn"),
        title: "Settings",
        text: "Disguise the tab (it looks like Google Classroom right now), change colours, turn off animations, or clear your data."
    },
    {
        target: () => document.getElementById("themeBtn"),
        title: "Light or dark",
        text: "Quick switch between light and dark mode."
    },
    {
        target: () => document.getElementById("chatFab"),
        title: "Network chat",
        text: "Chat with other people on the same network who have the site open. Nothing is saved. Be nice!"
    },
    {
        title: "You're all set! 🎮",
        text: "You can replay this tour any time from Settings."
    }
]

let tourEls = null
let tourSteps = []
let tourIndex = 0

function maybeStartTour(){
    if (localStorage.getItem("tourDone")) return

    // people who have already played something aren't new, don't bother them
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).startsWith("plays_")) {
            localStorage.setItem("tourDone", "true")
            return
        }
    }

    startTour()
}

function startTour(){
    if (tourEls) return
    closeSettings()
    chatCloseFn()
    window.scrollTo({ top: 0, behavior: "smooth" })

    // leave out steps whose element is hidden (e.g. chat turned off)
    tourSteps = TOUR_STEPS.filter(step => {
        if (!step.target) return true
        const el = step.target()
        return el && el.getClientRects().length > 0
    })
    tourIndex = 0

    const shade = document.createElement("div")
    shade.className = "tourShade"
    const hole = document.createElement("div")
    hole.className = "tourHole center"
    const card = document.createElement("div")
    card.className = "tourCard"
    card.setAttribute("role", "dialog")
    card.innerHTML = `
        <button class="tourSkip">Skip tour</button>
        <h4></h4>
        <p></p>
        <div class="tourFoot">
            <div class="tourDots">${tourSteps.map(() => "<span></span>").join("")}</div>
            <button class="tourBack">Back</button>
            <button class="tourNext">Next</button>
        </div>`

    document.body.append(shade, hole, card)
    tourEls = { shade, hole, card }

    card.querySelector(".tourSkip").onclick = endTour
    card.querySelector(".tourBack").onclick = () => showTourStep(tourIndex - 1)
    card.querySelector(".tourNext").onclick = () => {
        if (tourIndex === tourSteps.length - 1) endTour()
        else showTourStep(tourIndex + 1)
    }
    shade.onclick = () => card.querySelector(".tourNext").click()

    showTourStep(0)
}

function showTourStep(i){
    tourIndex = Math.max(0, Math.min(i, tourSteps.length - 1))
    const step = tourSteps[tourIndex]
    const { card } = tourEls

    card.querySelector("h4").textContent = step.title
    card.querySelector("p").textContent = step.text
    card.querySelector(".tourBack").style.visibility = tourIndex === 0 ? "hidden" : "visible"
    card.querySelector(".tourNext").textContent =
        tourIndex === 0 ? "Start" : tourIndex === tourSteps.length - 1 ? "Let's go!" : "Next"
    card.querySelectorAll(".tourDots span").forEach((d, n) => d.classList.toggle("on", n === tourIndex))

    const el = step.target && step.target()
    if (el) {
        const r = el.getBoundingClientRect()
        // scroll things that are off screen into view first
        if (r.top < 70 || r.bottom > innerHeight - 20) {
            el.scrollIntoView({ block: "center", behavior: "smooth" })
            setTimeout(positionTour, 450)
        }
    }
    positionTour()
    card.querySelector(".tourNext").focus({ preventScroll: true })
}

function positionTour(){
    if (!tourEls) return
    const { hole, card } = tourEls
    const step = tourSteps[tourIndex]
    const el = step.target && step.target()
    const cw = card.offsetWidth
    const ch = card.offsetHeight

    if (!el) {
        hole.classList.add("center")
        Object.assign(hole.style, { top: innerHeight / 2 + "px", left: innerWidth / 2 + "px", width: "0px", height: "0px" })
        card.style.left = (innerWidth - cw) / 2 + "px"
        card.style.top = (innerHeight - ch) / 2 + "px"
        return
    }

    const pad = 8
    const r = el.getBoundingClientRect()
    hole.classList.remove("center")
    Object.assign(hole.style, {
        top: r.top - pad + "px",
        left: r.left - pad + "px",
        width: r.width + pad * 2 + "px",
        height: r.height + pad * 2 + "px"
    })

    // card goes below the target if it fits, otherwise above
    const gap = 16
    let top = r.bottom + pad + gap
    if (top + ch > innerHeight - 12) top = r.top - pad - gap - ch
    top = Math.max(12, Math.min(top, innerHeight - ch - 12))
    let left = r.left + r.width / 2 - cw / 2
    left = Math.max(16, Math.min(left, innerWidth - cw - 16))

    card.style.top = top + "px"
    card.style.left = left + "px"
}

function endTour(){
    if (!tourEls) return
    localStorage.setItem("tourDone", "true")
    Object.values(tourEls).forEach(el => el.remove())
    tourEls = null
}

window.addEventListener("resize", positionTour)
window.addEventListener("scroll", positionTour, { passive: true })

document.addEventListener("keydown", (e) => {
    if (!tourEls) return
    if (e.key === "Escape") endTour()
    else if (e.key === "ArrowRight") tourEls.card.querySelector(".tourNext").click()
    else if (e.key === "ArrowLeft" && tourIndex > 0) showTourStep(tourIndex - 1)
})

document.getElementById("replayTour").onclick = () => {
    closeSettings()
    setTimeout(startTour, 300)
}


/* NETWORK CHAT */

const CHAT_URL = location.hostname === "localhost" ? "ws://localhost:8787/ws" : "wss://chatapp.native.beer/ws"

const chatFab = document.getElementById("chatFab")
const chatPanel = document.getElementById("chatPanel")
const chatLog = document.getElementById("chatLog")
const chatEmpty = document.getElementById("chatEmpty")
const chatForm = document.getElementById("chatForm")
const chatInput = document.getElementById("chatInput")
const chatBadge = document.getElementById("chatBadge")
const chatDot = document.getElementById("chatDot")
const chatStatus = document.getElementById("chatStatus")
const chatTitle = document.getElementById("chatTitle")
const chatRoomCode = document.getElementById("chatRoomCode")
const chatToggle = document.getElementById("chatToggle")

let chatWs = null
let chatMe = null
let chatAdmin = false
let chatUnread = 0
let chatRetry = 0
let chatRetryTimer = null
let chatOnline = 0

// random id so a kick sticks to this browser
let chatCid = localStorage.getItem("chatCid")
if (!chatCid) {
    chatCid = crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2)
    localStorage.setItem("chatCid", chatCid)
}

chatRoomCode.value = localStorage.getItem("chatRoom") || ""

function chatSetStatus(on, text){
    chatDot.classList.toggle("on", on)
    chatStatus.innerText = text
}

function chatAdd(node){
    chatEmpty.style.display = "none"
    const atBottom = chatLog.scrollHeight - chatLog.scrollTop - chatLog.clientHeight < 60
    chatLog.appendChild(node)
    // keep it light: only the last 150 lines
    while (chatLog.children.length > 151) chatLog.children[1].remove()
    if (atBottom) chatLog.scrollTop = chatLog.scrollHeight
}

function chatSystem(text, err){
    const el = document.createElement("div")
    el.className = "chatSystem" + (err ? " err" : "")
    el.textContent = text
    chatAdd(el)
}

function chatMessage(m){
    const mine = chatMe && m.from.id === chatMe.id
    const el = document.createElement("div")
    el.className = "chatMsg" + (mine ? " mine" : "")

    const name = document.createElement("div")
    name.className = "chatName"
    name.textContent = mine ? "You" : m.from.name
    if (m.from.admin) {
        const tag = document.createElement("span")
        tag.className = "adminTag"
        tag.textContent = " ★ admin"
        name.appendChild(tag)
    }
    if (chatAdmin && !mine) {
        const kick = document.createElement("button")
        kick.className = "kick"
        kick.textContent = "kick"
        kick.onclick = () => chatSend({ type: "kick", id: m.from.id })
        name.appendChild(kick)
    }

    const bubble = document.createElement("div")
    bubble.className = "chatBubble"
    bubble.textContent = m.text

    el.appendChild(name)
    el.appendChild(bubble)
    chatAdd(el)

    if (!mine && chatPanel.classList.contains("hidden")) {
        chatUnread++
        chatBadge.textContent = chatUnread > 9 ? "9+" : chatUnread
        chatBadge.style.display = "grid"
    }
}

function chatSend(obj){
    if (chatWs && chatWs.readyState === 1) chatWs.send(JSON.stringify(obj))
}

function chatConnect(){
    clearTimeout(chatRetryTimer)
    if (chatWs) {
        chatWs.onclose = null
        chatWs.close()
    }

    const room = chatRoomCode.value.trim()
    const name = localStorage.getItem("chatName") || ""
    const url = `${CHAT_URL}?cid=${encodeURIComponent(chatCid)}&room=${encodeURIComponent(room)}&name=${encodeURIComponent(name)}`

    chatSetStatus(false, "Connecting…")
    chatWs = new WebSocket(url)

    chatWs.onopen = () => {
        chatRetry = 0
    }

    chatWs.onmessage = (e) => {
        let m
        try { m = JSON.parse(e.data) } catch { return }

        if (m.type === "welcome") {
            chatMe = m.you
            chatOnline = m.online
            chatTitle.innerText = m.room ? `Room: ${m.room}` : "Network chat"
            chatSetStatus(true, `${chatOnline} online · you are ${chatMe.name}`)
            if (m.locked) chatSystem("Chat is locked right now.")
            const key = sessionStorage.getItem("chatAdminKey")
            if (key) chatSend({ type: "admin", key })
        }
        else if (m.type === "msg") chatMessage(m)
        else if (m.type === "system") chatSystem(m.text)
        else if (m.type === "error") chatSystem(m.text, true)
        else if (m.type === "online") {
            chatOnline = m.n
            if (chatMe) chatSetStatus(true, `${chatOnline} online · you are ${chatMe.name}`)
        }
        else if (m.type === "you") {
            chatMe = { id: m.id, name: m.name }
            localStorage.setItem("chatName", m.name)
            chatSetStatus(true, `${chatOnline} online · you are ${chatMe.name}`)
        }
        else if (m.type === "admin") {
            chatAdmin = true
            chatSystem("Admin mode on. /lock, /unlock, or click kick on a message.")
        }
    }

    chatWs.onclose = (e) => {
        chatSetStatus(false, "Offline")
        if (e.code === 4003) return // kicked, don't reconnect
        // back off: 2s, 4s, 8s... up to 30s
        chatRetry++
        chatRetryTimer = setTimeout(chatConnect, Math.min(30000, 1000 * 2 ** chatRetry))
    }
}

chatForm.onsubmit = (e) => {
    e.preventDefault()
    const text = chatInput.value.trim()
    if (!text) return
    chatInput.value = ""

    // slash commands
    const [cmd, ...rest] = text.split(" ")
    const arg = rest.join(" ")
    if (cmd === "/name") return chatSend({ type: "name", name: arg })
    if (cmd === "/admin") {
        sessionStorage.setItem("chatAdminKey", arg)
        return chatSend({ type: "admin", key: arg })
    }
    if (cmd === "/lock" || cmd === "/unlock") return chatSend({ type: cmd.slice(1) })

    if (!chatWs || chatWs.readyState !== 1) return chatSystem("Not connected yet.", true)
    chatSend({ type: "msg", text })
}

function chatOpen(){
    chatPanel.classList.remove("hidden")
    chatUnread = 0
    chatBadge.style.display = "none"
    chatLog.scrollTop = chatLog.scrollHeight
    setTimeout(() => chatInput.focus(), 200)
}

function chatCloseFn(){
    chatPanel.classList.add("hidden")
}

chatFab.onclick = () => chatPanel.classList.contains("hidden") ? chatOpen() : chatCloseFn()
document.getElementById("chatClose").onclick = chatCloseFn

document.getElementById("chatJoin").onclick = () => {
    localStorage.setItem("chatRoom", chatRoomCode.value.trim())
    chatLog.querySelectorAll(".chatMsg, .chatSystem").forEach(el => el.remove())
    chatEmpty.style.display = ""
    chatConnect()
}

chatToggle.checked = localStorage.getItem("chatOn") !== "false"
chatToggle.onchange = () => {
    localStorage.setItem("chatOn", chatToggle.checked)
    document.documentElement.classList.toggle("nochat", !chatToggle.checked)
    if (chatToggle.checked) {
        chatConnect()
    } else {
        clearTimeout(chatRetryTimer)
        if (chatWs) { chatWs.onclose = null; chatWs.close() }
        chatSetStatus(false, "Off")
    }
}

if (chatToggle.checked && !OFFLINE) chatConnect()


/* NOTIFICATIONS (DISCORD STYLE) */

const notifWrap = document.createElement("div");
notifWrap.className = "notifWrap";
document.body.appendChild(notifWrap);

// small red dot indicator (on the settings button)
const redDot = document.getElementById("redDot");

async function loadNotifications() {
  const res = await fetch("https://notify.native.beer/notifications");
  const data = await res.json();

  renderNotifications(data);
}

function renderNotifications(notifs) {
  const seen = JSON.parse(localStorage.getItem("seenNotifications") || "[]");

  notifWrap.innerHTML = "";

  let hasUnread = false;

  notifs.forEach(n => {

    const isSeen = seen.includes(n.id);
    if (!isSeen) hasUnread = true;

    const card = document.createElement("div");
    card.className = "notif";

    // left color bar
    const bar = document.createElement("div");
    bar.className = "notifBar";
    bar.style.background = n.color || "var(--accent)";

    // content
    const content = document.createElement("div");
    content.className = "notifContent";

    const title = document.createElement("div");
    title.className = "notifTitle";
    title.innerText = n.title || "Notification";

    const text = document.createElement("div");
    text.className = "notifText";
    text.innerText = n.text || "";

    content.appendChild(title);
    content.appendChild(text);

    card.appendChild(bar);
    card.appendChild(content);

    // click = mark seen
    card.onclick = () => {
      if (!seen.includes(n.id)) {
        seen.push(n.id);
        localStorage.setItem("seenNotifications", JSON.stringify(seen));
      }
      card.remove();

      // hide red dot if all seen
      const updated = JSON.parse(localStorage.getItem("seenNotifications") || "[]");
      if (updated.length === notifs.length) {
        redDot.style.display = "none";
      }
    };

    notifWrap.appendChild(card);
  });

  redDot.style.display = hasUnread ? "block" : "none";
}

// initial + refresh
if (!OFFLINE) loadNotifications().catch(() => {});
