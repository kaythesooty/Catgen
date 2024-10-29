import { Canvas } from './main/Canvas'
import { LeftPanel } from './main/LeftPanel'
import { RightPanel } from './main/RightPanel'
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
    </main>
  )
}
