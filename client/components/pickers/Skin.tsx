interface Props {
  skin: (skin: string) => void
}

import { skinColours } from '../../../storage/dict_colours'

export function Skin({ skin }: Props) {
  return (
    <div className="picker">
      {skinColours.map((clr, i) => (
        <button key={i} onClick={() => skin(clr)}>
          {clr}
        </button>
      ))}
    </div>
  )
}
