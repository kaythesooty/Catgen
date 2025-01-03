import skinColours from '@dicts/skinColours.json'
import CatData from '@models/Cat'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function Skin({ setter, cat }: Props) {
  return (
    <div className="picker">
      {skinColours.code.map((clr, i) => (
        <button key={i} onClick={() => setter({ ...cat, skin: clr })}>
          {skinColours.eng[i]}
        </button>
      ))}
    </div>
  )
}
