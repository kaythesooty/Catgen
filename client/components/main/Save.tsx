import { randomBool, randomInt, doWhitePatches } from '../../store'
import skills from '@dicts/skills.json'
import defaultExportCat from '@dicts/export_cat.json'
import eyeColours from '@dicts/eyeColours.json'
import names from '@dicts/names.json'
import pelts from '@dicts/pelts.json'
import skinColours from '@dicts/skinColours.json'
import tintColours from '@dicts/tintColours.json'
import tortiePatterns from '@dicts/tortiePatterns.json'
import traits from '@dicts/traits.json'
import accessories from '@dicts/accessories.json'
import scars from '@dicts/scars.json'
import CatData from '@models/Cat'

interface Props {
  cat: (cat: CatData) => void
  catvas: HTMLCanvasElement
  catobj: CatData
}

const defaultCat: CatData = {
  name_prefix: 'Crow',
  name_suffix: 'break',
  gender: 'female',
  gender_align: 'nonbinary',
  status: 'warrior',
  backstory: 'clanborn',
  moons: 37,
  trait: 'calm',
  paralyzed: false,
  sick: false,
  pelt_name: 'SingleColour',
  pelt_color: 'BLACK',
  pelt_length: 'short',
  sprite_kitten: 0,
  sprite_adolescent: 3,
  sprite_adult: 8,
  sprite_senior: 13,
  sprite_para_adult: 15,
  eye_colour: 'SUNLITICE',
  eye_colour2: null,
  reverse: true,
  white_patches: null,
  vitiligo: null,
  point: null,
  pattern: null,
  tortie_base: null,
  tortie_color: null,
  tortie_pattern: null,
  skin: 'DARKSALMON',
  tint: 'none',
  skill: 'CAMP',
  secondSkill: null,
  accessoryType: null,
  accessoryColour: 'White',
  scars: ['', '', '', ''],
	dead: false,
	dead_moons: 0,
	df: false
}

function doTortie(cat: CatData) {
  cat.white_patches != null ? (cat.pelt_name = 'Calico') : (cat.pelt_name = 'Tortie')
  cat.pattern = tortiePatterns.code[randomInt(0, tortiePatterns.code.length - 1)]
  cat.tortie_base = pelts.patterns.code[randomInt(0, pelts.patterns.code.length - 1)].toLowerCase()
  cat.tortie_color = pelts.colours.code[randomInt(0, pelts.colours.code.length - 1)]
  cat.tortie_pattern = pelts.patterns.code[randomInt(0, pelts.patterns.code.length - 1)].toLowerCase()
}

