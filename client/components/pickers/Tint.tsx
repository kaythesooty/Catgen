import { tintColours } from '../../../storage/dict'
import CatData from '../../../models/Cat'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function Tint({ setter, cat }: Props) {
  return (
    <div className="picker">
      <button onClick={() => setter({ ...cat, tint: null })}>none</button>
      {tintColours.map((ptn, i) => (
        <button key={i} onClick={() => setter({ ...cat, tint: ptn })}>
          {ptn}
        </button>
      ))}
    </div>
  )
}
