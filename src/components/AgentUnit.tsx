import { BrainCircuit, Braces } from 'lucide-react'

export function AgentUnit({
  name,
  role,
  context = '独立 Context',
  state = 'READY',
  tone = 'peer',
  className = '',
}: {
  name: string
  role: string
  context?: string
  state?: string
  tone?: 'lead' | 'peer' | 'review'
  className?: string
}) {
  return <section className={`agent-unit agent-${tone} ${className}`}>
    <header><BrainCircuit /><span>AGENT</span><i>{state}</i></header>
    <strong>{name}</strong>
    <small>{role}</small>
    <footer><Braces />{context}</footer>
  </section>
}
