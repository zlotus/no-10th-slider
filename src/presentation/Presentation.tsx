import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react'
import { Stage } from './Stage'
import { slides } from './slides'
import { usePresentation } from './usePresentation'

export function Presentation() {
  const runtime = usePresentation()
  const CurrentSlide = runtime.current.component
  const progress = ((runtime.index + (runtime.step / Math.max(1, runtime.current.maxStep + 1))) / slides.length) * 100

  return (
    <main className="presentation-shell">
      <Stage><CurrentSlide step={runtime.step} /></Stage>
      <nav className="runtime-controls" aria-label="演示控制">
        <button onClick={runtime.backward} aria-label="上一步"><ChevronLeft /></button>
        <button className="page-indicator" onClick={() => runtime.go((runtime.index + 1) % slides.length)} title="点击跳到下一页">
          <span>{String(runtime.index + 1).padStart(2, '0')}</span><i>/</i><span>{String(slides.length).padStart(2, '0')}</span>
          <small>Slide {String(runtime.current.number).padStart(2, '0')}</small>
        </button>
        <button onClick={runtime.forward} aria-label="下一步"><ChevronRight /></button>
        <button onClick={() => void runtime.toggleFullscreen()} aria-label="切换全屏">
          {runtime.isFullscreen ? <Minimize2 /> : <Maximize2 />}
        </button>
      </nav>
      <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
    </main>
  )
}
