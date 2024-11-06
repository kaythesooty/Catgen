import { randomBool, randomInt } from '../../store'
import { peltPatterns, peltColours, skinColours } from '../../../storage/dict_colours'
import { eyeColours } from '../pickers/Eyes'
import CatData from '../../../models/Cat'

interface Props {
  cat: (cat: CatData) => void
}

const defaultCat = {
  pose: 8,
  moons: 37,
  paralyzed: false,
  sick: false,
  pelt_name: 'SingleColour',
  pelt_colour: 'BLACK',
  pelt_length: 'short',
  eye_colour: 'SUNLITICE',
  reverse: true,
  white_patches: '',
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
