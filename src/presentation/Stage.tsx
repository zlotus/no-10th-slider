import { useEffect, useRef, useState, type ReactNode } from 'react'

const WIDTH = 1920
const HEIGHT = 1080

export function Stage({ children }: { children: ReactNode }) {
  const host = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const resize = () => {
      if (!host.current) return
      setScale(Math.min(host.current.clientWidth / WIDTH, host.current.clientHeight / HEIGHT))
    }
    const observer = new ResizeObserver(resize)
    observer.observe(host.current!)
    resize()
    return () => observer.disconnect()
  }, [])

  return <div className="stage-host" ref={host}><div className="stage" style={{ transform: `scale(${scale})` }}>{children}</div></div>
}
