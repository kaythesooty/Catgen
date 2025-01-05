import whitePatches from '@dicts/whitePatches.json'
import CatData from '../../../models/Cat'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function White({ setter, cat }: Props) {
  return (
    <div className="picker">
      <h3>WHITE PATCHES</h3>
      <button onClick={() => setter({ ...cat, white_patches: null })}>NONE</button>
      <h4>LOW WHITE</h4>
      {whitePatches.lowWhite.code.map((ptn, i) => (
        <button key={i} onClick={() => setter({ ...cat, white_patches: ptn })}>
          {whitePatches.lowWhite.eng[i]}
        </button>
      ))}
      <h4>MID WHITE</h4>
      {whitePatches.midWhite.code.map((ptn, i) => (
        <button key={i} onClick={() => setter({ ...cat, white_patches: ptn })}>
          {whitePatches.midWhite.eng[i]}
        </button>
      ))}
      <h4>HIGH WHITE</h4>
      {whitePatches.highWhite.code.map((ptn, i) => (
        <button key={i} onClick={() => setter({ ...cat, white_patches: ptn })}>
          {whitePatches.highWhite.eng[i]}
        </button>
      ))}
      <h4>MOSTLY WHITE</h4>
      {whitePatches.mostlyWhite.code.map((ptn, i) => (
        <button key={i} onClick={() => setter({ ...cat, white_patches: ptn })}>
          {whitePatches.mostlyWhite.eng[i]}
        </button>
      ))}
      <div className="line"></div>
      <h3>VITILIGO</h3>
      <button onClick={() => setter({ ...cat, vitiligo: null })}>NONE</button>
      {whitePatches.vitiligo.code.map((ptn, i) => (
        <button key={i} onClick={() => setter({ ...cat, vitiligo: ptn })}>
          {whitePatches.vitiligo.eng[i]}
        </button>
      ))}
      <div className="line"></div>
      <h3>POINT MARKINGS</h3>
      <button onClick={() => setter({ ...cat, point: null })}>NONE</button>
      {whitePatches.points.code.map((ptn, i) => (
        <button key={i} onClick={() => setter({ ...cat, point: ptn })}>
          {whitePatches.points.eng[i]}
        </button>
      ))}
    </div>
  )
}
