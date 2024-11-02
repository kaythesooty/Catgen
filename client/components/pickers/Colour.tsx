import { peltColours } from '../../../storage/dict_colours'

interface Props {
  colour: (colourPos: string) => void
}

export function Colour({ colour }: Props) {
  return (
    <div>
      {peltColours.map((clr, i) => (
        <button key={i} onClick={() => colour(clr)}>
          {clr}
        </button>
      ))}
    </div>
  )
}
