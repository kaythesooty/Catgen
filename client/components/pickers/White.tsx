import { whitePatches } from '../../../storage/dict'
import CatData from '../../../models/Cat'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function White({ setter, cat }: Props) {
  return (
    <div className="picker">
      {whitePatches.map((ptn, i) => (
        <button key={i} onClick={() => setter({ ...cat, white_patches: ptn })}>
          {ptn}
        </button>
      ))}
    </div>
  )
}