export const peltColours = [
  'WHITE', 'PALEGREY', 'SILVER', 'GREY', 'DARKGREY', 'GHOST', 'BLACK', 'CREAM',
  'PALEGINGER', 'GOLDEN', 'GINGER', 'DARKGINGER', 'SIENNA', 'LIGHTBROWN',
  'LILAC', 'BROWN', 'GOLDEN-BROWN', 'DARKBROWN', 'CHOCOLATE'
]

export const peltPatterns = [
  'Tabby', 'Ticked', 'Mackerel', 'Classic', 'Sokoke', 'Agouti', 'Speckled',
  'Rosette', 'SingleColour', 'Smoke', 'Singlestripe', 'Masked', 'Bengal', 'Marbled'
]

export const eyeColourNames = [
  'Yellow', 'Amber', 'Hazel', 'Pale Green', 'Green', 'Blue', 'Dark Blue', 'Grey',
  'Cyan', 'Emerald', 'Heather Blue', 'Sunlit Ice', 'Copper', 'Sage', 'Cobalt',
  'Pale Blue', 'Bronze', 'Silver', 'Pale Yellow', 'Gold', 'Green-Yellow'
]

export const skinColours = [
  'BLACK', 'RED', 'PINK', 'DARKBROWN', 'BROWN', 'LIGHTBROWN', 'DARK', 'DARKGREY',
  'GREY', 'DARKSALMON', 'SALMON', 'PEACH', 'DARKMARBLED', 'MARBLED', 'LIGHTMARBLED',
  'DARKBLUE', 'BLUE', 'LIGHTBLUE'
]

export const whitePatches = [
  'FULLWHITE', 'ANY', 'TUXEDO', 'LITTLE', 'COLOURPOINT', 'VAN', 'ANYTWO', 'MOON',
  'PHANTOM', 'POWDER', 'BLEACHED', 'SAVANNAH', 'FADESPOTS', 'PEBBLESHINE', 'EXTRA',
  'ONEEAR', 'BROKEN', 'LIGHTTUXEDO', 'BUZZARDFANG', 'RAGDOLL', 'LIGHTSONG', 'VITILIGO',
  'BLACKSTAR', 'PIEBALD', 'CURVED', 'PETAL', 'SHIBAINU', 'OWL', 'TIP', 'FANCY',
  'FRECKLES', 'RINGTAIL', 'HALFFACE', 'PANTSTWO', 'GOATEE', 'VITILIGOTWO', 'PAWS',
  'MITAINE', 'BROKENBLAZE', 'SCOURGE', 'DIVA', 'BEARD', 'TAIL', 'BLAZE', 'PRINCE',
  'BIB', 'VEE', 'UNDERS', 'HONEY', 'FAROFA', 'DAMIEN', 'MISTER', 'BELLY', 'TAILTIP',
  'TOES', 'TOPCOVER', 'APRON', 'CAPSADDLE', 'MASKMANTLE', 'SQUEAKS', 'STAR',
  'TOESTAIL', 'RAVENPAW', 'PANTS', 'REVERSEPANTS', 'SKUNK', 'KARPATI', 'HALFWHITE',
  'APPALOOSA', 'DAPPLEPAW', 'HEART', 'LILTWO', 'GLASS', 'MOORISH', 'SEPIAPOINT',
  'MINKPOINT', 'SEALPOINT', 'MAO', 'LUNA', 'CHESTSPECK', 'WINGS', 'PAINTED', 'HEARTTWO',
  'WOODPECKER', 'BOOTS', 'MISS', 'COW', 'COWTWO', 'BUB', 'BOWTIE', 'MUSTACHE',
  'REVERSEHEART', 'SPARROW', 'VEST', 'LOVEBUG', 'TRIXIE', 'SAMMY', 'SPARKLE',
  'RIGHTEAR', 'LEFTEAR', 'ESTRELLA', 'SHOOTINGSTAR', 'EYESPOT', 'REVERSEEYE',
  'FADEBELLY', 'FRONT', 'BLOSSOMSTEP', 'PEBBLE', 'TAILTWO', 'BUDDY', 'BACKSPOT',
  'EYEBAGS', 'BULLSEYE', 'FINN', 'DIGIT', 'KROPKA', 'FCTWO', 'FCONE', 'MIA', 'SCAR',
  'BUSTER', 'SMOKEY', 'HAWKBLAZE', 'CAKE', 'ROSINA', 'PRINCESS', 'LOCKET', 'BLAZEMASK',
  'TEARS', 'DOUGIE'
]

export const tortiePatterns = [
  'ONE', 'TWO', 'THREE', 'FOUR', 'REDTAIL', 'DELILAH', 'HALF', 'STREAK', 'MASK',
  'SMOKE', 'MINIMALONE', 'MINIMALTWO', 'MINIMALTHREE', 'MINIMALFOUR', 'OREO',
  'SWOOP', 'CHIMERA', 'CHEST', 'ARMTAIL', 'GRUMPYFACE', 'MOTTLED', 'SIDEMASK',
  'EYEDOT', 'BANDANA', 'PACMAN', 'STREAMSTRIKE', 'SMUDGED', 'DAUB', 'EMBER',
  'BRIE', 'ORIOLE', 'ROBIN', 'BRINDLE', 'PAIGE', 'ROSETAIL', 'SAFI', 'DAPPLENIGHT',
  'BLANKET', 'BELOVED', 'BODY', 'SHILOH', 'FRECKLED', 'HEARTBEAT'
]

export const tintColours = [
  'pink', 'gray', 'red', 'black', 'orange', 'yellow', 'purple', 'blue'
]

export const defaultExportCat = {
  ID: '##',
  name_prefix: 'Wild',
  name_suffix: 'rock',
  specsuffix_hidden: false,
  gender: 'female',
  gender_align: 'nonbinary',
  pronouns: [
    {
      subject: "they",
      object: "them",
      poss: "thier",
      inposs: "theirs",
      self: "themselves",
      conju: 1
    }
  ],
  birth_cooldown: 0,
  status: 'warrior',
  backstory: 'clan_founder',
  moons: 36,
  trait: 'charismatic',
  facets: '8,9,8,4',
  parent1: null,
  parent2: null,
  adoptive_parents: [],
  mentor: null,
  former_mentor: [],
  patrol_with_mentor: 0,
  mate: [],
  previous_mates: [],
  dead: false,
  paralyzed: false,
  no_kits: false,
  no_retire: false,
  no_mates: false,
  exiled: false,
  pelt_name: 'SingleColour',
  pelt_color: 'PALEGREY',
  pelt_length: 'long',
  sprite_kitten: 0,
  sprite_adolescent: 4,
  sprite_adult: 9,
  sprite_senior: 12,
  sprite_para_adult: 15,
  eye_colour: 'SUNLITICE',
  eye_colour2: null,
  reverse: false,
  white_patches: null,
  vitiligo: null,
  points: null,
  white_patches_tint: 'none',
  pattern: null,
  tortie_base: null,
  tortie_color: null,
  tortie_pattern: null,
  skin: 'LIGHTMARBLED',
  tint: 'none',
  skill_dict: {
    primary: 'SWIMMER,9,False',
    secondary: null,
    hidden: null,
  },
  scars: [],
  accessory: null,
  experience: 67,
  dead_moons: 0,
  current_apprentice: [],
  former_apprentices: [],
  df: false,
  outside: false,
  faded_offspring: [],
  opacity: 100,
  prevent_fading: false,
  favourite: false,
}

