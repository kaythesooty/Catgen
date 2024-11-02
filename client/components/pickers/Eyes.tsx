interface Props {
  eyes: (eyes: number) => void
}

export function Eyes({ eyes }: Props) {
  const buttons = []

  for (let i = 0; i < 20; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => {
          eyes(i)
        }}
      >{`Eye colour ${i}`}</button>
    )
  }

  return <div>{buttons}</div>
}
