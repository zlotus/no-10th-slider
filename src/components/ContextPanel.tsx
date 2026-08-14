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

export function ContextPanel({
  items,
  visibleCount = items.length,
  capacity = 100,
  mutedFrom,
  meterState = 'normal',
  headerCaption = '当前模型调用的工作台',
  className = '',
}: {
  items: ContextItem[]
  visibleCount?: number
  capacity?: number
  mutedFrom?: number
  meterState?: 'normal' | 'warning' | 'compact'
  headerCaption?: string
  className?: string
}) {
  return <section className={`context-panel meter-${meterState} ${className}`}>
    <header><div><Braces /><span>CONTEXT</span></div><small>{headerCaption}</small></header>
    <div className="context-meter"><span style={{ width: `${capacity}%` }} /><b>{capacity}%</b></div>
    <div className="context-items">
      {items.map((item, index) => {
        const Icon = icons[item.kind]
        const classes = [index < visibleCount ? 'visible' : '', mutedFrom !== undefined && index >= mutedFrom ? 'muted' : ''].filter(Boolean).join(' ')
        return <article key={`${item.label}-${index}`} className={classes}>
          <Icon /><div><strong>{item.label}</strong><span>{item.detail}</span></div><i>{String(index + 1).padStart(2, '0')}</i>
        </article>
      })}
    </div>
  </section>
}
