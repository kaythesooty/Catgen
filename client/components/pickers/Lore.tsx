import { useState } from 'react'
import CatData from '@models/Cat'

import backstories from '@dicts/backstories.json'
import traits from '@dicts/traits.json'
import skills from '@dicts/skills.json'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function LorePicker({ setter, cat }: Props) {
  const [backstoryCategory, setBackstoryCategory] = useState("clan_founder_backstories")

  // console.log(backstoryCategory, cat.backstory)

  return (
    <div className="picker">
			<label>Dead moons: 
				<input type="number" min={0} max={512} disabled={!cat.dead} value={cat.dead_moons} onChange={(e) => setter({ ...cat, dead_moons: +e.target.value })}></input>
      </label>
			<label>Dead 
				<input type='checkbox' checked={cat.dead} onChange={(e) => setter({ ...cat, dead: e.target.checked })}></input>
			</label>
			<label>Dark Forest 
				<input type='checkbox' checked={cat.df} disabled={!cat.dead} onChange={(e) => setter({ ...cat, df: e.target.checked })}></input>
			</label>
      <h3>BACKSTORY</h3>
      <select value={backstoryCategory} onChange={(e) => {setBackstoryCategory(e.target.value)}}>
        {Object.keys(backstories.categories).map((key, i) => <option key={i} value={key}>{backstories.display[key]}</option>)}
      </select>
      {backstories.categories[backstoryCategory].map((story, i) => <button key={i} onClick={() => setter({...cat, backstory: story})}>{story}</button>)}
      <p>{backstories.backstories[cat.backstory]}</p>
      <div className="line"></div>
      <h3>TRAITS</h3>
      <p>{cat.trait}</p>
      {cat.status == "kitten" && traits.kitten.map((trt, i) => <button key={i} onClick={() => setter({...cat, trait: trt})}>{trt}</button>)}
      {cat.status != "kitten" && traits.normal.map((trt, i) => <button key={i} onClick={() => setter({...cat, trait: trt})}>{trt}</button>)}
      <div className="line"></div>
      <h3>SKILLS</h3>
      <p>{cat.skill}{cat.secondSkill != null && ` and ${cat.secondSkill}`}</p>
      {skills.code.map((skl, i) => <button key={i} onClick={() => setter({...cat, skill: skl})}>{skl}</button>)}
      <h4>SECONDARY</h4>
      <button onClick={() => setter({...cat, secondSkill: null})}>NONE</button>
      {skills.code.map((skl, i) => <button key={i} onClick={() => setter({...cat, secondSkill: skl})}>{skl}</button>)}
    </div>
  )
}
