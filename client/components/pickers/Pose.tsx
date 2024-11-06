// Technically this shouldn't even be here, this is just for dev purposes

import CatData from '../../../models/Cat'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function PosePicker({ setter, cat }: Props) {
  const buttons = []
  for (let i = 0; i < 21; i++) {
    buttons.push(<button key={i} onClick={() => setter({ ...cat, pose: i })}>{`Pose ${i}`}</button>)
  }
  return <div className="picker">{buttons}</div>
}
