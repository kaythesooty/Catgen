import { ChangeEvent, FormEvent, useState } from 'react'
import CatData from '../../../models/Cat'

interface Props {
  choose: (picker: string) => void
  cat: CatData
  setCat?: (newCat: CatData) => void
}

export function LeftPanel({ choose, cat, setCat }: Props) {
  const [edit, setEdit] = useState(false)
  const [catName, setCatName] = useState({ prefix: cat.name_prefix, suffix: cat.name_suffix })

  if (setCat === undefined) {
    return <h4>Cannot set cat! (Panels.tsx)</h4>
  }

  console.log("reloaded", catName)
  console.log(cat.name_prefix + cat.name_suffix)

  const editmode = () => {
    setCatName({prefix: cat.name_prefix, suffix: cat.name_suffix})
    setEdit(true)
  }

  const handleNameChange = (e: FormEvent) => {
    e.preventDefault()
    setCat({ ...cat, name_prefix: catName.prefix, name_suffix: catName.suffix })
    setEdit(!edit)
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = evt.target
    setCatName(() => ({
      ...catName,
      [name]: value
    }))
  }

  const handleCancel = () => {
    setEdit(false)
    setCatName({ prefix: cat.name_prefix, suffix: cat.name_suffix })
  }

  const sexChange = () => {
    cat.gender == 'male'
      ? setCat({ ...cat, gender: 'female', gender_align: 'female' })
      : setCat({ ...cat, gender: 'male', gender_align: 'male' })
  }

  return (
    <aside className="panel">
      <h3 className="m0">Left panel</h3>
      {!edit && (
        <p className="m0">
          <button
            onClick={editmode}
          >
            Edit
          </button>{' '}
          {cat.name_prefix}
          {cat.name_suffix}
        </p>
      )}
      {edit && (
        <form onSubmit={handleNameChange}>
          <button type="submit">Done</button>
          <button onClick={handleCancel}>Cancel</button>
          <br />
          <input
            id="prefix"
            name="prefix"
            placeholder="prefix (eg. Spider, Fire)"
            defaultValue={catName.prefix}
            onChange={handleChange}
          ></input>
          <input
            id="suffix"
            name="suffix"
            placeholder="suffix (eg. tail, heart)"
            defaultValue={catName.suffix}
            onChange={handleChange}
          ></input>
        </form>
      )}
      <button onClick={() => {choose('lore')}}>Lore</button>
      <br />
      <p>
        <button onClick={sexChange}>Swap</button> {cat.gender}
      </p>
      <select value={cat.gender_align} onChange={(e) => setCat({ ...cat, gender_align: e.target.value })}>
        {cat.gender === 'male' && <option value={'male'}>Male</option>}
        {cat.gender === 'female' && <option value={'female'}>Female</option>}
        {cat.gender === 'female' && <option value={'trans male'}>Male</option>}
        {cat.gender === 'male' && <option value={'trans female'}>Female</option>}
        <option value={'nonbinary'}>Non-binary</option>
      </select>
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
      <button onClick={() => choose('skin')}>Skin Colour</button>
      <p>{cat.skin}</p>
      <button onClick={() => choose('pelt')}>Pelt Options</button>
      <p className="m0">{cat.pelt_length}</p>
      <p>
        {`${cat.pelt_color} 
        ${cat.pelt_name}`}
      </p>
      <label>
        Sick: <input type="checkbox" checked={cat.sick} onChange={(e) => setCat({ ...cat, sick: e.target.checked })}></input>
      </label>
      <br />
      <label>
        Paralysed: <input type="checkbox" checked={cat.paralyzed} onChange={(e) => setCat({ ...cat, paralyzed: e.target.checked })}></input>
      </label>
      <br />
      <label>
        Reverse: <input type="checkbox" checked={cat.reverse} onChange={(e) => setCat({ ...cat, reverse: e.target.checked })}></input>
      </label>
    </aside>
  )
}

export function RightPanel({ choose, cat }: Props) {
  return (
    <aside className="panel">
      <h3 className="m0">Right Panel</h3>
      <br />
      <button onClick={() => choose('white')}>White Patches</button>
      <p>{cat.white_patches != null ? cat.white_patches : `NONE`}</p>
      <button onClick={() => choose('tint')}>Tint</button>
      <p>{cat.tint != null ? cat.tint : `none`}</p>
      {cat.tortie_base != null && <button onClick={() => choose('torties')}>Tortie Pattern</button>}
      <p>{cat.pattern != null && cat.pattern}</p>
      {cat.tortie_base != null && <button onClick={() => choose('torties-base')}>Tortie Base Options</button>}
      <p>{cat.tortie_base != null && `${cat.pelt_color} ${cat.tortie_base}`}</p>
      {cat.tortie_base != null && <button onClick={() => choose('torties-second')}>Tortie Secondary Options</button>}
      <p>{cat.tortie_base != null && `${cat.tortie_color} ${cat.tortie_pattern}`}</p>
    </aside>
  )
}