export function randomiseCat(): CatData {
  const cat: CatData = { ...defaultCat }
  cat.gender = randomBool() ? 'female' : 'male'
  cat.gender_align = cat.gender
  cat.status = 'warrior'
  cat.moons = randomInt(0, 180)
  cat.pelt_name = pelts.patterns.code[randomInt(0, pelts.patterns.code.length - 1)]
  cat.pelt_color = pelts.colours.code[randomInt(0, pelts.colours.code.length - 1)]
	cat.scars = ['', '', '', '']

  if (randomInt(1, 3) == 3) {
    cat.pelt_length = 'long'
  } else if (randomBool()) {
    cat.pelt_length = 'short'
  } else cat.pelt_length = 'medium'

  cat.sprite_kitten = randomInt(0, 2)
  cat.sprite_adolescent = randomInt(3, 5)
  cat.sprite_adult = randomInt(6, 8)
  cat.sprite_senior = randomInt(12, 14)
  cat.eye_colour = eyeColours.code[randomInt(0, eyeColours.code.length - 1)]
  cat.reverse = randomBool()
  cat.skin = skinColours.code[randomInt(0, skinColours.code.length - 1)]
  cat.white_patches = randomInt(1, 3) === 3 ? doWhitePatches() : null
  cat.skill = skills.code[randomInt(0, skills.code.length - 1)]
  randomBool() ? cat.secondSkill = skills.code[randomInt(0, skills.code.length - 1)] : null

  if (randomInt(1, 4) === 4) {
    cat.tint = tintColours.code[randomInt(0, tintColours.code.length - 1)]
  } else cat.tint = null

  if (randomInt(1, 4) === 4 && cat.gender === 'female') doTortie(cat)
  else if (randomInt(1, 20) === 20 && cat.gender === 'male') doTortie(cat)

  if (cat.pelt_length == 'long') {
    cat.sprite_adult = cat.sprite_adult + 3
    cat.sprite_para_adult = 16
  }

  if (cat.moons < 6) cat.status = 'kitten'
  else if (cat.moons < 12 && randomInt(1, 5) === 5) cat.status = 'medicine cat apprentice'
  else if (cat.moons < 12) cat.status = 'apprentice'
  else if (randomInt(1, 20) === 20) cat.status = 'leader'
  else cat.status = 'warrior'

  if (cat.status == 'kitten') cat.trait = traits.kitten[randomInt(0, traits.kitten.length - 1)]
  else cat.trait = traits.normal[randomInt(0, traits.normal.length - 1)]

  switch (randomInt(1, 4)) {
    case 1:
      cat.name_prefix = names.normalPrefixes[randomInt(1, names.normalPrefixes.length) - 1]
      break
    case 2:
      cat.name_prefix = names.colourPrefixes[cat.pelt_color][randomInt(1, names.colourPrefixes[cat.pelt_color].length) - 1]
      break
    case 3:
      cat.name_prefix = names.eyePrefixes[cat.eye_colour][randomInt(1, names.eyePrefixes[cat.eye_colour].length) - 1]
      break
    case 4:
      cat.name_prefix = names.animalPrefixes[randomInt(1, names.animalPrefixes.length) - 1]
  }

  switch (randomInt(1, 3)) {
    case 1:
      cat.name_suffix = names.normalSuffixes[randomInt(0, names.normalSuffixes.length - 1)]
      break
    case 2:
      cat.name_suffix = names.peltSuffixes[cat.pelt_name][randomInt(0, names.peltSuffixes[cat.pelt_name].length - 1)]
      break
    case 3:
      cat.name_suffix = names.animalSuffixes[randomInt(0, names.animalSuffixes.length - 1)]
  }

  let inappropriate = false

  names.inappropriateNames.forEach((nm) => {
    if (nm === cat.name_prefix.toLowerCase() + cat.name_suffix || cat.name_prefix.toLowerCase() === cat.name_suffix) {
      inappropriate = true
    }
  })

  if (inappropriate) {
    cat.name_prefix = defaultCat.name_prefix
    cat.name_suffix = defaultCat.name_suffix
  }

  cat.tint != null && console.log(cat.tint)

  return cat
}

export function saveImage(canvas: HTMLCanvasElement, cat: CatData) {
  console.log(canvas)
  canvas.toBlob((blob) => {
    if (blob === null) return
    const imgurl = URL.createObjectURL(blob)
    const link: HTMLAnchorElement = document.getElementById('save') as HTMLAnchorElement
    link.href = imgurl
    link.download = `${cat.name_prefix}${cat.name_suffix}`
    link.click()
    URL.revokeObjectURL(imgurl)
  })
}

function createSkillDict(cat: CatData) {
  let pSkill = 0
  let sSkill = 0
  let isApp = "False"

  const appExp = /apprentice/
  if (cat.status == "kitten" || appExp.test(cat.status)) {
    isApp = "True"
  }

  const k = 0.05
  const max = 30
  pSkill = Math.floor((1 - Math.exp(-k * cat.moons)) * max)

  if (cat.secondSkill != null) {
    sSkill = Math.floor((1 - Math.exp(-k * cat.moons)) * max / 3)
  }

  const primary = `${cat.skill},${pSkill},${isApp}`
  const secondary = cat.secondSkill != null ? `${cat.secondSkill},${sSkill},${isApp}` : null

  const skillDict = {
    primary,
    secondary,
    hidden: null
  }

  return skillDict
}

