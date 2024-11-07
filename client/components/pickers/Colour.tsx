import CatData from '../../../models/Cat'
import { peltColours } from '../../../storage/dict'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function Colour({ setter, cat }: Props) {
  return (
    <div className="picker">
      {peltColours.map((clr, i) => (
        <button key={i} onClick={() => setter({ ...cat, pelt_colour: clr })}>
          {clr}
        </button>
      ))}
    </div>
  )
}
