import CatData from '@models/Cat'
import pelts from '@dicts/pelts.json'
import tortiePatterns from '@dicts/tortiePatterns.json'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function TortieOptions({ cat, setter }: Props) {
  return (
    <div className="picker">
      {tortiePatterns.code.map((clr, i) => (
        <button key={i} onClick={() => setter({ ...cat, pattern: clr })}>
          {tortiePatterns.eng[i]}
        </button>
      ))}
    </div>
  )
}

export function TortieBase({ setter, cat }: Props) {
  return (
    <div className="picker">
      {pelts.patterns.code.map((ptn, i) => (
        <button key={i} onClick={() => setter({ ...cat, tortie_base: ptn.toLowerCase() })}>
          {pelts.patterns.eng[i]}
        </button>
      ))}
      <div className="line"></div>
      {pelts.colours.code.map((clr, i) => (
        <button key={i} onClick={() => setter({ ...cat, pelt_color: clr })}>
          {pelts.colours.eng[i]}
        </button>
      ))}
    </div>
  )
}

export function TortieSecond({ setter, cat }: Props) {
  return (
    <div className="picker">
      {pelts.patterns.code.map((ptn, i) => (
        <button key={i} onClick={() => setter({ ...cat, tortie_pattern: ptn.toLowerCase() })}>
          {pelts.patterns.eng[i]}
        </button>
      ))}
      <div className="line"></div>
      {pelts.colours.code.map((clr, i) => (
        <button key={i} onClick={() => setter({ ...cat, tortie_color: clr })}>
          {pelts.colours.eng[i]}
        </button>
      ))}
    </div>
  )
}
