import { useState } from 'react'
import { Canvas } from './main/Canvas'
import { LeftPanel, RightPanel } from './main/Panels'
import { Pickers } from './main/Pickers'
import { Save } from './main/Save'

// const outline = document.createElement('img')
// outline.setAttribute('src', 'images/sprites/lineart.png')
const outline = document.getElementById('outline')

export function Main() {
  const draw = (context: CanvasRenderingContext2D) => {
    context.reset()
    context.imageSmoothingEnabled = false
    context.drawImage(outline, 0, 0, 50, 50, 10, 10, 400, 400)
    console.log('hecc')
  }

  return (
    <main>
      <div className="flex-container">
        <LeftPanel />
        <div className="flex-container flex-column">
          <Canvas draw={draw} />
          <Save />
        </div>
        <RightPanel />
      </div>
      <Pickers />
    </main>
  )
}
