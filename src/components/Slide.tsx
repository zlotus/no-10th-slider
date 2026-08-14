import type { ReactNode } from 'react'

export function Slide({ number, eyebrow, title, children, className = '' }: {
  number: string; eyebrow?: string; title: string; children: ReactNode; className?: string
}) {
  return <section className={`slide ${className}`}>
    <header className="slide-header">
      <div><span className="slide-number">{number}</span>{eyebrow && <span className="eyebrow">{eyebrow}</span>}</div>
      <h1>{title}</h1>
    </header>
    {children}
  </section>
}
