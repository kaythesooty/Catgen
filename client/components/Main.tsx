import { useState } from 'react'
import { Canvas } from './main/Canvas'
import { LeftPanel, RightPanel } from './main/Panels'
import { Save } from './main/Save'
import { calculateCoords } from '../store'
import { PosePicker } from './pickers/Pose'

const outline = document.getElementById('outline')
const classiccolours = document.getElementById('classiccolours')
const eyes = document.getElementById('eyes')
const skin = document.getElementById('skin')

export function Main() {
  const [cat, setCat] = useState({
    pose: 2,
    moons: 21,
    paralyzed: false,
    sick: false,
    pelt_name: classiccolours,
    pelt_colour: 8,
    pelt_length: 'long',
    eye_colour: 8,
    reverse: false,
    white_patches: null,
    skin: 4,
  })

  const draw = (context: CanvasRenderingContext2D) => {
    const outlinePos: number[] = calculateCoords(cat.pose, 3, 7, 50)
    let colourPos: number[] = calculateCoords(cat.pelt_colour, 7, 3, 150, 350)
    let eyePos: number[] = calculateCoords(cat.eye_colour, 12, 2, 150, 350)
    let skinPos: number[] = calculateCoords(cat.skin, 6, 3, 150, 350)

    colourPos = colourPos.map((clr, idx) => clr + outlinePos[idx])
    eyePos = eyePos.map((clr, idx) => clr + outlinePos[idx])
    skinPos = skinPos.map((clr, idx) => clr + outlinePos[idx])

    context.reset()
    context.imageSmoothingEnabled = false
    context.drawImage(cat.pelt_name, colourPos[0], colourPos[1], 50, 50, 10, 10, 400, 400)
    context.drawImage(outline, outlinePos[0], outlinePos[1], 50, 50, 10, 10, 400, 400)
    context.drawImage(eyes, eyePos[0], eyePos[1], 50, 50, 10, 10, 400, 400)
    context.drawImage(skin, skinPos[0], skinPos[1], 50, 50, 10, 10, 400, 400)
  }

  const updateWrapper = (poseSet: number) => {
    setCat({ ...cat, pose: poseSet })
  }

  console.log(cat)

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
      <PosePicker pose={updateWrapper} />
    </main>
  )
}
