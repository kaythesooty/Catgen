import CatData from '../../../models/Cat'

interface Props {
  choose: (picker: string) => void
  cat: CatData
}

export function LeftPanel({ choose, cat }: Props) {
  return (
    <aside className="panel">
      Left panel
      <br />
      <button onClick={() => choose('poses')}>Poses</button>
      <p>{cat.pose}</p>
      <button onClick={() => choose('eyes')}>Eye Colour</button>
      <p>{cat.eye_colour}</p>
      {cat.eye_colour2 != 'null' && <p>{cat.eye_colour2}</p>}
      <button onClick={() => choose('colour')}>Pelt Colour</button>
      <p>{cat.pelt_colour}</p>
      <button onClick={() => choose('skin')}>Skin Colour</button>
      <p>{cat.skin}</p>
      <button onClick={() => choose('pattern')}>Pelt Pattern</button>
      <p>{cat.pelt_name}</p>
    </aside>
  )
}

export function RightPanel({ choose, cat }: Props) {
  return <aside className="panel">Right Panel</aside>
}
