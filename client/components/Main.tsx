import { useState } from 'react'
import { Canvas } from './main/Canvas'
import { LeftPanel, RightPanel } from './main/Panels'
import { Save } from './main/Save'
import { calculateCoords } from '../store'
import { PosePicker } from './pickers/Pose'
import { Pickers } from './main/Pickers'
import { Eyes } from './pickers/Eyes'
import { peltColours, skinColours } from '../../storage/dict_colours'
import { eyeColours } from './pickers/Eyes'
import { Colour } from './pickers/Colour'
import { Skin } from './pickers/Skin'
import { Pattern } from './pickers/Pattern'

const outline = document.getElementById('outline')
const eyes = document.getElementById('eyes')
const skin = document.getElementById('skin')

export function Main() {
  const [cat, setCat] = useState({
    pose: 2,
    moons: 21,
    paralyzed: false,
    sick: false,
    pelt_name: 'Classic',
    pelt_colour: 'BLACK',
    pelt_length: 'long',
    eye_colour: 'SUNLITICE',
    reverse: false,
    white_patches: null,
    skin: 'MARBLED',
  })
  const [picker, setPicker] = useState('default')

  const draw = (context: CanvasRenderingContext2D) => {
    const outlinePos: number[] = calculateCoords(cat.pose, 3, 7, 50)
    let colourPos: number[] = calculateCoords(peltColours.indexOf(cat.pelt_colour), 7, 3, 150, 350)
    let eyePos: number[] = calculateCoords(eyeColours.indexOf(cat.eye_colour), 12, 2, 150, 350)
    let skinPos: number[] = calculateCoords(skinColours.indexOf(cat.skin), 6, 3, 150, 350)

    colourPos = colourPos.map((clr, idx) => clr + outlinePos[idx])
    eyePos = eyePos.map((clr, idx) => clr + outlinePos[idx])
    skinPos = skinPos.map((clr, idx) => clr + outlinePos[idx])

    context.reset()
    context.imageSmoothingEnabled = false
    context.drawImage(document.getElementById(cat.pelt_name.toLowerCase()), colourPos[0], colourPos[1], 50, 50, 10, 10, 400, 400)
    context.drawImage(outline, outlinePos[0], outlinePos[1], 50, 50, 10, 10, 400, 400)
    context.drawImage(eyes, eyePos[0], eyePos[1], 50, 50, 10, 10, 400, 400)
    context.drawImage(skin, skinPos[0], skinPos[1], 50, 50, 10, 10, 400, 400)
  }

  const updateWrapper = (poseSet: number) => {
    setCat({ ...cat, pose: poseSet })
  }

  const updateEyes = (eyes: string) => {
    setCat({ ...cat, eye_colour: eyes })
  }

  const updateColour = (colour: string) => {
    setCat({ ...cat, pelt_colour: colour })
  }

  const updateSkin = (colour: string) => {
    setCat({ ...cat, skin: colour })
  }

  const updatePattern = (pattern: string) => {
    setCat({ ...cat, pelt_name: pattern })
  }

  const handlePicker = (picker: string) => {
    setPicker(picker)
  }

  return (
    <main>
      <div className="flex-container">
        <LeftPanel choose={handlePicker} />
        <div className="flex-container flex-column">
          <Canvas draw={draw} />
          <Save />
        </div>
        <RightPanel />
      </div>
      {picker === 'default' && <Pickers />}
      {picker === 'poses' && <PosePicker pose={updateWrapper} />}
      {picker === 'eyes' && <Eyes eyes={updateEyes} />}
      {picker === 'colour' && <Colour colour={updateColour} />}
      {picker === 'skin' && <Skin skin={updateSkin} />}
      {picker === 'pattern' && <Pattern pattern={updatePattern} />}
    </main>
  )
}
