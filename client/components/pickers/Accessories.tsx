import CatData from '@models/Cat'
import accessories from '@dicts/accessories.json'
import { useState } from 'react'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function Accessories({ setter, cat }: Props) {
  const [collartype, setCollartype] = useState("")

  const { code: collarTypes, eng: collarNames } = accessories.collar
  const { code: colourValues, eng: colourNames } = accessories.colour
  const { code: herbValues, eng: herbNames } = accessories.herb
  const { code: wildValues, eng: wildNames } = accessories.wild

  const setCollar = (collarName: string) => {
    setCollartype(collarName)
    setter({...cat, accessoryType: collarName})
  }

  return (
  <div className="picker">
    <h3>COLLARS</h3>
    <label>Collar type:
      <select value={collartype} onChange={(e) => setCollar(e.target.value)}>
        {collarTypes.map((opt, i) => <option value={opt} key={i}>{collarNames[i]}</option>)}
      </select>
    </label>
    {colourValues.map((clr, i) => <button
      key={i}
      onClick={() => setter({...cat, accessoryType: `${clr}${collartype}`})}>
      {colourNames[i]}
    </button>)}
    <div className="line"></div>
    <h3>HERBS</h3>
    {herbValues.map((hrb, i) => <button key={i} onClick={() => setter({...cat, accessoryType: hrb})}>{herbNames[i]}</button>)}
    <div className="line"></div>
    <h3>WILD</h3>
    {wildValues.map((wld, i) => <button key={i} onClick={() => setter({...cat, accessoryType: wld})}>{wildNames[i]}</button>)}
  </div>
  )
}