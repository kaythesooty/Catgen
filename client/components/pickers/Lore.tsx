import { useState } from 'react'
import CatData from '../../../models/Cat'
import { backstory_categories, backstories, traits, traitsKitten } from '../../../storage/dict'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function LorePicker({ setter, cat }: Props) {
  const [backstoryCategory, setBackstoryCategory] = useState("clan_founder_backstories")

  console.log(backstoryCategory, cat.backstory)

  return (
    <div className="picker">
      <h3>BACKSTORY</h3>
      <select value={backstoryCategory} onChange={(e) => {setBackstoryCategory(e.target.value)}}>
        {Object.keys(backstory_categories).map((key, i) => <option key={i} value={key}>{key}</option>)}
      </select>
      {backstory_categories[backstoryCategory].map((story, i) => <button key={i} onClick={() => setter({...cat, backstory: story})}>{story}</button>)}
      <p>{backstories[cat.backstory]}</p>
      <div className="line"></div>
      <h3>TRAITS</h3>
      <p>{cat.trait}</p>
      {cat.status == "kitten" && traitsKitten.map((trt, i) => <button key={i} onClick={() => setter({...cat, trait: trt})}>{trt}</button>)}
      {cat.status != "kitten" && traits.map((trt, i) => <button key={i} onClick={() => setter({...cat, trait: trt})}>{trt}</button>)}
    </div>
  )
}
