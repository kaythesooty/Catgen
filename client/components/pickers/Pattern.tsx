import { peltColours, peltPatterns, tortiePatterns, whitePatches } from '../../../storage/dict'
import CatData from '../../../models/Cat'
import { randomInt } from '../../store'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function Pattern({ setter, cat }: Props) {
  function randomTortie(calico: boolean) {
    const newCat = { ...cat }
    newCat.pattern = tortiePatterns[randomInt(0, tortiePatterns.length - 1)]
    newCat.tortie_base = peltPatterns[randomInt(0, peltPatterns.length - 1)].toLowerCase()
    newCat.tortie_color = peltColours[randomInt(0, peltColours.length - 1)]
    newCat.tortie_pattern = peltPatterns[randomInt(0, peltPatterns.length - 1)].toLowerCase()
    if (calico) {
      newCat.white_patches = whitePatches[randomInt(0, whitePatches.length - 1)]
      newCat.pelt_name = 'Calico'
    } else {
      newCat.white_patches = null
      newCat.pelt_name = 'Tortie'
    }
    return newCat
  }

  return (
    <div className="picker">
      <button onClick={() => setter(randomTortie(false))}>Tortie</button>
      <button onClick={() => setter(randomTortie(true))}>Calico</button>
      {peltPatterns.map((ptn, i) => (
        <button
          key={i}
          onClick={() => setter({ ...cat, pelt_name: ptn, pattern: null, tortie_base: null, tortie_color: null, tortie_pattern: null })}
        >
          {ptn}
        </button>
      ))}
    </div>
  )
}
