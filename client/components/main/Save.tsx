import { randomBool, randomInt } from '../../store'
import { peltPatterns, peltColours, skinColours, whitePatches, tortiePatterns } from '../../../storage/dict'
import { eyeColours } from '../pickers/Eyes'
import CatData from '../../../models/Cat'

interface Props {
  cat: (cat: CatData) => void
}

const defaultCat: CatData = {
  pose: 8,
  moons: 37,
  paralyzed: false,
  sick: false,
  pelt_name: 'SingleColour',
  pelt_colour: 'BLACK',
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
  cat.pelt_colour = peltColours[randomInt(0, peltColours.length - 1)]
  cat.eye_colour = eyeColours[randomInt(0, eyeColours.length - 1)]
  cat.reverse = randomBool()
  cat.skin = skinColours[randomInt(0, skinColours.length - 1)]
  cat.white_patches = randomBool() ? whitePatches[randomInt(1, whitePatches.length - 1)] : null
  if (randomBool()) {
    cat.white_patches != null ? (cat.pelt_name = 'Calico') : (cat.pelt_name = 'Tortie')
    cat.pattern = tortiePatterns[randomInt(0, tortiePatterns.length - 1)]
    cat.tortie_base = peltPatterns[randomInt(0, peltPatterns.length - 1)].toLowerCase()
    cat.tortie_color = peltColours[randomInt(0, peltColours.length - 1)]
    cat.tortie_pattern = peltPatterns[randomInt(0, peltPatterns.length - 1)].toLowerCase()
  }

  return cat
}

export function Save({ cat }: Props) {
  const newCat = randomiseCat()

  return (
    <div>
      <button className="save" onClick={() => cat(newCat)}>
        Randomise
      </button>
      <button className="save">Save JSON</button>
      <button className="save">Save as Image</button>
    </div>
  )
}
