import { Check, Code2, FlaskConical, GitCommitHorizontal, ListChecks, Search, Sparkles } from 'lucide-react'

const phases = [
  { label: '需求', icon: Sparkles },
  { label: 'Explore', icon: Search },
  { label: 'Plan', icon: ListChecks },
  { label: 'Code', icon: Code2 },
  { label: 'Test / Fix', icon: FlaskConical },
  { label: 'Commit', icon: GitCommitHorizontal },
]

export function StoryRail({ active, completed = active, hero = false }: {
  active: number
  completed?: number
  hero?: boolean
}) {
  return <nav className={`story-rail ${hero ? 'hero' : ''}`} aria-label="登录功能任务进度">
    {phases.map(({ label, icon: Icon }, index) => <div key={label} className={`${index === active ? 'active' : ''} ${index < completed ? 'done' : ''}`}>
      <i>{index < completed ? <Check /> : <Icon />}</i>
      <span>{label}</span>
      {index < phases.length - 1 && <b aria-hidden="true" />}
    </div>)}
  </nav>
}
