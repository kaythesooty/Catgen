import CatData from '@models/Cat'
import { doWhitePatches, randomInt } from '../../store'

import pelts from '@dicts/pelts.json'
import tortiePatterns from '@dicts/tortiePatterns.json'
import whitePatches from '@dicts/whitePatches.json'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function Pelt({ setter, cat }: Props) {
  function randomTortie(calico: boolean) {
    const newCat = { ...cat }
    newCat.pattern = tortiePatterns.masterlist[randomInt(0, tortiePatterns.masterlist.length - 1)]
    newCat.tortie_base = pelts.patterns.code[randomInt(0, pelts.patterns.code.length - 1)].toLowerCase()
    newCat.tortie_color = pelts.colours.code[randomInt(0, pelts.colours.code.length - 1)]
    newCat.tortie_pattern = pelts.patterns.code[randomInt(0, pelts.patterns.code.length - 1)].toLowerCase()
    if (calico) {
      newCat.white_patches = doWhitePatches()
      newCat.pelt_name = 'Calico'
    } else {
      newCat.white_patches = null
      newCat.pelt_name = 'Tortie'
    }
    return newCat
  }

  return (
    <>
      <div className="picker">
        <h3>PELT COLOURS</h3>
        {pelts.colours.code.map((clr, i) => (
          <button key={i} onClick={() => setter({ ...cat, pelt_color: clr })}>
            {pelts.colours.eng[i]}
          </button>
        ))}

        <div className="line"></div>
        <h3>PELT PATTERN</h3>

        <button onClick={() => setter(randomTortie(false))}>Tortie</button>
        <button onClick={() => setter(randomTortie(true))}>Calico</button>
        {pelts.patterns.code.map((ptn, i) => (
          <button
            key={i}
            onClick={() => setter({ ...cat, pelt_name: ptn, pattern: null, tortie_base: null, tortie_color: null, tortie_pattern: null })}
          >
            {pelts.patterns.eng[i]}
          </button>
        ))}

        <div className="line"></div>
        <h3>FUR LENGTH</h3>
        <button
          onClick={() => {
            setter({ ...cat, pelt_length: 'short' })
          }}
        >
          Short
        </button>
        <button
          onClick={() => {
            setter({ ...cat, pelt_length: 'medium' })
          }}
        >
          Medium
        </button>
        <button
          onClick={() => {
            setter({ ...cat, pelt_length: 'long' })
          }}
        >
          Long
        </button>
      </div>
    </>
  )
}
