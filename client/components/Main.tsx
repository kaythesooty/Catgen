import { Canvas } from './main/Canvas'
import { LeftPanel, RightPanel } from './main/Panels'
import { Pickers } from './main/Pickers'
import { Save } from './main/Save'

export function Main() {
  return (
    <main>
      <div className="flex-container">
        <LeftPanel />
        <div className="flex-container flex-column">
          <Canvas />
          <Save />
        </div>
        <RightPanel />
      </div>
      <Pickers />
    </main>
  )
}
