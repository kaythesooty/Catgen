import { randomBool, randomInt } from '../../store'
import { peltPatterns, peltColours, skinColours, whitePatches, tortiePatterns, defaultUsableCat } from '../../../storage/dict'
import { eyeColours } from '../pickers/Eyes'
import CatData from '../../../models/Cat'

interface Props {
  cat: (cat: CatData) => void
  catvas: HTMLCanvasElement
  catobj: CatData
}

const defaultCat: CatData = {
  pose: 8,
  moons: 37,
  paralyzed: false,
  sick: false,
  pelt_name: 'SingleColour',
  pelt_color: 'BLACK',
  pelt_length: 'short',
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

export function randomiseCat(): CatData {
  const cat = { ...defaultCat }
  cat.pose = randomInt(0, 20)
  cat.moons = randomInt(0, 180)
  cat.pelt_name = peltPatterns[randomInt(0, peltPatterns.length - 1)]
  cat.pelt_color = peltColours[randomInt(0, peltColours.length - 1)]
  cat.eye_colour = eyeColours[randomInt(0, eyeColours.length - 1)]
  cat.reverse = randomBool()
  cat.skin = skinColours[randomInt(0, skinColours.length - 1)]
  cat.white_patches = randomInt(1, 3) === 3 ? whitePatches[randomInt(1, whitePatches.length - 1)] : null
  if (randomInt(1, 4) === 4) {
    cat.white_patches != null ? (cat.pelt_name = 'Calico') : (cat.pelt_name = 'Tortie')
    cat.pattern = tortiePatterns[randomInt(0, tortiePatterns.length - 1)]
    cat.tortie_base = peltPatterns[randomInt(0, peltPatterns.length - 1)].toLowerCase()
    cat.tortie_color = peltColours[randomInt(0, peltColours.length - 1)]
    cat.tortie_pattern = peltPatterns[randomInt(0, peltPatterns.length - 1)].toLowerCase()
  }

  return cat
}

export function saveImage(canvas: HTMLCanvasElement) {
  console.log(canvas)
  canvas.toBlob((blob) => {
    const imgurl = URL.createObjectURL(blob)
    const link: HTMLAnchorElement = document.getElementById('save')
    link.href = imgurl
    link.download = 'Generated Cat'
    link.click()
    URL.revokeObjectURL(imgurl)
  })
}

function saveJson(cat: CatData) {
  const usableCat = {
    ...defaultUsableCat,
    moons: cat.moons,
    paralyzed: cat.paralyzed,
    pelt_name: cat.pelt_name,
    pelt_color: cat.pelt_color,
    pelt_length: cat.pelt_length,
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

  const blob = new Blob([JSON.stringify(usableCat, null, 2)], { type: 'application/json' })
  const jsonurl = URL.createObjectURL(blob)
  // console.log(jsonurl)
  const link: HTMLAnchorElement = document.getElementById('savejson')
  link.href = jsonurl
  link.download = 'Generated Cat'
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
      <button className="save" onClick={() => saveImage(catvas)}>
        Save as Image
      </button>
    </div>
  )
}
