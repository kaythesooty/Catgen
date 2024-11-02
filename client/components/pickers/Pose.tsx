// Technically this shouldn't even be here, this is just for dev purposes

interface Props {
  pose: (poseCoords: number) => void
}

export function PosePicker({ pose }: Props) {
  const buttons = []
  for (let i = 0; i < 21; i++) {
    buttons.push(<button key={i} onClick={() => pose(i)}>{`Pose ${i}`}</button>)
  }
  return <div>{buttons}</div>
}
