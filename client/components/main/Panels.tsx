interface Props {
  choose: (picker: string) => void
}

export function LeftPanel({ choose }: Props) {
  return (
    <aside className="panel">
      Left panel
      <br />
      <button onClick={() => choose('poses')}>Poses</button>
      <br />
      <button onClick={() => choose('eyes')}>Eye Colour</button>
      <br />
      <button onClick={() => choose('colour')}>Pelt Colour</button>
      <br />
      <button onClick={() => choose('skin')}>Skin Colour</button>
      <br />
      <button onClick={() => choose('pattern')}>Pelt Pattern</button>
    </aside>
  )
}

export function RightPanel() {
  return <aside className="panel">Right Panel</aside>
}
