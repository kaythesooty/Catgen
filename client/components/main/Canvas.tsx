import { useRef, useEffect } from 'react'
import { Save } from './Save'
import CatData from '../../../models/Cat'

interface Props {
  draw: (context: CanvasRenderingContext2D) => void
  catSetter: (cat: CatData) => void
  cat: CatData
}

export function Canvas({ draw, catSetter, cat }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    draw(ctx as CanvasRenderingContext2D)
  }, [draw])

  let suffix = cat.name_suffix

  switch (cat.status) {
    case 'kitten':
      suffix = 'kit'
      break
    case 'apprentice':
      suffix = 'paw'
      break
    case 'medicine cat apprentice':
      suffix = 'paw'
      break
    case 'mediator apprentice':
      suffix = 'paw'
      break
    case 'leader':
      suffix = 'star'
      break
  }

  return (
    <>
      <div className="flex-container">
        <h2 className="catname">
          {cat.name_prefix}
          {suffix}
        </h2>
        <select value={cat.status} onChange={(e) => catSetter({ ...cat, status: e.target.value })}>
          <option value={'kitten'}>Kitten</option>
          <option value={'apprentice'}>Apprentice</option>
          <option value={'mediator apprentice'}>Mediator Apprentice</option>
          <option value={'medicine cat apprentice'}>Medicine Cat Apprentice</option>
          <option value={'warrior'}>Warrior</option>
          <option value={'mediator'}>Mediator</option>
          <option value={'medicine cat'}>Medicine Cat</option>
          <option value={'deputy'}>Deputy</option>
          <option value={'leader'}>Leader</option>
          <option value={'elder'}>Elder</option>
        </select>
      </div>
      <canvas ref={canvasRef} height={420} width={420}></canvas>
      <Save cat={catSetter} catvas={canvasRef.current} catobj={cat} />
    </>
  )
}
