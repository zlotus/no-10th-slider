import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react'
import { Stage } from './Stage'
import { slides } from './slides'
import { usePresentation } from './usePresentation'
import { useState } from 'react'

export function Presentation() {
  const runtime = usePresentation()
  const [editingPage, setEditingPage] = useState(false)
  const [pageInput, setPageInput] = useState('')
  const submitPage = () => {
    const page = Number(pageInput)

    if (Number.isInteger(page) && page >= 1 && page <= slides.length) {
      runtime.go(page - 1)
    }

    setEditingPage(false)
    setPageInput('')
  }
  const CurrentSlide = runtime.current.component
  const progress = ((runtime.index + (runtime.step / Math.max(1, runtime.current.maxStep + 1))) / slides.length) * 100

  return (
    <main className="presentation-shell">
      <Stage><CurrentSlide step={runtime.step} /></Stage>
      <nav className="runtime-controls" aria-label="演示控制">
        <button onClick={runtime.backward} aria-label="上一步"><ChevronLeft /></button>
        <button
          className="page-indicator"
          onClick={() => {
            if (!editingPage) {
              runtime.go((runtime.index + 1) % slides.length)
            }
          }}
          title="点击跳到下一页"
        >
          {editingPage ? (
            <input
              className="page-jump-input"
              type="number"
              min={1}
              max={slides.length}
              value={pageInput}
              autoFocus
              onFocus={(event) => event.currentTarget.select()}
              onClick={(event) => event.stopPropagation()}
              onChange={(event) => setPageInput(event.target.value)}
              onBlur={() => {
                setEditingPage(false)
                setPageInput('')
              }}
              onKeyDown={(event) => {
                event.stopPropagation()

                if (event.key === 'Enter') {
                  event.preventDefault()
                  submitPage()
                }

                if (event.key === 'Escape') {
                  event.preventDefault()
                  setEditingPage(false)
                  setPageInput('')
                }
              }}
            />
          ) : (
            <span
              className="page-current"
              onClick={(event) => {
                event.stopPropagation()
                setPageInput(String(runtime.index + 1))
                setEditingPage(true)
              }}
              title="点击输入页码"
            >
              {String(runtime.index + 1).padStart(2, '0')}
            </span>
          )}

          <i>/</i>
          <span>{String(slides.length).padStart(2, '0')}</span>
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
