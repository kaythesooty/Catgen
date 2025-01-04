import CatData from '@models/Cat'
import eyeColours from '@dicts/eyeColours.json'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function Eyes({ setter, cat }: Props) {
  return (
    <div className="picker">
      {eyeColours.code.map((clr, i) => (
        <button key={i} onClick={() => setter({ ...cat, eye_colour: clr })}>
          {eyeColours.eng[i]}
        </button>
      ))}
      <h3>ODD EYES</h3>
      <button onClick={() => setter({ ...cat, eye_colour2: null })}>None</button>
      {eyeColours.code.map((clr, i) => (
        <button key={i} onClick={() => setter({ ...cat, eye_colour2: clr })}>
          {eyeColours.eng[i]}
        </button>
      ))}
    </div>
  )
}
