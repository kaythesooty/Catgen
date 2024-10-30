import { Canvas } from './main/Canvas'
import { LeftPanel, RightPanel } from './main/Panels'
import { Pickers } from './main/Pickers'
import { Save } from './main/Save'

export function Main() {
  return (
    <main>
      <div>
        <LeftPanel />
        <Canvas />
        <Save />
        <RightPanel />
      </div>
      <Pickers />
    </main>
  )
}
