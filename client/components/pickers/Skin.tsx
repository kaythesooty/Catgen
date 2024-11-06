import { skinColours } from '../../../storage/dict_colours'
import CatData from '../../../models/Cat'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function Skin({ setter, cat }: Props) {
  return (
    <div className="picker">
      {skinColours.map((clr, i) => (
        <button key={i} onClick={() => setter({ ...cat, skin: clr })}>
          {clr}
        </button>
      ))}
    </div>
  )
}
