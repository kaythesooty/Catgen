import CatData from '../../../models/Cat'
import { eyeColourNames } from '../../../storage/dict'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export const eyeColours = [
  'YELLOW',
  'AMBER',
  'HAZEL',
  'PALEGREEN',
  'GREEN',
  'BLUE',
  'DARKBLUE',
  'GREY',
  'CYAN',
  'EMERALD',
  'HEATHERBLUE',
  'SUNLITICE',
  'COPPER',
  'SAGE',
  'COBALT',
  'PALEBLUE',
  'BRONZE',
  'SILVER',
  'PALEYELLOW',
  'GOLD',
  'GREENYELLOW',
]

export function Eyes({ setter, cat }: Props) {
  return (
    <div className="picker">
      {eyeColours.map((clr, i) => (
        <button key={i} onClick={() => setter({ ...cat, eye_colour: clr })}>
          {eyeColourNames[i]}
        </button>
      ))}
      <h3>Odd Eyes</h3>
      <button onClick={() => setter({ ...cat, eye_colour2: 'null' })}>None</button>
      {eyeColours.map((clr, i) => (
        <button key={i} onClick={() => setter({ ...cat, eye_colour2: clr })}>
          {eyeColourNames[i]}
        </button>
      ))}
    </div>
  )
}
