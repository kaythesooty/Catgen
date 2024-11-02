import { peltPatterns } from '../../../storage/dict_colours'

interface Props {
  pattern: (pattern: string) => void
}

export function Pattern({ pattern }: Props) {
  return (
    <div>
      {peltPatterns.map((ptn, i) => (
        <button key={i} onClick={() => pattern(ptn)}>
          {ptn}
        </button>
      ))}
    </div>
  )
}
