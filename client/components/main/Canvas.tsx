import React, { useRef, useEffect } from 'react'
import { Save, saveImage } from './Save'
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

  return (
    <>
      <div className="flex-container">
        <h2 className="catname">
          {cat.name_prefix}
          {cat.moons < 6 ? 'kit' : cat.name_suffix}
        </h2>
        <select>
          <option value={'kitten'}>Kitten</option>
          <option value={'apprentice'}>Apprentice</option>
          <option value={'medcat-app'}>Medicine-cat Apprentice</option>
          <option value={'warrior'} selected>
            Warrior
          </option>
          <option value={'medcat'}>Medicine-cat</option>
          <option value={'deputy'}>Deputy</option>
          <option value={'leader'}>Leader</option>
        </select>
        <button>Gender</button>
      </div>
      <canvas ref={canvasRef} height={420} width={420}></canvas>
      <Save cat={catSetter} catvas={canvasRef.current} catobj={cat} />
    </>
  )
}
