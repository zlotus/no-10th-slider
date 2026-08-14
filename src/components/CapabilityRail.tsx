import { BookOpenText, Boxes, Cable, Network, ScrollText, ShieldCheck, UsersRound } from 'lucide-react'

const capabilities = [
  { label: 'Instructions', icon: ScrollText },
  { label: 'Skills', icon: Boxes },
  { label: 'Handoff', icon: BookOpenText },
  { label: 'MCP', icon: Cable },
  { label: 'Hooks', icon: ShieldCheck },
  { label: 'Subagents', icon: Network },
  { label: 'Agent Teams', icon: UsersRound },
]

export function CapabilityRail({ active }: { active: number }) {
  return <nav className="capability-rail" aria-label="Agent System 扩展能力">
    <span>AGENT SYSTEM</span>
    {capabilities.map(({ label, icon: Icon }, index) => <div key={label} className={`${index === active ? 'active' : ''} ${index < active ? 'added' : ''}`}>
      <i><Icon /></i><b>{label}</b>{index < capabilities.length - 1 && <em />}
    </div>)}
  </nav>
}
