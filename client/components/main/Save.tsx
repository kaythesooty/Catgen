import { randomBool, randomInt } from '../../store'
import { peltPatterns, peltColours, skinColours, whitePatches, tortiePatterns, defaultExportCat } from '../../../storage/dict'
import { eyeColours } from '../pickers/Eyes'
import CatData from '../../../models/Cat'
import names from '../../../storage/names.ts'

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
  moons: 37,
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
  pattern: null,
  tortie_base: null,
  tortie_color: null,
  tortie_pattern: null,
  skin: 'DARKSALMON',
}

function doTortie(cat: CatData) {
  cat.white_patches != null ? (cat.pelt_name = 'Calico') : (cat.pelt_name = 'Tortie')
  cat.pattern = tortiePatterns[randomInt(0, tortiePatterns.length - 1)]
  cat.tortie_base = peltPatterns[randomInt(0, peltPatterns.length - 1)].toLowerCase()
  cat.tortie_color = peltColours[randomInt(0, peltColours.length - 1)]
  cat.tortie_pattern = peltPatterns[randomInt(0, peltPatterns.length - 1)].toLowerCase()
}

export function randomiseCat(): CatData {
  const cat: CatData = { ...defaultCat }
  cat.gender = randomBool() ? 'female' : 'male'
  cat.gender_align = cat.gender
  cat.status = 'warrior'
  cat.moons = randomInt(0, 180)
  cat.pelt_name = peltPatterns[randomInt(0, peltPatterns.length - 1)]
  cat.pelt_color = peltColours[randomInt(0, peltColours.length - 1)]

  if (randomInt(1, 3) == 3) {
    cat.pelt_length = 'long'
  } else if (randomBool()) {
    cat.pelt_length = 'short'
  } else cat.pelt_length = 'medium'

  cat.sprite_kitten = randomInt(0, 2)
  cat.sprite_adolescent = randomInt(3, 5)
  cat.sprite_adult = randomInt(6, 8)
  cat.sprite_senior = randomInt(12, 14)
  cat.eye_colour = eyeColours[randomInt(0, eyeColours.length - 1)]
  cat.reverse = randomBool()
  cat.skin = skinColours[randomInt(0, skinColours.length - 1)]
  cat.white_patches = randomInt(1, 3) === 3 ? whitePatches[randomInt(1, whitePatches.length - 1)] : null

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

function saveJson(cat: CatData) {
  const exportCat = {
    ...defaultExportCat,
    name_prefix: cat.name_prefix,
    name_suffix: cat.name_suffix,
    gender: cat.gender,
    gender_align: cat.gender_align,
    status: cat.status,
    moons: cat.moons,
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
    pattern: cat.pattern,
    tortie_base: cat.tortie_base,
    tortie_color: cat.tortie_color,
    tortie_pattern: cat.tortie_pattern,
    skin: cat.skin,
  }

  const blob = new Blob([JSON.stringify(exportCat, null, 2)], { type: 'application/json' })
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
