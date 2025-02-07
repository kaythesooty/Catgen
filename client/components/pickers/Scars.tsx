import CatData from '@models/Cat'
import scars from '@dicts/scars.json'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function Scars({ setter, cat }: Props) {
  return (
    <div className="picker">
      <h3>HEAD INJURIES</h3>
				{scars.head.code.map((scr, i) => <button key={i}>{scars.head.eng[i]}</button>)}
			<h3>BODY INJURIES</h3>
				{scars.body.code.map((scr, i) => <button key={i}>{scars.body.eng[i]}</button>)}
			<h3>LEG INJURIES</h3>
				{scars.legs.code.map((scr, i) => <button key={i}>{scars.legs.eng[i]}</button>)}
			<h3>TAIL INJURIES</h3>
				{scars.tail.code.map((scr, i) => <button key={i}>{scars.tail.eng[i]}</button>)}
    </div>
  )
}
