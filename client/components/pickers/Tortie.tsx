import CatData from '../../../models/Cat'
import { tortiePatterns } from '../../../storage/dict'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function TortieOptions({ cat, setter }: Props) {
  return (
    <div className="picker">
      {tortiePatterns.map((clr, i) => (
        <button key={i} onClick={() => setter({ ...cat, pattern: clr })}>
          {clr}
        </button>
      ))}
    </div>
  )
}
