export type CodeLine = { code: string; note?: string }

export function CodeBlock({ lines, activeLine = -1, className = '' }: { lines: CodeLine[]; activeLine?: number; className?: string }) {
  return <section className={`code-block ${className}`}>
    <header><i /><i /><i /><span>agent-loop.ts</span></header>
    <ol>{lines.map((line, index) => <li key={`${line.code}-${index}`} className={index === activeLine ? 'active' : ''}>
      <span>{String(index + 1).padStart(2, '0')}</span><code>{line.code}</code>{line.note && <em>{line.note}</em>}
    </li>)}</ol>
  </section>
}
