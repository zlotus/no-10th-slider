import { Braces, CheckCircle2, CircleUserRound, Code2, Crosshair, Eye, KeyRound, ShieldCheck, Target, Wrench } from 'lucide-react'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const responsibilities = [
  [Target, '定义目标'],
  [Braces, '提供上下文'],
  [ShieldCheck, '设置边界'],
  [KeyRound, '授予工具'],
  [Eye, '观察执行'],
  [CheckCircle2, '判断结果'],
] as const

export function Slide28({ step }: SlideProps) {
  return <Slide number="28" eyebrow="CLOSING" title="人的角色也变了" className="slide-28">
    <div className="human-role-stage">
      <section className={`operator-model ${step >= 1 ? 'past' : ''}`}>
        <div><CircleUserRound /><span>HUMAN</span></div><i>↓</i><div><Code2 /><span>COMPUTER</span></div>
        <p>人直接操作电脑</p>
      </section>

      <section className={`manager-model ${step >= 1 ? 'visible' : ''}`}>
        <div className="manager-human"><CircleUserRound /><span>HUMAN</span></div>
        <i>↓</i>
        <div className="manager-intent"><Crosshair /><span>Goal / Rules</span></div>
        <i>↓</i>
        <div className="manager-agent"><Wrench /><span>AGENT</span></div>
        <i>↓</i>
        <div className="manager-output"><Code2 /><span>Code · Tools · Agents</span></div>
      </section>
    </div>

    <div className={`human-responsibilities ${step >= 2 ? 'visible' : ''}`}>
      {responsibilities.map(([Icon, label], index) => <span key={label} style={{ transitionDelay: `${index * 35}ms` }}><Icon />{label}</span>)}
    </div>
    <div className={`closing-line ${step >= 3 ? 'visible' : ''}`}><span>从操作电脑</span><i>→</i><strong>到管理能够操作电脑的 Agent</strong></div>
  </Slide>
}
