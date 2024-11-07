import { peltPatterns } from '../../../storage/dict'
import CatData from '../../../models/Cat'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function Pattern({ setter, cat }: Props) {
  return (
    <div className="picker">
      {peltPatterns.map((ptn, i) => (
        <button key={i} onClick={() => setter({ ...cat, pelt_name: ptn })}>
          {ptn}
        </button>
      ))}
    </div>
  )
}
