import CatData from '../../../models/Cat'

interface Props {
  choose: (picker: string) => void
  cat: CatData
  setCat?: (newCat: CatData) => void
}

export function LeftPanel({ choose, cat, setCat }: Props) {
  if (setCat === undefined) {
    return <h4>Cannot set cat! (Panels.tsx)</h4>
  }
  return (
    <aside className="panel">
      Left panel
      <br />
      <label>
        Age: <input type="number" min={0} max={512} value={cat.moons} onChange={(e) => setCat({ ...cat, moons: +e.target.value })}></input>
      </label>
      <br />
      <button onClick={() => choose('poses')}>Poses</button>
      <br />
      <button onClick={() => choose('eyes')}>Eye Colour</button>
      <p>{cat.eye_colour}</p>
      {cat.eye_colour2 != 'null' && <p>{cat.eye_colour2}</p>}
      <button onClick={() => choose('colour')}>Pelt Colour</button>
      <p>{cat.pelt_color}</p>
      <button onClick={() => choose('skin')}>Skin Colour</button>
      <p>{cat.skin}</p>
      <button onClick={() => choose('pelt')}>Pelt Options</button>
      <p>{cat.pelt_length}</p>
      <p>{cat.pelt_name}</p>
      <p>{cat.pelt_color}</p>
      <label>
        Sick: <input type="checkbox" checked={cat.sick} onChange={(e) => setCat({ ...cat, sick: e.target.checked })}></input>
      </label>
      <br />
      <label>
        Paralysed: <input type="checkbox" checked={cat.paralyzed} onChange={(e) => setCat({ ...cat, paralyzed: e.target.checked })}></input>
      </label>
    </aside>
  )
}

export function RightPanel({ choose, cat }: Props) {
  return (
    <aside className="panel">
      Right Panel
      <br />
      <button onClick={() => choose('white')}>White Patches</button>
      <p>{cat.white_patches != null ? cat.white_patches : `-----`}</p>
      {cat.tortie_base != null && <button onClick={() => choose('torties')}>Tortie Pattern</button>}
      <p>{cat.pattern}</p>
      {cat.tortie_base != null && <button onClick={() => choose('torties-base')}>Tortie Base Pattern</button>}
      <p>{cat.tortie_base}</p>
      {cat.tortie_base != null && <button onClick={() => choose('torties-pattern')}>Tortie Second Pattern</button>}
      <p>{cat.tortie_pattern}</p>
      {cat.tortie_base != null && <button onClick={() => choose('torties-colour')}>Tortie Second Colour</button>}
      <p>{cat.tortie_color}</p>
    </aside>
  )
}
