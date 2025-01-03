import whitePatches from '@dicts/whitePatches.json'
import CatData from '../../../models/Cat'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function White({ setter, cat }: Props) {
  return (
    <div className="picker">
      <button onClick={() => setter({ ...cat, white_patches: null })}>NONE</button>
      {whitePatches.masterList.map((ptn, i) => (
        <button key={i} onClick={() => setter({ ...cat, white_patches: ptn })}>
          {ptn}
        </button>
      ))}
    </div>
  )
}
