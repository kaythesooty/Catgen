interface Props {
  eyes: (eyes: string) => void
}

import { eyeColourNames } from '../../../storage/dict_colours'

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

export function Eyes({ eyes }: Props) {
  return (
    <div>
      {eyeColours.map((clr, i) => (
        <button key={i} onClick={() => eyes(clr)}>
          {eyeColourNames[i]}
        </button>
      ))}
    </div>
  )
}
