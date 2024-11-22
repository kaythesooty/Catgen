const names = {
  normalSuffixes: [
    "fur", "fur", "fur", "fur", "fur", "fur", "fur", "fur", "fur", "fur", "fur",
    "tuft", "tuft", "tuft", "tuft", "tuft", "tooth", "tooth", "tooth", "tooth", "tooth",
    "pelt", "pelt", "pelt", "pelt", "pelt", "pelt", "pelt", "pelt", "pelt", "pelt", "pelt", 
    "tail", "tail", "tail", "tail", "tail", "tail", "tail", "claw", "claw", "claw", "claw", "claw", "claw",
    "foot", "foot", "foot", "foot", "foot", "whisker", "whisker", "whisker", "whisker", "whisker", "whisker",
    "heart", "heart", "heart", "heart", "heart", "heart", "heart", "heart",
    "arch", "ash", "aster", "back", "badger", "bark", "bat", "beak", "beam", "bee", "beetle", "bellow", "belly", "berry", 
    "billow", "bird", "bite", "blaze", "blink", "bloom", "blossom", "blotch", "blur", "bone", "bounce", "bracken", "bramble", 
    "branch", "break", "breeze", "briar", "bright", "brook", "bubble", "bud", "bumble", "burn", "burr", "burst", "bush", "buzz", 
    "call", "catcher", "chase", "chaser", "chasm", "chest", "chill", "chirp", "chomp", "cinder", "clash", "cloud", "clover",
    "crackle", "crash", "crawl", "creek", "crest", "cry", "curl", "current", "daisy", "dance", "dapple", "dart", "dash", "dawn", 
    "daze", "dazzle", "dew", "dream", "drift", "drizzle", "drop", "dusk", "dust", "eagle", "ear", "ears", "echo", "egg", "ember", 
    "eye", "eyes", "face", "falcon", "fall", "fang", "feather", "fern", "fin", "fire", "fish", "flake", "flame", "flare", "flash", 
    "fleck", "flick", "flicker", "flight", "flip", "flit", "flood", "flow", "flower", "fluff", "fog", "fox", "freeze", "frost", "fruit", 
    "fuzz", "gale", "gaze", "ghost", "glare", "gleam", "glide", "glint", "goose", "gorse", "grass", "growl", "hail", "hare", 
    "haven", "hawk", "haze", "heather", "hiss", "hollow", "holly", "honey", "hope", "howl", "husk", "ice", "iris", "ivy", "jaw", 
    "jay", "joy", "jumble", "jump", "kestrel", "kick", "kite", "knoll", "lake", "larch", "laurel", "leaf", "leap", "leg", "leopard", 
    "light", "lightning", "lilac", "lily", "lion", "lotus", "mallow", "mane", "mark", "mask", "meadow", "mimic", "minnow", "mist", 
    "moon", "moor", "moss", "moth", "mouse", "munch", "murk", "muzzle", "needle", "nest", "nettle", "newt", "nibble", "night", "nip", 
    "noise", "nose", "nudge", "nut", "pad", "patch", "path", "peak", "petal", "plume", "pond", "pool", "poppy", "pounce", "prance", 
    "prickle", "puddle", "purr", "quill", "quiver", "rain", "rapid", "raven", "reed", "rip", "ripple", "rise", "rise", "river", 
    "roach", "roar", "rock", "root", "rose", "rumble", "rump", "run", "runner", "rush", "rustle", "scar", "scratch", "screech", 
    "seed", "seeker", "shade", "shadow", "shard", "shell", "shimmer", "shine", "shiver", "shock", "shriek", "sight", "silk", "skip", 
    "skitter", "sky", "slash", "slip", "snap", "snarl", "snout", "snow", "soar", "song", "spark", "speck", "speckle", "spider", 
    "spike", "spirit", "splash", "splinter", "spore", "spot", "spots", "spring", "sprout", "stalk", "stem", "step", "sting", "stone", 
    "storm", "streak", "stream", "strike", "stripe", "sun", "swarm", "swipe", "swoop", "talon", "tangle",
    "thistle", "thorn", "thrift", "throat", "thrush", "thud", "thunder", "tiger", "timber", "toe", "tooth", "trail", "tree", 
    "trot", "tumble", "twist", "valley", "watcher", "water", "wave", "web", "whisper", "whistle", "willow", "wind", "wing", "wish", "wisp", 
    "zoom"
  ],
  peltSuffixes: {
    "TwoColour": ["patch", "spot", "splash", "patch", "spots", "swan"],
    "Tabby": ["stripe", "feather", "leaf", "stripe", "shade"],
    "Marbled": ["stripe", "feather", "leaf", "stripe", "shade"],
    "Speckled": ["dapple", "speckle", "spot", "speck", "freckle", "fleck"],
    "Bengal": ["dapple", "speckle", "spots", "speck", "freckle", "fleck"],
    "Rosette": ["dapple", "speckle", "spots", "dapple", "freckle", "fleck"],
    "Smoke": ["fade", "dusk", "dawn", "smoke"],
    "Ticked": ["spots", "pelt", "speckle", "freckle"],
    "Mackerel": ["stripe", "feather", "leaf", "stripe", "fern"],
    "Classic": ["stripe", "feather", "leaf", "stripe", "fern"],
    "Sokoke": ["stripe", "feather", "leaf", "stripe", "fern"],
    "Agouti": ["back", "pelt", "fur"],
    "Singlestripe": ["stripe", "streak", "back", "shade", "stem", "shadow"],
    "Masked": ["stripe", "mask", "mask", "shade"],
    "Tortie": ["dapple", "speckle", "spot", "dapple"],
    "Calico": ["stripe", "dapple", "patch", "patch"]
  },
  tortiePeltSuffixes: {
    "single": ["dapple", "speckle", "spots", "splash"],
    "tabby": ["stripe", "feather", "leaf", "stripe", "shade", "fern"],
    "marbled": ["stripe", "feather", "leaf", "stripe", "shade", "fern"],
    "speckled": ["dapple", "speckle", "spot", "speck", "freckle"],
    "bengal": ["dapple", "speckle", "spots", "speck", "fern", "freckle"],
    "rosette": ["dapple", "speckle", "spots", "dapple", "fern", "freckle"],
    "smoke": ["fade", "dusk", "dawn", "smoke"],
    "ticked": ["spots", "pelt", "speckle", "freckle"],
    "mackerel": ["stripe", "feather", "fern", "shade"],
    "classic": ["stripe", "feather", "fern"],
    "sokoke": ["stripe", "feather", "fern", "shade", "dapple"],
    "agouti": ["back", "pelt", "fur", "dapple", "splash"],
    "singlestripe": ["stripe", "back", "shade", "stem", "dapple"],
    "masked": ["stripe", "dapple", "mask", "mask", "shade"]
  },

  normalPrefixes: [
    "Adder", "Alder", "Ant", "Antler", "Aphid", "Apple", "Apricot", "Arch", "Aspen", "Aster", 
    "Badger", "Barley", "Basil", "Bass", "Bay", "Beam", "Bear", "Beaver", "Bee", "Beech", "Beetle", "Berry", "Big", "Billow", "Birch", 
    "Bird", "Bite", "Bitter", "Bittern", "Bliss", "Blizzard", "Bloom", "Blossom", "Blotch", "Bluebell", "Bluff", "Bog", "Borage", 
    "Bough", "Boulder", "Bounce", "Bracken", "Bramble", "Brave", "Breeze", "Briar", "Bright", "Brindle", "Bristle", "Broken", "Brook", 
    "Brush", "Bubbling", "Bud", "Bug", "Bumble", "Burdock", "Burr", "Burrow", "Bush", "Butterfly", "Buzzard", 
    "Carnation", "Carp", "Caterpillar", "Cave", "Cedar", "Chaffinch", "Chasing", "Cherry", "Chervil", "Chestnut", "Chirp", "Chive",
    "Cicada", "Claw", "Clay", "Clear", "Cliff", "Clover", "Comfrey", "Condor", "Cone", "Conifer", "Conker", "Copse", "Cougar", 
    "Coyote", "Crag", "Crane", "Creek", "Cress", "Crest", "Crested", "Cricket", "Crooked", "Crouch", "Curl", "Curlew", "Curly", 
    "Current", "Cypress", "Dahlia", "Daisy", "Dancing", "Dapple", "Dappled", "Dart", "Dash", "Dawn", "Dazzle", "Dew", "Dog", "Down", 
    "Downy", "Dream", "Drift", "Drizzle", "Droplet", "Dry", "Duck", "Dusk", "Eagle", "Echo", "Edelweiss", "Egret", "Elder", "Elm", 
    "Ermine", "Faith", "Falcon", "Fallen", "Falling", "Fallow", "Fawn", "Feather", "Fennel", "Fern", "Ferret", "Fickle", "Fidget", 
    "Fierce", "Fin", "Finch", "Fir", "Fish", "Flail", "Flash", "Flax", "Fleck", "Fleet", "Flicker", "Flight", "Flint", "Flip", 
    "Flit", "Flood", "Flower", "Fluff", "Fluffy", "Flutter", "Fly", "Fog", "Foggy", "Freckle", "Fringe", "Frog", "Frond", "Fruit", 
    "Fumble", "Furled", "Furze", "Fuzz", "Fuzzy", "Gale", "Gander", "Gardenia", "Garlic", "Gentle", "Gill", "Glade", "Goose", "Gorge", 
    "Gorse", "Grass", "Gravel", "Grouse", "Gull", "Guppy", "Gust", "Hail", "Half", "Hare", "Hatch", "Haven", "Hawk", "Hay", "Hazel", 
    "Hazy", "Heart", "Heath", "Heavy", "Hemlock", "Heron", "Hill", "Hollow", "Holly", "Honey", "Hoot", "Hop", "Hope", "Hornet", 
    "Hound", "Howl", "Hush", "Hyacinth", "Iris", "Ivy", "Jackdaw", "Jagged", "Jay", "Jumble", "Jump", "Junco", "Juniper", "Kestrel", 
    "Kink", "Kite", "Lake", "Larch", "Lark", "Laurel", "Lavender", "Leaf", "Leap", "Leopard", "Lichen", "Light", "Lightning", "Lilac", 
    "Lily", "Lion", "Little", "Lizard", "Locust", "Long", "Lotus", "Loud", "Low", "Luck", "Lupine", "Lynx", "Mallow", "Mantis", 
    "Maple", "Marigold", "Marsh", "Meadow", "Midge", "Milk", "Milkweed", "Mink", "Minnow", "Mistle", "Mite", "Mole", "Moon", 
    "Moor", "Morning", "Moss", "Mossy", "Moth", "Mottle", "Mottled", "Mouse", "Mumble", "Murk", "Myrtle", "Nectar", "Needle", 
    "Nettle", "Newt", "Nightingale", "Nimble", "Nut", "Oak", "Oat", "Odd", "One", "Oriole", "Osprey", "Pansy", "Panther", "Parsley", 
    "Partridge", "Patch", "Patchouli", "Peak", "Pear", "Peat", "Perch", "Petal", "Petunia", "Pheasant", "Pigeon", "Pike", "Pine", 
    "Piper", "Plover", "Plum", "Pod", "Pond", "Pool", "Pop", "Poppy", "Posy", "Pounce", "Prance", "Prickle", "Prim", "Primrose", 
    "Puddle", "Python", "Quail", "Quick", "Quiet", "Quill", "Quiver", "Rabbit", "Raccoon", "Ragged", "Rain", "Rainbow", "Rat", 
    "Rattle", "Raven", "Reed", "Ridge", "Rift", "Rindle", "Ripple", "River", "Roach", "Roar", "Rook", "Root", "Rose", "Rosy", 
    "Rowan", "Rubble", "Runnel", "Running", "Rush", "Rye", "Sable", "Sapling", "Scorch", "Scratch", "Seed", "Serpent", "Shard", 
    "Sharp", "Shell", "Shimmer", "Shine", "Shining", "Shivering", "Short", "Shrew", "Shrub", "Shy", "Silent", "Silk", "Silt", "Skip", 
    "Sky", "Slate", "Sleek", "Sleepy", "Sleet", "Slight", "Slip", "Sloe", "Slope", "Slumber", "Small", "Snail", "Snake", "Snap", 
    "Sneeze", "Snip", "Snowy", "Soft", "Song", "Sorrel", "Spark", "Sparrow", "Speckle", "Spider", "Spike", "Splash", "Splinter", 
    "Spore", "Spot", "Spotted", "Spring", "Sprout", "Spruce", "Squirrel", "Starling", "Stem", "Stoat", "Stork", "Streak", "Stream", 
    "Strike", "Stumpy", "Sunny", "Swallow", "Swamp", "Swarm", "Sweet", "Swift", "Sycamore", "Tadpole", "Tall", "Talon", "Tangle", 
    "Tansy", "Tawny", "Tempest", "Thistle", "Thorn", "Thrift", "Thrush", "Thunder", "Thyme", "Tiger", "Timber", "Tiny", "Toad", 
    "Torn", "Tremble", "Trickle", "Trout", "Tuft", "Tulip", "Tumble", "Turtle", "Valley", "Vine", "Vixen", "Wasp", "Weasel", "Web", 
    "Weed", "Weevil", "Wet", "Wheat", "Whimsy", "Whirl", "Whisker", "Whisper", "Whispering", "Whistle", "Whorl", "Wild", "Willow", 
    "Wind", "Wing", "Wish", "Wisteria", "Wolf", "Wolverine", "Wood", "Worm", "Wren", "Yarrow", "Yew", 
    "Zinnia"
  ],

  colourPrefixes: {
    "WHITE": [
    "White", "White", "Pale", "Snow", "Cloud", "Cloudy", "Milk", "Hail", "Frost", "Frozen", "Freeze", "Ice", "Icy", "Icicle",
    "Blizzard", "Flurry", "Moon", "Light", "Bone", "Bright", "Swan", "Dove", "Cotton", "Hawthorn", "Laurel", "Wisp",
    "Fringe", "Ibis", "Air", "Bright", "Rime", "Ghost", "Privet", "Egg"
    ],
    "PALEGREY": [
    "Gray", "Gray", "Silver", "Pale", "Light", "Cloud", "Cloudy", "Hail", "Frost", "Ice", "Icy", "Mouse", "Bright", "Fog", "Freeze",
    "Frozen", "Stone", "Pebble", "Dove", "Sky", "Cotton", "Heather", "Ashen", "Tufted", "Pipit", "Azalea", 
    "Fringe", "Mistle", "Icicle", "Rime"
    ],
    "SILVER": [
    "Gray", "Silver", "Silver", "Silver", "Cinder", "Ice", "Icy", "Frost", "Frozen", "Freeze", "Rain", "Blue",
    "River", "Blizzard", "Flurry", "Bone", "Bleak", "Stone", "Pebble", "Heather", "Scale", "Crocus", 
    "Rue", "Fringe", "Glint", "Mistle", "Shatter", "Gossamer", "Air", "Pale", "Ermine", "Stoat", "Gull", "Vine", "Lilac", "Rime"
    ],
    "GREY": [
    "Gray", "Gray", "Ash", "Ashen", "Cinder", "Rock", "Stone", "Shade", "Mouse", "Smoke", "Smoky", "Shadow", "Fog", "Bone",
    "Bleak", "Rain", "Storm", "Soot", "Pebble", "Mist", "Misty", "Heather", "Trout", "Shrike", "Plume", "Teasel",
    "Lyre", "Rat", "Gull", "Pigeon", "Rime"
    ],
    "DARKGREY": [
    "Gray", "Gray", "Shade", "Raven", "Crow", "Stone", "Dark", "Dark", "Night", "Cinder", "Ash", "Ashen", "Twilight",
    "Smoke", "Smokey", "Shadow", "Bleak", "Rain", "Storm", "Pebble", "Mist", "Misty", "Warbler", "Wisp"
    ],
    "GHOST": [
    "Black", "Black", "Shade", "Shaded", "Crow", "Raven", "Ebony", "Dark", "Char", "Charred", "Magpie",
    "Night", "Shadow", "Scorch", "Midnight", "Bleak", "Storm", "Violet", "Pepper", "Bat", "Faded", "Silver", "Ghost"
    ],
    "PALEGINGER": [
    "Pale", "Ginger", "Sand", "Sandy", "Yellow", "Sun", "Sunny", "Light", "Lion", "Bright", "Phlox", "Vervain",
    "Honey", "Daisy", "Warm", "Robin", "Cosmos", "Orchid", "Snapdragon", "Foxglove", "Verbena", "Straw",
    "Orange", "Ochre", "Peach", "Auburn", "Pumpkin"
    ],
    "GOLDEN": [
    "Gold", "Gold", "Golden", "Yellow", "Sun", "Sunny", "Light", "Lightning", "Thunder", "Day", "Fig",
    "Honey", "Tawny", "Lion", "Dandelion", "Marigold", "Warm", "Amber", "Canary", "Chick", "Daffodil", "Saffron",
    "Buttercup", "Straw", "Glint", "Auburn"
    ],
    "GINGER": [
    "Ginger", "Ginger", "Red", "Fire", "Rust", "Flame", "Ember", "Sun", "Sunny", "Light", "Primrose", "Rose",
    "Rowan", "Fox", "Tawny", "Plum", "Orange", "Warm", "Burn", "Burnt", "Robin", "Amber", "Larkspur", "Straw", "Lyre",
    "Flare", "Blaze", "Ochre", "Auburn", "Pumpkin"
    ],
    "DARKGINGER": [
    "Ginger", "Ginger", "Red", "Red", "Fire", "Flame", "Ember", "Oak", "Shade", "Russet", "Fuchsia", "Hollyhock",
    "Rowan", "Fox", "Orange", "Copper", "Cinnamon", "Burn", "Burnt", "Robin", "Oleander", "Scarlet", "Rust", "Lyre",
    "Robin", "Berry", "Ochre", "Auburn", "Pumpkin", "Burnet"
    ],
    "SIENNA": [
    "Ginger", "Ginger", "Red", "Red", "Fire", "Flame", "Ember", "Oak", "Shade", "Russet", "Fuchsia", "Hollyhock",
    "Rowan", "Fox", "Orange", "Copper", "Cinnamon", "Burn", "Burnt", "Robin", "Oleander", "Scarlet", "Rust", "Lyre",
    "Robin", "Berry", "Ochre", "Auburn", "Burnet"
    ],
    "CREAM": [
    "Sand", "Sandy", "Yellow", "Pale", "Cream", "Cream", "Light", "Milk", "Fawn", "Morel", "Jasmine", "Veil",
    "Bone", "Daisy", "Branch", "Warm", "Robin", "Spindle", "Ivory", "Pale", "Bright", "Peach", "Egg"
    ],
    "LIGHTBROWN": [
    "Brown", "Pale", "Light", "Mouse", "Dust", "Dusty", "Sand", "Sandy", "Bright", "Mud", "Scrub", "Velvet",
    "Hazel", "Vole", "Branch", "Warm", "Robin", "Puma", "Umber",
    "Tree", "Root", "Bark"
    ],
    "LILAC": [
    "Pale", "Light", "Mouse", "Dust", "Dusty", "Sand", "Sandy", "Bright", "Mud", "Scrub", "Velvet",
    "Hazel", "Vole", "Branch", "Warm", "Robin", "Lilac", "Lavender", "Heather"
    ],
    "BROWN": [
    "Brown", "Brown", "Oak", "Mouse", "Dark", "Shade", "Russet", "Dust", "Dusty", "Mud", "Deer", "Fawn", "Doe", "Stag",
    "Twig", "Owl", "Otter", "Log", "Vole", "Branch", "Hazel", "Robin", "Umber", "Tree", "Root", "Shadow", "Ochre", "Auburn", "Burnet"
    ],
    "GOLDEN-BROWN": [
    "Brown", "Brown", "Oak", "Mouse", "Dark", "Shade", "Russet", "Dust", "Dusty", "Mud", "Deer", "Fawn", "Doe", "Stag",
    "Twig", "Owl", "Otter", "Log", "Vole", "Branch", "Hazel", "Robin", "Umber", "Tree", "Root", "Shadow", "Ochre", "Auburn", "Burnet",
    "Thrasher", "Thrush"
    ],
    "DARKBROWN": [
    "Brown", "Brown", "Dark", "Dark", "Shade", "Night", "Russet", "Rowan", "Mud", "Oak", "Twig", "Loach", "Shadow",
    "Owl", "Otter", "Log", "Hickory", "Branch", "Robin", "Umber", "Chanterelle", "Dust", "Mud", "Auburn", "Burnet"
    ],
    "CHOCOLATE": [
    "Brown", "Brown", "Dark", "Dark", "Shade", "Night", "Russet", "Rowan", "Mud", "Oak", "Twig", "Loach", "Shadow",
    "Owl", "Otter", "Log", "Hickory", "Branch", "Robin", "Umber", "Chanterelle", "Dust", "Mud", "Auburn", "Burnet"
    ],
    "BLACK": [
    "Black", "Black", "Black", "Shade", "Shaded", "Crow", "Raven", "Ebony", "Dark", "Grackle", 
    "Night", "Shadow", "Scorch", "Midnight", "Pepper", "Pitch", "Bat", "Burnt", "Coal", "Ink", "Inky",
    "Char", "Charred", "Mulberry", "Night", "Evening", "Dark", "Murk", "Ghost"
    ]
  },

  biomePrefixes: {
    "Forest": [
    "Acorn","Almond", "Antler", "Aspen", "Badger", "Bark", "Bat", "Beech", "Birch", "Boar", "Branch", "Branch", "Buck", "Canopy",
    "Cedar", "Civet", "Deer", "Doe", "Elk", "Fern", "Fern", "Fir", "Forest", "Frond", "Grouse", "Grove", "Honey", "Log", "Lynx", "Magnolia",
    "Maple", "Moose", "Moss", "Moss", "Mushroom", "Oak", "Oak", "Pine", "Robin", "Robin", "Sap", "Skunk", "Sparrow", "Sprig",
    "Spruce", "Squirrel", "Squirrel", "Stag", "Stick", "Stump", "Tarantula", "Thicket", "Twig", "Twig", "Wood", "Wolf", "Coati"
    ],
    "Beach": [
    "Albatross", "Algae", "Anchovy", "Anemone", "Avocet", "Bass", "Barnacle", "Barracuda", "Beluga", "Brine", "Clam", "Coast",
    "Coconut", "Cod", "Conch", "Coral", "Cove", "Crab", "Current", "Delta", "Dolphin", "Dolphin", "Drip", "Drop", "Fin", "Flounder",
    "Foam", "Gannet", "Gull", "Gull", "Hermit", "Jellyfish", "Lagoon", "Lake", "Marlin", "Nacre", "Ocean", "Octopus", "Palm", "Pearl", "Pearl",
    "Pearly", "Pelican", "Pool", "Pool", "Ripple", "Reef", "Ripple", "Sago", "Salmon", "Salt", "Sand", "Sand", "Sardine",  "Scale", "Scale", "Sea",
    "Seabass", "Seagull", "Shark", "Shell", "Shimmer", "Shimmer", "Shore", "Slug", "Snail", "Splash", "Squid",
    "Tide", "Tidal", "Torrent", "Wave", "Wave", "Whale", "Coati"
    ],
    "Plains": [
    "Anise", "Barley", "Barley", "Bison", "Breeze", "Breeze", "Burrow", "Butterfly", "Cow", "Cow", "Dandelion", "Elk", "Ewe", "Field", "Field",
    "Flutter", "Gopher", "Grass", "Grass", "Grouse", "Hare", "Heather", "Heather", "Horse", "Lamb", "Meadow", "Oat", "Plover",
    "Poppy", "Poppy", "Pollen", "Prairie", "Pronghorn", "Roan", "Rustle", "Rye", "Rye", "Sage", "Sedge", "Sheep", "Swish", "Tunnel", "Tarantula",
    "Wheat", "Wheat", "Willow", "Willow", "Wool", "Woolly", "Coati"
    ],
    "Mountainous": [
    "Alpaca", "Alpine", "Avalanche", "Basalt", "Blizzard", "Boulder", "Caribou", "Cavern", "Cave", "Chamois", "Chasm", "Cliff", "Cliff", "Crag",
    "Eagle", "Eagle", "Echo", "Echo", "Flint", "Goat", "Granite", "Gravel", "High", "Lichen",
    "Mountain", "Peak", "Pebble", "Pinnacle", "Rock", "Rocky", "Ram", "Salt", "Shale", "Shard", "Spire", "Stone", "Steppe", 
    "Summit", "Volcano", "Yucca", "Whistle", "Whisper", "Whisper", "Mica", "Frigid", "Abyss"
    ],
    "Wetlands": [
    "Willow", "Marsh", "Bog", "Lotus", "Reed", "Frog", "Toad", "Stork", "Civet", "Crane", "Duck", "Heron", "Ibis", "Mangrove",
    "Swamp", "Murk", "Algae", "Mud", "Mire", "Splash", "Mosquito", "Mallard", "Goose", "Peat", "Bog", "Skink", "Tamarack",
    "Spruce", "Beaver", "Wade", "Cypress", "Magnolia", "Skunk", "Mosquito", "Lily", "Bayou", "Clay", "Grebe", "Egret",
    "Creek", "Skip", "Reed", "Bullrush", "Beetle", "Bug", "Vine", "Creeper", "Buffalo", "Rush", "Swam", "Cygnet", "Gosling",
    "Cormorant", "Stork", "Moorhen", "Spoonbill", "Kingfisher", "Plover", "Alligator", "Crocodile", "Newt",
    "Axolotl", "Salamander", "Gar", "Coati"
    ],
    "Desert": [
    "Cactus", "Dune", "Coyote", "Vulture", "Condor", "Canyon", "Prickle", "Pear", "Agave", "Jackal", "Dry", "Drought",
    "Rattle", "Desert", "Brittle", "Mesa", "Barren", "Oasis", "Dust", "Arid", "Buzzard", "Fly", "Scrub", "Gully", "Wax",
    "Yucca", "Salt", "Dingo", "Mirage", "Cobra", "Cheetah", "Caracal", "Scorpion", "Lion", "Antelope", "Gazelle", "Oryx",
    "Camel", "Meerkat", "Skull", "Rye", "Jackrabbit", "Needle", "Aloe", "Acacia", "Viper",
    "Snake", "Poison", "Venom", "Tiapan", "Fang", "Blister", "Blaze", "Burn", "Scorch", "Smolder", "Jerboa", "Fennec", "Mamba", "Coati",
    "Addax"
    ]
  },

  biomeSuffixes: {
    "Forest": [
    "acorn", "antler", "beak", "branch", "clove", "cone", "dapple", "deer", "fawn", "fern", "fog", "frond", "grove", "moss", 
    "sap", "shade", "twig", "wood", "thicket", "glade", "bear"
    ],
    "Beach": [
    "current", "shell", "tide", "sand", "wave", "flood", "shore", "coast", "fin", "splash", "surf", "squid", "coral", "pearl",
    "pool", "ripple", "drip", "drop", "shine", "shimmer", "foam", "sea", "ocean", "torrent", "tide", "gill", "cove"
    ],
    "Plains": [
    "field", "meadow", "wool", "oat", "lamb", "elk", "flutter", "pollen", "bull", "bee", "swish", "breeze", "runner",
    "tunnel", "horse", "sheep", "burrow", "brush"
    ],
    "Mountainous": [
    "cave", "caw", "cliff", "crag", "cricket", "drop", "eagle", "echo", "fall", "frost", "goat", "horn", "lichen",
    "mound", "peak", "point", "ram", "shatter", "shard", "stone", "steep", "summit", "quake", "whisper",
    "whistle"

    ],
    "Wetlands": [
    "flood", "swamp", "splash", "croak", "duck", "bog", "mud", "skipper", "wade", "lily", "moss", "root", "song", "bug", "glow",
    "wave", "creek", "ripple", "turtle", "mire"
    ],
    "Desert": [
    "prickle", "dune", "sand", "canyon", "rattle", "wind", "dust", "sun", "fly", "scorpion", "snake", "needle", "fang", "tooth", "bite",
    "aloe"
    ]
  },

  eyePrefixes: {
    "YELLOW": ["Yellow", "Moon", "Daisy", "Honey", "Light", "Sun", "Lemon"],
    "AMBER": ["Amber", "Sun", "Fire", "Gold", "Honey", "Scorch", "Flame", "Blaze", "Pumpkin"],
    "HAZEL": ["Hazel", "Tawny", "Hazel", "Gold", "Daisy", "Sand", "Almond"],
    "PALEGREEN": ["Pale", "Green", "Mint", "Fern", "Weed", "Olive", "Stem", "Lime", "Agave"],
    "GREEN": ["Green", "Green", "Fern", "Weed", "Holly", "Clover", "Olive", "Jade", "Tree", "Algae", "Aloe"],
    "BLUE": ["Blue", "Blue", "Ice", "Sky", "Lake", "Frost", "Water", "Icicle", "Frosty", "Cold", "Rime"],
    "DARKBLUE": ["Dark", "Blue", "Blue", "Sky", "Lake", "Berry", "Water", "Deep", "Cobalt", "River", "Night", "Rain"],
    "GREY": ["Gray", "Stone", "Silver", "Ripple", "Moon", "Rain", "Storm", "Heather"],
    "CYAN": ["Sky", "Blue", "River", "Rapid", "Ice", "Frost", "Cold", "Rime"],
    "EMERALD": ["Emerald", "Green", "Shine", "Green", "Pine", "Weed"],
    "PALEBLUE": ["Pale", "Blue", "Blue", "Sky", "River", "Ripple", "Day", "Cloud", "Rime"],
    "PALEYELLOW": ["Pale", "Yellow", "Sun", "Gold", "Light", "Daisy"],
    "GOLD": ["Gold", "Golden", "Sun", "Amber", "Sap", "Honey", "Yellow"],
    "HEATHERBLUE": ["Heather", "Blue", "Lilac", "Rosemary", "Lavender", "Wisteria"],
    "COPPER": ["Copper", "Red", "Amber", "Brown", "Fire", "Cinnamon"],
    "BRONZE": ["Copper", "Red", "Amber", "Brown", "Fire", "Cinnamon"],
    "SAGE": ["Sage", "Leaf", "Olive", "Bush", "Clove", "Green", "Weed"],
    "COBALT": ["Blue", "Blue", "Ice", "Icy", "Sky", "Lake", "Frost", "Water", "Frosty", "Rime"],
    "SUNLITICE": ["Sun", "Ice", "Icy", "Frost", "Dawn", "Dusk", "Odd", "Glow", "Mouse"],
    "GREENYELLOW": ["Green", "Yellow", "Tawny", "Hazel", "Gold", "Daisy", "Sand", "Sandy", "Weed"],
    "SILVER": ["Gray", "Stone", "Silver", "Silver", "Moon", "Rain", "Storm", "Pale", "Light"]
  },

  lonerNames: [
    "Abigail", "Abuko", "Abyss", "Abby", "Acacia", "Ace", "Adaliz", "Adam", "Admiral", "Adora", "Aether", "Agatha", "Agent Smith", "Agnes", "Ah ha", "Ah", "Aidan", "Aiden",
    "Akila", "Akilah", "Alaska", "Alastair", "Alba", "Albedo", "Alcina", "Alcor", "Alcyone", "Aldrich", "Alec", "Alex", "Alexa", "Alfie", "Alfredo", "Algernon", "Alice", 
    "Alien", "Alma", "Alonzo", "Alphonse", "Alphys", "Altair", "Amanda", "Amani", "Amaretto", "Amari", "Amaya", "Amber", "Amelia", "Amethyst", "Amigo", "Amir", "Amity", 
    "Amongus", "Amor", "Amy", "Andrew", "Andromeda", "Angel", "Anita", "Anju", "Ankha", "Antares", "Anubis", "Anya", "Apex", "Apple Cider", "Apple Pencil", "April", "Apu", 
    "Aquarius", "Archibald", "Archie", "Archimedes", "Arcturus", "Ariel", "Aries", "Armageddon", "Armin", "Arroyo", "Artificer", "Arusha", "Asgore", "Ash", "Askari", "Aspen", "Asriel", "Astrid", "Atlas", "Atticus", "Aubrey", "August", "Aurora", "Ava", "Avellana", "Award Winning Smile", "Axel", "Azimuth", "Azizi", "Azula", "Azurite", "Baba Yaga", "Baby", "Baby Dog", "Bacchus", "Backflip", "Badru", "Bagel", "Bagheera", "Bahati", "Bailey", 
    "Baisel", "Baja Blast", "Baliyo", "Baloo", "Bamboo", "Bandit", "Banshee", "Banzai", "Baobei", "Baojin", "Baphomet", "Barbie", "Barnaby", "Barker",
    "Basil", "Bastet", "Bean", "Beanie Baby", "Beanie", "Beans", "Beatle", "Beau", "Bebe", "Bede", "Beef Stroganoff", "Beesechurger", "Bell", "Bella", "Bellafide", "Bellatrix", "Belle", "Bellibolt", 
    "Bellini", "Ben", "Benito", "Benny", "Bentley", "Beowulf", "Berlioz", "Betelgeuse", "Beth", "Bethany", "Betsy", "Beverly", "Bianca", "Bibelot", "Bibimbap", "Bidoof", 
    "Big Mac", "Big Man", "Big Papa Huge Time", "Bigwig", "Bill", "Billy", "Bill Bailey", "Bingo", "Bingsu", "Binx", "Birb", "Birdie", "Bird of Paradise", "Biscuit", "Biscuits B. Bakin", "Bismuth", "Bitnara", "Bixbite", "Bixby", "Blade", "Blahaj", "Blair", "Blaire", "Blanche", "Blavingad", 
    "Blinky Stubbins", "Blitzo", "Blu", "Bluebell", "Bluebird", "Bluey", "Bob", "Bobby", "Bok Choy", "Bokshiri", "Bologna", "Bolt", "Bombalurina", "Bombon", "Bonbon", 
    "Bongo", "Boni", "Bonkers", "Bonnie", "Bonny", "Boo", "Boobear", "Booker", "Boots", "Brandy", "Brandywine", "Bren", "Brian", "Brick", "Brioche", "Broccoli", "Brooklyn", "Brother Dubious",
    "Broom", "Bruce", "Brutus", "Bub", "Buchito", "Buddy", "Buffy", "Bugbear", "Bulgogi", "Bullwinkle", "Bumblebee", "Bun", "Bunga", "Bunny", 
    "Burger", "Burm", "Burning Skies", "Bustopher Jones", "Buttercup", "Butternut", "Butterscotch", "Byeol", "Caakiri", "Cadence", "Cady", "Caesar", "Cake", "Calamari", "Call of Greatness", "Call of the Void", "Callie", "Callisto",
    "Calvin", "Calypso", "Camouflage", "Campion", "Candi", "Candy", "Canela", "Cannelloni", "Canned Beans", "Canned Tuna", "Canopus", "Cappuccino", "Capricorn", 
    "Capella", "Captain", "Car Alarm", "Caramel", "Cardamom", "Cardboard", "Carmen", "Carmin", "Carolina", "Caroline", "Carrie", "Cashmere", "Cassandra", "Castor", "Cat", "Catalina", "Catie", "Catrick", 
    "Catty", "Cauliflower", "Cayenne", "Cece", "Celebi", "Celeste", "Cecelia", "Celia", "Centipede", "Cerberus", "Ceres", "Chai", "Chance", "Chanel", "Chansey", 
    "Chanterelle", "Chaos", "Chara", "Charcoal", "Chari", "Chariklo", "Charles", "Charlie", "Charlotte", "Charm", "Charon", "Chase", "Chasing Wind", "Chayanne", "Chekov", "Chekhov's Gun", "Cheese", "Cheese Beast", "Cheesecake", "Cheesepuff", "Cheeto Puff", "Cheeto", "Cheetoman", 
    "Chef", "Cherry", "Cherubi", "Cheshire", "Chester", "Chevre", "Chewie", "Chewy", "Chiaki", "Chica", "Chicco", "Chickpea", 
    "Chief", "Chihiro", "Chikorita", "Chiku", "Chip", "Chiquito", "Chispa", "Chloe", "Choccie", "Chocolate Chip", "Chocolate", "Chocolate Pudding", "Chorizo", "Chris", "Chrissy", "Chub", "Churro", "Cielo", 
    "Cilantro", "Cinder", "Cinderblock", "Cinnabon", "Civet", "Clawdette", "Cleffa", "Clementine", "Cleo", "Clicker", "Cloe", "Cloud", 
    "Clover", "Coal", "Cobweb", "Cocoa Puff", "Cocoa", "Coffee", "Cola", "Colby Jack", "Colin Robinson", "Comet", "Comfy", "Conan", "Concrete", "Confetti", "Conk Crete", "Connie", "Cookie", "Cooper", 
    "Coquito", "Coral", "Coriander", "Coricopat", "Corn", "Cosmo", "Courage", "Cowbell", "Cowboy", "Cozy", "Crab", "Cracked Earth", "Cracker",
    "Cream", "Crema", "Crescent", "Crispy", "Crow", "Crumpet", "Crunchwrap", "Crunchy", "Cullen", "Cupcake", "Cupid", "Curry", "Cyndaquil", 
    "Cutie", "Cybele", "Cyprus", "Daisy Mae", "Dakarai", "Dakari", "Dakota", "Dali", 
    "Daliah", "Dambi", "Dan", "Danbi", "Danchu", "Dandelion", "Danger Dave", "Dapper", "Darling", "Dasik", "Dave", "Dayo", "Dean", "Deimos", "Deino", "Deirdre", "Deli", "Delilah", "Della", "Demeter", "Destiny", "Dewey", "Diablo", "Diallo", "Diamond", "Diana", "Digiorno", "Dinah", "Dino", "Diona", "Dipper", "Dirk", "Disco", "Distinguished Gentleman", "Diva", 
    "Dizzy", "Djungelskog", "Dmitri", "Dobie", "Doc", "Dog", "Doja", "Dolly", "Domingo", "Domino", "Donald", "Donut", "Donuts", "Doodle", 
    "Doofenshmirtz", "Dori", "Dorian", "Dorothy", "Double Trouble", "Dova", "Draco", "Dragon", "Dragonfly", "Draugr", "Dreamy", "Duchess", "Dude", 
    "Dulce", "Dumpling", "Dumpster", "Dune", "Dunnock", "Dust Bunny", "Dusty Cuddles", "Dwarf", "Dysnomia",
    "Eclipse", "Ed", "Eda", "Eddie", "Edward", "Eepy", "Eevee", "Egg", "Egypt", "Elden", "Electron", "Eli", "Elijah", "Elio", "Ellie", "Elton", "Elvis",
    "Ember", "Emeline", "Emerald", "Emi", "Emilio", "Emma", "Emy", "Enchilada", "End", "Ender Dragon", "Endless", "Endless Reflections", "Enoki", "Entropy", "Envy", "Erebus", "Erica", "Eris", "Esker", "Esme", "Espeon", "Espresso", "Espurr", "Esther", "Etoile", "Europa", "Eva", "Eve", 
    "Evelyn", "Evie", "Evilface", "Extra Cuddles", "Ezra", "Failnaught", "Fairy", "Faizah", "Fallow", "Fang", "Fauna", "Fawn", "Fax Machine", "Feather", "Feldspar", "Felicette", "Felicity", 
    "Felix", "Feliz", "Fennekin", "Fern", "Ferret", "Ferry", "Fig", "Figaro", "Finch", "Finnian", "Fireball", "Firecracker", 
    "Firefly", "First Generation iPod", "Fisher", "Fishleg", "Fishtail", "Five Pebbles", "Fiver", "Flabby", "Flamenco", "Flopper", "Flower", 
    "Fluffy", "Flurry", "Flutie", "Fork", "Four Needles", "Foxtrot", "Fran", "Fran Bow", "Frank", "Frankie", "Frannie", "Franny", "Fred", "Freddy", "Free", "French Fry", 
    "French", "Freya", "Friend", "Frisk", "Frita", "Frito", "Froggy", "Fruity Pebble", "Frumpkin", "Fry", "Frye", "Fudge", "Fuecoco", "Fuli", "Furby", "Fuzz Lightyear", 
    "Fuzzbo", "Fuzziwig", "Gabriel", "Gala", "Galahad", "Gamble", "Ganiru", "Ganymede", "Garfield", "Gargoyle", "Garnet", "Gato", "Gayle", 
    "Gemelli", "Gemini", "General Erasmus Dickinson", "Genji", "Geode", "George", "Ghost", "Gibby", "Gible", 
    "Gigabyte", "Gilded Lily", "Gingersnap", "Gir", "Girly Pop", "Gizmo", "Glameow", "Glass", "Glory", "Gluttony", "Gnocchi", "Gobi", "Godzilla", "Gofrette", 
    "Goldfish", "Good Sir", "Goomy", "Goose", "Goryo", "Gourmand", "Grace", "Grain", "Grandpa", "Grasshopper", "Grave", "Gravy", 
    "Greed", "Gretchen", "Grizabella", "Grizzly", "Growlithe", "Grunkle Stan", "Guacamole", "Guillermo", "Guinness", "Gumbo", "Gumi", "Guppy", "Gus", "Gust", "Gustavo", "Guzma", "Gwendoline", "Gwyndolin", "Gwynn", "Gyoza", "Habanero", "Habika", "Hadar", "Haiku", "Haku", "Halcyon", "Hale-Bopp", "Halloween", "Hamburger", "Hantu", "Harlequin", "Haru", "Harvest", 
    "Harvey", "Hatsune Miku", "Havoc", "Hawkbit", "Hawkeye", "Haymitch", "Hazel", "Heathcliff", "Heather", "Hehe", "Heisenberg", "Helix", "Henry", "Herbert", "Herc", "Hercules", "Hero", "Hershey", 
    "Hex", "Hiccup", "Hickory", "Highness", "Himiko", "Hiyoko", "Hlao", "Hobbes", "Hobohime", "Hocus Pocus", "Holly", "Honda", 
    "Honeydew", "Honeysuckle", "Hop", "Hopper", "Horizon", "Hot Sauce", "Hotdog", "Howdy", "Howler", "Hubert", "Hughie", "Human", "Humphrey", "Hunter", "Hydra", "Hyeri", 
    "Ice Cube", "Ice Spice", "Ice", "Icecube", "Icee", "Iggy", "Igor", "Ike", "Ikea", "Indi", "Inigo", "Iniko", "Insect", "Inspector", "Io", "Ipsy", "Isabel", "Isabella", "Isabelle", "Isaiah", 
    "Itsy Bitsy", "Jack", "Jackal", "Jacko", "Jade", "Jae", "Jaffa", "Jaiden", "Jakada", "Jake", "Jalebi", "Jambo", "James", "Jamilah", "Janis", "Jasmine", 
    "Jasper", "Jason", "Jattelik", "Jattematt", "Jaxon", "Jay", "Jaylen", "Jeep Wrangler", "Jelly", "Jellybean", "Jelly Jam", "Jellylorum", "Jemila", "Jenny", "Jennyanydots", "Jerry", "Jesse", "Jessica", "Jessie",
    "Jester", "Jet","Jethro", "Jetta", "Jewel", "Jewels", "Jigsaw", "Jiminy Cricket", "Jim", "Jimmy", "Jinn", "Jinx", "Jirachi", "Jitters", 
    "Joanne", "John", "Johnny", "Joker", "Jolly Rancher", "Jolly", "Joob", "Joy", "Jozi", "Jubie", "Judas", "Jude", "Judy", "Julie", "Juliet", "June", "Juno", "Jupiter", "KD", 
    "Kabuki", "Kaede", "Kagamine Len", "Kagamine Rin", "Kaito", "Kaizo", "Kale", "Kaleb", "Kamari", "Kamau", "Karen", "Kariba", "Karkinos", "Karma", "Kasha", "Kasi", "Kate", "Katjie", "Katniss", "Katy", "Keanu", "Keiko", "Kellas", "Kelloggs", "Ken", "Kendra", "Kenny", "Kenya", "Kepler", "Kermit", "Kerberos", "Kerry", "Ketchup", "Ketsl", "Kettlingur", "Kevin", "Keyboard", "Keziah", "Kianna", "Kiara", 
    "Kibble", "Kid Cat", "Kiki", "Kimani", "Kimberly", "Kimchi", "King", "Kingston", "Kion", "Kip", "Kipling", "Kisha", "Kitty Cat", 
    "Kitty Softpaws", "Kitty", "Kivu", "Kiwi", "Klee", "Klondike", "Knorrig", "Knox", "Koala", "Koba", "Kodi", "Kodiak", "Koi", "Kokichi", "Kokomi", "Kokum", "Komaru", "Kong", "Kovu", 
    "Kramig", "Kudu", "Kushi", "Kyle", "Kyoko", "Kyu", "L", "Laburnum", "Lacy", "Lady Figment", "Lady Liberty", "Lady", "Ladybug", 
    "Laika", "Laila", "Lakota", "Laksha", "Laku", "Lapis", "Larch", "Larimar", "Lark", "Laszlo", "Latte", "Lavender", "Lawrence", "Lazarus", "Lazuli", "Leche", "Lee", "Leif", "Lemmy", "Lemon Boy", "Lemon", "Leo", "Leon", "Leonardo",
    "Lester", "Levi", "Leviathan", "Levon", "Lex", "Libra", "Lil Baby", "Lilac", "Lilith", "Lilleplutt", "Lily", "Linden", "Linguine", "Linzhi", 
    "Lionel", "Lindsey", "Li Shang", "Listens to the Wind", "Litten", "Little Baby", "Little Ghost", "Little Guy", "Little Lady", "Little Man", "Little Nicky", "Little One", "Livlig", "Loaf", "Lobo", "Lobster", "Loca", "Lodesh", "Loki", "Lola", "Lollipop", "Lolly", "Lonardo", 
    "London", "Looks to the Moon", "Looks to the Sky", "Loona", "Lora", "Lorado", "Louie", "Louis", "Lovebug", "Loyalty", "Luchasaurus", "Luci-Purr", "Lucia", "Luciel", "Lucifur", 
    "Lucky", "Lucy", "Lugnut", "Luigi", "Luke", "Lulu", "Lumine", "Luna", "Lunchbox", "Lupo", "Luxio", "Luz", "Lydia", "Lynzi", "Mabel", "Mac", "Macaroon", "Macavity", "Maddy", "Madi", "Madoka", 
    "Maggie", "Magic", "Magikarp", "Maiko", "Maize", "Majesty", "Makalu", "Makena", "Makini", "Mako", "Makoto", "Makula", "Makwa", "Malachite", "Maleficent", "Mali", "Malia", "Malik", "Malika", "Mama", "Mamba", "Manda", "Mange", "Mango", "Mangosteen", "Mani", "Man With All The Answers", "Maomao", "Marathon", "Marcel", "Marceline", "Marcy", 
    "Mare", "Mareep", "Marie", "Marina", "Mario", "Mariposa", "Mark", "Marlow", "Marny", "Mars", "Marshal", "Marshmallow", "Martini", "Marula", "Mason", "Matador", "Matcha", "Maverick", "Martha",
    "Mawuli", "Max", "May", "Maya", "Mazu", "McChicken", "McFlurry", "McLovin", "Meadow of Two Worlds", "Meatloaf", "Meatlug", "Medusa", "Megabyte", "Megan", "Meilin", "Meimei", "Melba", "Melody", 
    "Melon", "Melona", "Memories Lost", "Meow-Meow", "Meowth", "Meowyman", "Mera", "Mercedes", "Mercury", "Mercy", "Merengue", "Merlot", "Merry", "Mew", "Michelle", "Michi", "Mick", 
    "Midnight Goddess", "Mieke", "Mikumi", "Miles", "Milhouse", "Milkshake", "Milky Way", "Millie", "Milo", "Milque", "Mimas", "Mimi", "Mimikyu", "Minette", "Minha", "Mini", "Minna", 
    "Minnie", "Mint", "Minty", "Mira", "Miranda", "Miriam", "Miso", "Miss Marple", "Missile Launcher", "Misty", "Mitaine", "Mitochondria", "Mitski", "Mitsubishi", "Mittens", 
    "Mitzi", "Mitzy Moo Moo", "Miyun", "Mizan", "Mizar", "Mizu", "Mocha", "Mochi", "Mojito", "Mojo", "Mollie", "Molly Murder Mittens", "Molly", "Monika", "Monster", 
    "Monte", "Monzi", "Moo", "Moon", "Mooncake", "Mop", "Mora", "Morb", "Morbius", "Morel", "Morpeko", "Morphius", "Morrhar", "Morty", "Mosaic", "Mosi", "Mowgli", "Moxie", 
    "Mr. Anderson", "Mr. Kitty Whiskers", "Mr. Kitty", "Mr. Midnight", "Mr. Mistoffolees", "Mr. Mustard", "Mr. Oreo", "Mr. President", "Mr. Princess", "Mr. Sir", "Mr. Whiskers", "Mr. Wigglebottom", 
    "Mucha", "Mudkip", "Mufasa", "Muffet", "Muffy", "Mullido", "Mumbai", "Mungojerrie", "Munkustrap", "Murder", "Mushroom", "Mustard", "Myko", "Nabi", 
    "Nadia", "Nadir", "Nadja", "Nagi", "Nagito", "Nakala", "Nakeena", "Nala", "Namielle", "Namu", "Nandor", "Naomi", "Nari", "Neapolitan", "Neel", "Nefertiti", "Neil", "Nemo", "Neo", "Nephrite", "Neptune", "Ness", "Nessie", "Neuron", "Neutron", "Nevaeh", 
    "Neytiri", "Nezuko", "Nibbles", "Nick", "Nidorina", "Nightcat", "Nightmare", "Nikki", "Nile", "Niles", "Nimbus", "Nine", "Ninetales", "Ninja", "Nintendo", "Nirav", 
    "Nirvana", "Nisha", "Nissan", "Nitro", "Niu", "Nix", "Nixie", "Noche", "Noelle", "Noir", "Noodle", "Noodlefly", "Nook", "Nori", "Norm", "Norman", "Nottingham", "Nova", "Nucleus", "Nugget", "Nuggets", "Nuka", "Nuri", 
    "Nuru", "Nutella", "Nutmeg", "Nyx", "O'Leary", "Oakley", "Oapie", "Oberon", "Obi Wan", "Obsidian", "October", "Odetta", "Old Deuteronomy", "Old Man Sam", 
    "Oleander", "Olga", "Oliva", "Oliver", "Ollie", "Omelet", "Omen", "Onion", "Onyx", "Oops", "Oopsy Dazey", "Opal", "Ophelia", "Orchard", "Oregano", "Oreo", "Orion", "Orzo", 
    "Oscar", "Oscypek", "Oshawott", "Osiris", "Otto", "Outlaw", "Outsider", "Owen", "Ox", "Oryx", "Pablo", "Pachirisu", "Padparadscha", "Paella", "Paimon", "Pallas", "Paloma", "Pancake", "Pancho", "Pandora", "Pango", "Pangur", "Panini", "Paprika", "Papyrus", "Paquito", "Pasta", "Patches", "Patience", "Paul", "Paulina", "Pavlova", "Pawmi", "Peach", "Peanut Butter", "Peanut Wigglebutt", "Peanut", "Pear", "Pearl", 
    "Pecan", "Pekhult", "Peko", "Penny", "Peony", "Pepita", "Pepper", "Pepsi", "Pequeno", "Perdito", "Peridot", "Periwinkle", "Perrserker", 
    "Perry", "Peter", "Peter Pan", "Peter Parker", "Parhelion", "Peeta", "Petya", "Phantom", "Phasmo", "Phoenix", "Pichi", "Pichu", "Pickles", "Pierogi", "Pierre", "Pietro", "Piggy", "Pigment", "Pikachu", "Pillow", "Pina Colada", "Pineapple", "Ping Pong", "Ping", "Pinkie Pie", "Pinkie", 
    "Pip", "Piper", "Pipkin", "Pipsqueak", "Pisces", "Pistol Star", "Pixel", "Pizza", "Plato", "Playstation", "Plentiful Leaves", "Plot Twist", "Plumeria", "Pluto", "Pochito", "Pocket", "Poe", "Poki", "Polaris", "Polly", "Pompompurin", 
    "Pong", "Ponyboy", "Poopy", "Porkchop", "Porsche", "Potato", "Pot Roast", "Pouncival", "President", "President Blanket", "Prickle", "Pride", "Princess", "Pringle", "Private Eye", "Procyon", "Proton", "Pudding", "Puddles", 
    "Pumba", "Pumpernickel", "Pumpkin", "Punchy", "Punk", "Purdy", "Purri", "Purry", "Pushee", "Puzzle", "Qilian", "Quagmire", "Quake", "Quartermaster", "Quarter Pounder", "Quartz", "Quasar", "Qubo", "Queen", "Queenie", "Queeny", "Querida", "Quesadilla", "Queso Ruby", "Queso", "Quest", "Quickie", "Quimby", "Quince", "Quincy", "Quinn", 
    "Quino", "Quinzee", "Rabiah", "Radar", "Rafael", "Rafiki", "Raja", "Ramble", "Ramen", "Ramon", "Randy", "Rani", "Raptor", "Rapunzel", 
    "Rarity", "Rat", "Ratau", "Ratoo", "Rattle", "Raven", "Ravioli", "Ray", "Raymond", "Razzle", "Rebel", "Reese", "Reeses Puff", "Regina", "Ren", "Renata", "Rhea", "Rhianna", "Rhubarb", "Ribosome", "Rice", "Rico", 
    "Rigatoni", "Rigel", "Ringo", "Ringo Starr", "Rio", "Riolu", "Riot", "Risa", "River", "Rivulet", "Riya", "Rizz", "Roald", "Robbie", "Rocket", "Rodeo", "Rolo", 
    "Roman", "Romeo", "Roomba", "Rooster", "Rory", "Rose", "Roselie", "Rosewood", "Rowan", "Ruby", "Rudolph", "Rudy", "Rue", "Rubber Duck", "Ruffnut", "Rufus", "Rukiya", "Rum Tum Tugger", "Rum",
    "Rumpleteazer", "Runt", "Russel", "Sable", "Sadie", "Sadiki", "Saeko", "Safari", "Saffron", "Safi", "Sage Marro", "Sagittarius", "Sagwa", 
    "Sahara", "Sahel", "Saidah", "Sailor", "Saint", "Sakari", "Saki", "Sakura", "Salem", "Salmon", "Salt", "Salvage", "Sam", "Samantha", "Sambusa", "Samus", "Sanai", "Sandwich", "Sandy", 
    "Sangria", "Sans", "Santana", "Sanyu", "Sapphire", "Sarabi", "Sarah", "Sarek", "Sarafina", "Sarge", "Sarki", "Sasha", "Sashimi", "Sassy", "Saturn", "Sausage", "Savannah", "Savvy", "Scarecrow", "Scavenger", "Schmidt", "Scholar", "Scorpio", "Scotch", "Scotty", "Scout", "Scribble", "Scrooge", "Scrungle", "Seamus", "Sega", "Sekhmet", "Seok", "Seoli", "Seoul", "Serengeti", "Serenity", "Sergei", 
    "Sergio", "Seri", "Seven Of Nine", "Seven", "Shaka", "Shamash", "Shampoo", "Shamwow", "Shani", "Shari", "Shay", "Shenzi", 
    "Shep", "Sherb", "Sherman", "Shilin", "Shiloh", "Shimmer", "Shino", "Shinx", "Shiver", "Shrimp", "Shrimp Fried Rice", "Shukura", "Shuvai", "Sillabub", "Silly", "Silva", "Silvally", "Silver", "Sim", "Simba", "Simone", "Sriracha", 
    "Siri", "Sirius", "Six Grains of Gravel", "Skimbleshanks", "Skittles", "Skitty", "Skrunkly", "Skylar", "Skyrim", "Slinky", "Sloane", "Sloth", "Slug", 
    "Slurpuff", "Slushie", "Smarty Pants", "Smile", "Smiley", "Smoke", "Smoky", "Smoothie", "Smores", "Snaggles", "Sneakers", "Snek", "Snickers", "Snom", "Snook", "Snoots", "Snotlout", "Snowball", "Snowbell", "Snuttig", "Soap", "Soap Bubbles", "Soccer Ball", "Socks", "Soda Pop", "Sofa", "Sofanthiel", "Sofrito", 
    "Sol", "Solanum", "Soleil", "Sona", "Sonata", "Sonic", "Sonnet", "Sookie", "Soos", "Sooty", "Sophie", "Sorbet", "Sotast", "Soup", "Sox", "Spam", "Sparkle", "Sparky", "Spatula", 
    "Speedwell", "Spicy", "Spinach", "Spinel", "Spock", "Spooky", "Spoon", "Spore", "Spots", "Sprigatito", "Squeak", "Stan", "Stanley", "Star", "Stargazer", "Starfish", "Starry", "Static", "Steak", "Stella", "Steve", "Steven", "Stink Mink", "Stinkbutt", "Stinky", "Stitches", 
    "Stolas", "Strawberry", "Stripes", "Stuffie", "Styx", "Subaru", "Sucrose", "Sueno", "Sugar", "Suhailah", "Summit", "Sundae", "Sunflower", "Sungrazer",
    "Sunny", "Sunny Meadow", "Sunset", "Survivor", "Sushi", "Suya", "Sweet Creature", "Sweet Leon", "Sweet Marmalade", "Sweet", "Sweetie", "Sybil", "Sylvana", "Sylveon", "Sylvester", "Synth", "Tabasco", "Tabatha", 
    "Tabby", "Tabbytha", "Taco Bell", "Taco", "Taffy", "Tahini", "Tahir", "Taihu", "Taillow", "Talia", "Tamagotchi", "Tamale", "Tammy", "Tangerine", 
    "Tangy", "Tantomile", "Tara", "Taro", "Tasha", "Tater Tot", "Taurus", "Tay", "Tayo", "Tazama", "Teacup", "Techno", "Teddie", "Teddy", "Tempest", "Terabyte", "Tesla", "Tesora", "Tetris", "Tetromino", "Teufel", "Theo", "Thoko", "Thor", "Thuban", "Thumbelina", 
    "Thyme", "Tia", "Tiana", "Tigger", "Tikka", "Tilin", "Timmy", "Timon", "Tim Tam", "Tinka", "Tin Man", "Tiny", "Tipsy", "Titan", "Titania", "Toast", "Toastee", 
    "Todd Howard", "Todd", "Toffee", "Tofu", "Togepi", "Tom", "Tomato Soup", "Tomato", "Toni", "Tonka", "Toothless", "Topaz", "Top Hat", "Toph", "Topi", "Torchic", "Toriel", "Toro", "Torque", "Tortellini", 
    "Tortilla", "Totoro", "Toulouse", "Toxel", "Toyota", "Tractor", "Traveler", "Treasure", "T-rex", "Tribble", "Trick", "Trinity", "Trinket", "Trip", "Triscuit", "Triton",
    "Trixie", "Trouble Nuggets", "Trouble", "Troublemaker", "Truffle", "Trumpet", "Tucker", "Tuffnut", "Tumble", "Tumblebrutus", "Tumo", "Turbo", "Twiggy", "Twilight", "Twinkle Lights", "Twister", "Twix", "Two Sprouts", "Tyler", "Uba", "Ula", 
    "Ulyssa", "Umbreon", "Umbriel", "Uncle Butter", "Undyne", "Union", "Uriel", "Ursala", "Valente", "Valentina", "Valentino", "Van Pelt", "Vanilla", "Vanessa", "Vasco", "Vaxx", "Vega", "Velociraptor", "Veronica",
    "Venti", "Venture", "Venus", "Vervain", "Vesper", "Vesta", "Via", "Victini", "Victor", "Victoria", "Vida", "Viktor", "Vinnie", 
    "Vinyl", "Violet", "Virgo", "Vivian", "Vivienne", "Void", "Void Walker", "Void Worm", "Volkswagen", "Voltage", 
    "Vox", "Vulpix", "Wade", "Waffle", "Wagyu", "Wally", "Walter", "Walnut", "Wanda", "Wanderer", "Warren Peace", "Wasabi", "Watches the Path", "Webby", "Wednesday", 
    "Wendy", "Whiskers", "Whiskey", "Whisper", "Whitney", "Whiz Kid", "Wiggity Wacks", "Wigglebutt", "Wikipedia", "Willow", "Windy", 
    "Winry", "Wishbone", "Wisp", "Wisteria", "Wizard", "Wolfe", "Wolfgang", "Wolverine", "Wonder", 
    "Worm", "Wrath", "X'ek", "Xelle", "Xhosa", "Xiao", "Xola", "Yaoyao", "Yazhu", "Yeet", "Yeeted", "Yen", "Yeobo", "Yeza", 
    "Yinuo", "Yippee", "Yokai", "Yoonmin", "Yooted", "Yoshi", "Yote", "Yuca", "Yuka", "Yuki", "Yumeko", "Yusuke", "Yuzu", "Yvaine", 
    "Zach", "Zachary", "Zahra", "Zambezi", "Zambia", "Zaniah", "Zari", "Zariah", "Zazu", "Zebra", "Zekrom", "Zelda", "Zell", 
    "Zendaya", "Zenith", "Zeraora", "Zikomo", "Zim", "Zion", "Zira", "Ziti", "Zoe", "Zoomie", "Zorro", "Zorua", "Zuberi", "Zuko", "Zuma", "Zuna", "Zuva"
    ],
	animalSuffixes: [
		"badger", "bat", "bear", "bee", "beetle", "bird", "bug", "cricket", "deer", "eagle", "elk", "falcon", "fawn", "fish", "fox", "goose", "hare", "hawk", "horse", 
    "jay", "kestrel", "kite", "lamb", "leopard", "lion", "minnow", "moth", "mouse", "newt", "ram", "raven", "roach", "scorpion", "sheep", "snake", "spider", 
    "squid", "swan", "thrush", "tiger", "turtle"
	],
	animalPrefixes: [
		"Addax", "Adder", "Albatross", "Alligator", "Alpaca", "Ant", "Antelope", "Aphid", "Avocet", "Axolotl", "Badger", "Barracuda", "Bass", "Bat", "Bear", "Beaver", 
    "Bee", "Beetle", "Beluga", "Bird", "Bison", "Bittern", "Boar", "Buck", "Buffalo", "Bug", "Butterfly", "Camel", "Canary", "Caracal", "Caribou", "Carp", 
    "Caterpillar", "Chaffinch", "Chamois", "Cheetah", "Chick", "Cicada", "Civet", "Clam", "Coati", "Cobra", "Cod", "Condor", "Coral", "Cormorant", "Cougar", "Cow", 
    "Coyote", "Crab", "Crane", "Crocodile", "Crow", "Curlew", "Cygnet", "Deer", "Dingo", "Doe", "Dog", "Dolphin", "Dove", "Duck", "Eagle", "Egret", "Elk", "Ermine", 
    "Ewe", "Falcon", "Fawn", "Fennec", "Ferret", "Finch", "Fish", "Fox", "Frog", "Gander", "Gannet", "Gar", "Gazelle", "Goat", "Goose", "Gosling", "Grackle", "Grebe", 
    "Grouse", "Gull", "Guppy", "Hare", "Hawk", "Heron", "Hornet", "Horse", "Hound", "Ibis", "Jackal", "Jackdaw", "Jackrabbit", "Jay", "Jellyfish", "Jerboa", "Junco", 
    "Kestrel", "Kingfisher", "Kite", "Lamb", "Lark", "Leopard", "Lion", "Lizard", "Loach", "Locust", "Lynx", "Magpie", "Mamba", "Mantis", "Marlin", "Meerkat", "Midge", 
    "Mink", "Minnow", "Mite", "Mole", "Moorhen", "Moose", "Mosquito", "Moth", "Mouse", "Newt", "Nightingale", "Octopus", "Oriole", "Oryx", "Osprey", "Otter", "Owl", 
    "Panther", "Partridge", "Pelican", "Perch", "Pheasant", "Pigeon", "Pike", "Pipit", "Pronghorn", "Python", "Quail", "Rabbit", "Raccoon", "Ram", "Rat", "Raven", 
    "Roach", "Robin", "Sable", "Salamander", "Salmon", "Sardine", "Scorpion", "Seabass", "Seagull", "Serpent", "Shark", "Sheep", "Shrew", "Shrike", "Skink", "Skunk", 
    "Slug", "Snail", "Snake", "Sparrow", "Spider", "Spoonbill", "Squid", "Squirrel", "Stag", "Starling", "Stoat", "Stork", "Swallow", "Swan", "Tadpole", "Taipan", 
    "Tarantula", "Tiger", "Toad", "Trout", "Turtle", "Viper", "Vixen", "Vole", "Vulture", "Warbler", "Wasp", "Weasel", "Weevil", "Whale", "Wolf", "Wolverine", "Worm", 
    "Wren"
	],
	inappropriateNames: [
		"wetback", "yellowface", "redface", "blackface", "brownface", "pancakeface", "yellowbone", "molesting"
	]
}

export default names