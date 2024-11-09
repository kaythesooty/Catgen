import { useState } from 'react'
import { Canvas } from './main/Canvas'
import { LeftPanel, RightPanel } from './main/Panels'
import { randomiseCat } from './main/Save'
import { calculateCoords } from '../store'
import { PosePicker } from './pickers/Pose'
import { Pickers } from './main/Pickers'
import { peltColours, skinColours, tortiePatterns, whitePatches } from '../../storage/dict'
import { eyeColours, Eyes } from './pickers/Eyes'
import { Colour } from './pickers/Colour'
import { Skin } from './pickers/Skin'
import { Pattern } from './pickers/Pattern'
import { White } from './pickers/White'
import CatData from '../../models/Cat'
import { TortieBase, TortieColour, TortieOptions, TortieSecond } from './pickers/Tortie'

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
    const outlinePos = calculateCoords(cat.pose, 3, 7, 50)
    let colourPos = calculateCoords(peltColours.indexOf(cat.pelt_color), 7, 3, 150, 350)
    let eyePos = calculateCoords(eyeColours.indexOf(cat.eye_colour), 12, 2, 150, 350)
    let skinPos = calculateCoords(skinColours.indexOf(cat.skin), 6, 3, 150, 350)
    let eyePos2 = calculateCoords(eyeColours.indexOf(cat.eye_colour2), 12, 2, 150, 350)
    let whitePos = calculateCoords(whitePatches.indexOf(cat.white_patches), 14, 10, 150, 350)
    let tortiePos = calculateCoords(tortiePatterns.indexOf(cat.pattern), 10, 5, 150, 350)
    let tortieColourPos = calculateCoords(peltColours.indexOf(cat.tortie_color), 7, 3, 150, 350)

    // Calculate sprites based on pose
    colourPos = colourPos.map((clr, idx) => clr + outlinePos[idx])
    eyePos = eyePos.map((clr, idx) => clr + outlinePos[idx])
    eyePos2 = eyePos2.map((clr, idx) => clr + outlinePos[idx])
    skinPos = skinPos.map((clr, idx) => clr + outlinePos[idx])
    whitePos = whitePos.map((clr, idx) => clr + outlinePos[idx])
    tortiePos = tortiePos.map((clr, idx) => clr + outlinePos[idx])
    tortieColourPos = tortieColourPos.map((clr, idx) => clr + outlinePos[idx])

    // ---- DRAW CAT ----
    // Initialise canvas
    context.reset()
    context.imageSmoothingEnabled = false

    // Draw tortie pattern first, then it will be clipped by the mask
    if (cat.pelt_name === 'Tortie' || cat.pelt_name === 'Calico') {
      context.globalCompositeOperation = 'destination-atop'
      context.drawImage(document.getElementById(cat.tortie_pattern), tortieColourPos[0], tortieColourPos[1], 50, 50, 10, 10, 400, 400)
      context.drawImage(tortie, tortiePos[0], tortiePos[1], 50, 50, 10, 10, 400, 400)
      // Put base colour under tortie colour, then go back to normal
      context.globalCompositeOperation = 'destination-over'
      context.drawImage(document.getElementById(cat.tortie_base), colourPos[0], colourPos[1], 50, 50, 10, 10, 400, 400)
      context.globalCompositeOperation = 'source-over'
    } else {
      context.drawImage(document.getElementById(cat.pelt_name.toLowerCase()), colourPos[0], colourPos[1], 50, 50, 10, 10, 400, 400)
    }

    context.drawImage(white, whitePos[0], whitePos[1], 50, 50, 10, 10, 400, 400)
    context.drawImage(outline, outlinePos[0], outlinePos[1], 50, 50, 10, 10, 400, 400)
    context.drawImage(eyes, eyePos[0], eyePos[1], 50, 50, 10, 10, 400, 400)
    context.drawImage(eyes2, eyePos2[0], eyePos2[1], 50, 50, 10, 10, 400, 400)
    context.drawImage(skin, skinPos[0], skinPos[1], 50, 50, 10, 10, 400, 400)

    console.log(cat)
  }

  const updateWrapper = (newCat: CatData) => {
    if (newCat.pelt_name === 'Tortie' && newCat.white_patches !== null) newCat.pelt_name = 'Calico'
    if (newCat.pelt_name === 'Calico' && newCat.white_patches === null) newCat.pelt_name = 'Tortie'
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
          <Canvas draw={draw} catSetter={randomCat} cat={cat} />
          {/* <Save cat={randomCat} /> */}
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
      {picker === 'torties' && <TortieOptions setter={updateWrapper} cat={cat} />}
      {picker === 'torties-base' && <TortieBase setter={updateWrapper} cat={cat} />}
      {picker === 'torties-pattern' && <TortieSecond setter={updateWrapper} cat={cat} />}
      {picker === 'torties-colour' && <TortieColour setter={updateWrapper} cat={cat} />}
    </main>
  )
}