function createAccessory(type: string | null, colour: string) {
	let Type: string
	let Colour: string
	let foundIndex: number

	if (type == null) return null

	if ((foundIndex = accessories.collar.eng.indexOf(type)) >= 0) {
		Type = accessories.collar.code[foundIndex]
	} else if ((foundIndex = accessories.wild.eng.indexOf(type)) >= 0) {
		Type = accessories.wild.code[foundIndex]
	} else if((foundIndex = accessories.herb.eng.indexOf(type)) >= 0) {
		Type = accessories.collar.code[foundIndex]
	} else return null

	if (accessories.collar.code.includes(Type)) {
		Colour = accessories.colour.code[accessories.colour.eng.indexOf(colour)]
	} else return Type

	const newAccessory = Type + Colour
	return newAccessory
}

function saveJson(cat: CatData) {
  const pronouns = [
    {
      subject: "they",
      object: "them",
      poss: "thier",
      inposs: "theirs",
      self: "themselves",
      conju: 1
    }
  ]

  if (cat.gender_align == "male" || cat.gender_align == "trans male") {
    pronouns[0] = {
      subject: "he",
      object: "him",
      poss: "his",
      inposs: "his",
      self: "himself",
      conju: 2
  }} else if (cat.gender_align == "female" || cat.gender_align == "trans female") {
    pronouns[0] = {
      subject: "she",
      object: "her",
      poss: "her",
      inposs: "hers",
      self: "herself",
      conju: 2
  }}


  const exportCat = {
    ...defaultExportCat,
    name_prefix: cat.name_prefix,
    name_suffix: cat.name_suffix,
    gender: cat.gender,
    gender_align: cat.gender_align,
    pronouns,
    status: cat.status,
    backstory: cat.backstory,
    moons: cat.moons,
    trait: cat.trait,
    paralyzed: cat.paralyzed,
    pelt_name: cat.pelt_name,
    pelt_color: cat.pelt_color,
    pelt_length: cat.pelt_length,
    sprite_kitten: cat.sprite_kitten,
    sprite_adolescent: cat.sprite_adolescent,
    sprite_adult: cat.sprite_adult,
    sprite_senior: cat.sprite_senior,
    sprite_para_adult: cat.sprite_para_adult,
    eye_colour: cat.eye_colour,
    eye_colour2: cat.eye_colour2,
    reverse: cat.reverse,
    white_patches: cat.white_patches,
    vitiligo: cat.vitiligo,
    points: cat.point,
    pattern: cat.pattern,
    tortie_base: cat.tortie_base,
    tortie_color: cat.tortie_color,
    tortie_pattern: cat.tortie_pattern,
    skin: cat.skin,
    tint: cat.tint,
    skill_dict: createSkillDict(cat),
		accessory: createAccessory(cat.accessoryType, cat.accessoryColour),
		scars: cat.scars.filter(scr => scr != ""),
		dead: cat.dead,
		dead_moons: cat.dead_moons,
		df: cat.df
  }

  const blob = new Blob([JSON.stringify(exportCat, null, 4)], { type: 'application/json' })
  const jsonurl = URL.createObjectURL(blob)
  // console.log(jsonurl)
  const link: HTMLAnchorElement = document.getElementById('savejson') as HTMLAnchorElement
  link.href = jsonurl
  link.download = `${cat.name_prefix}${cat.name_suffix}`
  link.click()
  URL.revokeObjectURL(jsonurl)
}

export function Save({ cat, catvas, catobj }: Props) {
  const newCat = randomiseCat()

  return (
    <div>
      <button className="save" onClick={() => cat(newCat)}>
        Randomise
      </button>
      <button className="save" onClick={() => saveJson(catobj)}>
        Save JSON
      </button>
      <button className="save" onClick={() => saveImage(catvas, catobj)}>
        Save as Image
      </button>
    </div>
  )
}
