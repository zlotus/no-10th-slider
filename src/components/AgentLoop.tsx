import { BrainCircuit, Braces, CornerDownLeft, CornerUpRight, Wrench } from 'lucide-react'

export function AgentLoop({ active = 0, compact = false }: { active?: number; compact?: boolean }) {
  const segments = ['model', 'tool-use', 'tool', 'tool-result', 'context']
  return <div className={`agent-loop ${compact ? 'compact' : ''}`}>
    <svg viewBox="0 0 520 520" aria-hidden="true">
      <path className={active >= 1 ? 'active request' : ''} d="M260 82 C392 82 444 168 438 260" />
      <path className={active >= 2 ? 'active request' : ''} d="M438 260 C438 374 354 438 260 438" />
      <path className={active >= 3 ? 'active result' : ''} d="M260 438 C136 438 78 360 82 260" />
      <path className={active >= 4 ? 'active result' : ''} d="M82 260 C82 152 158 82 260 82" />
    </svg>
    <div className={`loop-node loop-model ${active === 0 || active === 4 ? 'focus' : ''}`}><BrainCircuit /><b>Model</b></div>
    <div className={`loop-node loop-tool ${active === 2 ? 'focus' : ''}`}><Wrench /><b>Tool</b></div>
    <div className={`loop-node loop-context ${active === 3 ? 'focus' : ''}`}><Braces /><b>Context</b></div>
    <div className={`loop-packet loop-use ${active === 1 ? 'focus' : ''}`}><CornerUpRight /><span>tool_use</span></div>
    <div className={`loop-packet loop-result ${active === 3 ? 'focus' : ''}`}><CornerDownLeft /><span>tool_result</span></div>
    <div className="loop-legend">{segments.map((segment, index) => <i key={segment} className={index <= active ? 'done' : ''} />)}</div>
  </div>
}
