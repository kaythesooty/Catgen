import CatData from '../../../models/Cat'
import { peltColours, peltPatterns, tortiePatterns } from '../../../storage/dict'

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

export function TortieBase({ setter, cat }: Props) {
  return (
    <div className="picker">
      {peltPatterns.map((ptn, i) => (
        <button key={i} onClick={() => setter({ ...cat, tortie_base: ptn.toLowerCase() })}>
          {ptn}
        </button>
      ))}
      <div className="line"></div>
      {peltColours.map((clr, i) => (
        <button key={i} onClick={() => setter({ ...cat, pelt_color: clr })}>
          {clr}
        </button>
      ))}
    </div>
  )
}

export function TortieSecond({ setter, cat }: Props) {
  return (
    <div className="picker">
      {peltPatterns.map((ptn, i) => (
        <button key={i} onClick={() => setter({ ...cat, tortie_pattern: ptn.toLowerCase() })}>
          {ptn}
        </button>
      ))}
      <div className="line"></div>
      {peltColours.map((clr, i) => (
        <button key={i} onClick={() => setter({ ...cat, tortie_color: clr })}>
          {clr}
        </button>
      ))}
    </div>
  )
}
