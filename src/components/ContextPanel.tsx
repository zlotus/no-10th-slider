import { Braces, FileCode2, MessageSquareText, ScrollText, Target, TerminalSquare } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type ContextItem = {
  label: string
  detail: string
  kind: 'instruction' | 'goal' | 'code' | 'result' | 'conversation'
}

const icons: Record<ContextItem['kind'], LucideIcon> = {
  instruction: ScrollText,
  goal: Target,
  code: FileCode2,
  result: TerminalSquare,
  conversation: MessageSquareText,
}

export function ContextPanel({ items, visibleCount = items.length, capacity = 100, className = '' }: {
  items: ContextItem[]
  visibleCount?: number
  capacity?: number
  className?: string
}) {
  return <section className={`context-panel ${className}`}>
    <header><div><Braces /><span>CONTEXT</span></div><small>当前模型调用的工作台</small></header>
    <div className="context-meter"><span style={{ width: `${capacity}%` }} /><b>{capacity}%</b></div>
    <div className="context-items">
      {items.map((item, index) => {
        const Icon = icons[item.kind]
        return <article key={`${item.label}-${index}`} className={index < visibleCount ? 'visible' : ''}>
          <Icon /><div><strong>{item.label}</strong><span>{item.detail}</span></div><i>{String(index + 1).padStart(2, '0')}</i>
        </article>
      })}
    </div>
  </section>
}
