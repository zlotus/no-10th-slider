import { BookOpenCheck, CheckCircle2, FileText } from 'lucide-react'

const defaultHandoffFields = ['Goal', 'Current Progress', 'Key Decisions', 'Important Files', 'Known Problems', 'Next Steps']

export function HandoffDocument({
  visible = true,
  fields = defaultHandoffFields,
  title = 'Repository-owned state',
  className = '',
}: {
  visible?: boolean
  fields?: readonly string[]
  title?: string
  className?: string
}) {
  return <section className={`handoff-document ${visible ? 'visible' : ''} ${className}`}>
    <header><BookOpenCheck /><div><span>STRUCTURED HANDOFF</span><b>{title}</b></div></header>
    <div>{fields.map((field, index) => <p key={field} className={visible ? 'visible' : ''} style={{ transitionDelay: `${index * 35}ms` }}><CheckCircle2 />{field}</p>)}</div>
    <footer><FileText />progress.md <i /> decisions.md <i /> handoff.md</footer>
  </section>
}
