import CatData from '@models/Cat'
import accessories from '@dicts/accessories.json'
import { useState } from 'react'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function Accessories({ setter, cat }: Props) {
  const [collartype, setCollartype] = useState("")

  const collars = accessories.collar.eng
  const colours = accessories.colour.eng
  const herb = accessories.herb.eng
  const wild = accessories.wild.eng

  const setCollar = (collarName: string) => {
    setCollartype(collarName)
    setter({...cat, accessoryType: collarName})
  }

  return (
  <div className="picker">
    <button onClick={() => setter({...cat, accessoryType: null})}>DESTROY ACCESSORY</button>
    <h3>COLLARS</h3>
    {collars.map((clr, i) => <button key={i} onClick={() => setCollar(clr)}>{clr}</button>)}
    <br />
    {colours.map((clr, i) => <button
      key={i}
      onClick={() => setter({...cat, accessoryColour: clr, accessoryType: collartype})}>
      {clr}
    </button>)}
    <div className="line"></div>
    <h3>HERBS</h3>
    {herb.map((hrb, i) => <button key={i} onClick={() => setter({...cat, accessoryType: hrb})}>{hrb}</button>)}
    <div className="line"></div>
    <h3>WILD</h3>
    {wild.map((wld, i) => <button key={i} onClick={() => setter({...cat, accessoryType: wld})}>{wld}</button>)}
  </div>
  )
}