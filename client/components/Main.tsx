import { Canvas } from './main/Canvas'
import { LeftPanel } from './main/LeftPanel'
import { RightPanel } from './main/RightPanel'

export function Main() {
  return (
    <main>
      <LeftPanel />
      <Canvas />
      <RightPanel />
    </main>
  )
}
