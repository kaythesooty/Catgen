import React, { useRef, useEffect } from 'react'

interface Props {
  draw: (context: CanvasRenderingContext2D) => void
}

export function Canvas({ draw }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    draw(ctx as CanvasRenderingContext2D)
  }, [draw])

  return <canvas ref={canvasRef} height={420} width={420}></canvas>
}
