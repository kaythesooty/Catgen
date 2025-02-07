import CatData from '@models/Cat'
import scars from '@dicts/scars.json'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function Scars({ setter, cat }: Props) {
	const checkScars = (newScar: string, index: number) => {
		const newCat = {...cat}

		if (newCat.scars[index] == newScar) return
		else newCat.scars[index] = newScar

		setter(newCat)
	}

  return (
    <div className="picker">
      <h3>HEAD INJURIES</h3>
				<button onClick={() => {checkScars('', 0)}}>None</button>
				{scars.head.code.map((scr, i) => <button key={i} onClick={() => {checkScars(scr, 0)}}>{scars.head.eng[i]}</button>)}
			<h3>BODY INJURIES</h3>
			<button onClick={() => {checkScars('', 1)}}>None</button>
				{scars.body.code.map((scr, i) => <button key={i} onClick={() => {checkScars(scr, 1)}}>{scars.body.eng[i]}</button>)}
			<h3>LEG INJURIES</h3>
			<button onClick={() => {checkScars('', 2)}}>None</button>
				{scars.legs.code.map((scr, i) => <button key={i} onClick={() => {checkScars(scr, 2)}}>{scars.legs.eng[i]}</button>)}
			<h3>TAIL INJURIES</h3>
			<button onClick={() => {checkScars('', 3)}}>None</button>
				{scars.tail.code.map((scr, i) => <button key={i} onClick={() => {checkScars(scr, 3)}}>{scars.tail.eng[i]}</button>)}
    </div>
  )
}
