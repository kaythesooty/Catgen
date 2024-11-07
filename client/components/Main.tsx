import { useState } from 'react'
import { Canvas } from './main/Canvas'
import { LeftPanel, RightPanel } from './main/Panels'
import { Save, randomiseCat } from './main/Save'
import { calculateCoords } from '../store'
import { PosePicker } from './pickers/Pose'
import { Pickers } from './main/Pickers'
import { peltColours, skinColours, whitePatches } from '../../storage/dict'
import { eyeColours, Eyes } from './pickers/Eyes'
import { Colour } from './pickers/Colour'
import { Skin } from './pickers/Skin'
import { Pattern } from './pickers/Pattern'
import { White } from './pickers/White'
import CatData from '../../models/Cat'

const outline = document.getElementById('outline')
const eyes = document.getElementById('eyes')
const eyes2 = document.getElementById('eyes2')
const skin = document.getElementById('skin')
const white = document.getElementById('white-patches')
const tortie = document.getElementById('tortie-masks')

export function Main() {
  const [cat, setCat] = useState(randomiseCat)
  const [picker, setPicker] = useState('default')

  const draw = (context: CanvasRenderingContext2D) => {
    // Calculate spritesheet coords
    const outlinePos: number[] = calculateCoords(cat.pose, 3, 7, 50)
    let colourPos: number[] = calculateCoords(peltColours.indexOf(cat.pelt_colour), 7, 3, 150, 350)
    let eyePos: number[] = calculateCoords(eyeColours.indexOf(cat.eye_colour), 12, 2, 150, 350)
    let skinPos: number[] = calculateCoords(skinColours.indexOf(cat.skin), 6, 3, 150, 350)
    let eyePos2: number[] = [0, 0]
    let whitePos: number[] = calculateCoords(whitePatches.indexOf(cat.white_patches), 14, 10, 150, 350)
    if (cat.eye_colour2 != null) {
      eyePos2 = calculateCoords(eyeColours.indexOf(cat.eye_colour2), 12, 2, 150, 350)
    }

    colourPos = colourPos.map((clr, idx) => clr + outlinePos[idx])
    eyePos = eyePos.map((clr, idx) => clr + outlinePos[idx])
    if (cat.eye_colour2 != 'null') {
      eyePos2 = eyePos2.map((clr, idx) => clr + outlinePos[idx])
    }
    skinPos = skinPos.map((clr, idx) => clr + outlinePos[idx])
    whitePos = whitePos.map((clr, idx) => clr + outlinePos[idx])

    // Draw cat
    context.reset()
    context.imageSmoothingEnabled = false
    context.drawImage(document.getElementById(cat.pelt_name.toLowerCase()), colourPos[0], colourPos[1], 50, 50, 10, 10, 400, 400)
    context.drawImage(white, whitePos[0], whitePos[1], 50, 50, 10, 10, 400, 400)
    context.drawImage(outline, outlinePos[0], outlinePos[1], 50, 50, 10, 10, 400, 400)
    context.drawImage(eyes, eyePos[0], eyePos[1], 50, 50, 10, 10, 400, 400)
    if (cat.eye_colour2 != null) {
      context.drawImage(eyes2, eyePos2[0], eyePos2[1], 50, 50, 10, 10, 400, 400)
    }
    context.drawImage(skin, skinPos[0], skinPos[1], 50, 50, 10, 10, 400, 400)
  }

  const updateWrapper = (newCat: CatData) => {
    setCat(newCat)
  }

  const randomCat = (cat: CatData) => {
    setCat(cat)
  }

  const handlePicker = (picker: string) => {
    setPicker(picker)
  }

  return (
    <main>
      <div className="flex-container">
        <LeftPanel choose={handlePicker} cat={cat} />
        <div className="flex-container flex-column">
          <Canvas draw={draw} />
          <Save cat={randomCat} />
        </div>
        <RightPanel choose={handlePicker} cat={cat} />
      </div>
      {picker === 'default' && <Pickers />}
      {picker === 'poses' && <PosePicker setter={updateWrapper} cat={cat} />}
      {picker === 'eyes' && <Eyes setter={updateWrapper} cat={cat} />}
      {picker === 'colour' && <Colour setter={updateWrapper} cat={cat} />}
      {picker === 'skin' && <Skin setter={updateWrapper} cat={cat} />}
      {picker === 'pattern' && <Pattern setter={updateWrapper} cat={cat} />}
      {picker === 'white' && <White setter={updateWrapper} cat={cat} />}
    </main>
  )
}
