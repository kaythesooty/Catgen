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
      <canvas ref={canvasRef} height={420} width={420}></canvas>
      <Save cat={catSetter} catvas={canvasRef.current} catobj={cat} />
    </>
  )
}
