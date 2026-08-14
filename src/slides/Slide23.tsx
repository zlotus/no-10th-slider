import { CircleUserRound, ClipboardList, Mail, Split, Waypoints } from 'lucide-react'
import { AgentUnit } from '../components/AgentUnit'
import { CapabilityRail } from '../components/CapabilityRail'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const workers = [
  ['Researcher', '调查现状与约束', 'READING'],
  ['Coder', '实现独立代码范围', 'CODING'],
  ['Tester', '验证行为与回归', 'TESTING'],
] as const

export function Slide23({ step }: SlideProps) {
  return <Slide number="23" eyebrow="SYSTEM EXTENSION · AGENT TEAMS" title="从 Agent 到 Agent Team" className="slide-23">
    <div className="team-stage">
      <div className="team-human"><CircleUserRound /><span>HUMAN</span><b>目标 + 边界</b></div>
      <AgentUnit name="Planner / Lead" role="拆解任务 · 协调状态" context="Lead Context" tone="lead" state="COORDINATE" className={`team-lead ${step >= 0 ? 'visible' : ''}`} />

      <section className={`task-board ${step >= 1 ? 'visible' : ''}`}><header><ClipboardList />SHARED TASKS</header><p><i />research <b>ready</b></p><p><i />code <b>blocked</b></p><p><i />tests <b>ready</b></p></section>
      <section className={`message-bus ${step >= 3 ? 'visible' : ''}`}><header><Mail />MESSAGE BUS</header><p>task assignment</p><p>result summary</p><p>status update</p></section>

      <div className="team-workers">{workers.map(([name, role, state], index) => <AgentUnit key={name} name={name} role={role} context={`Isolated Context ${index + 1}`} state={state} className={step >= 2 ? 'visible' : ''} />)}</div>
      <AgentUnit name="Reviewer" role="汇总结果 · 交叉验证" context="Review Context" tone="review" state="SYNTHESIZE" className={`team-reviewer ${step >= 4 ? 'visible' : ''}`} />

      <svg className="team-links" viewBox="0 0 1510 650" aria-hidden="true">
        <path className={step >= 0 ? 'active' : ''} d="M755 62 V118" />
        <path className={step >= 2 ? 'active' : ''} d="M755 240 V285 H330 V335" />
        <path className={step >= 2 ? 'active' : ''} d="M755 285 V335" />
        <path className={step >= 2 ? 'active' : ''} d="M755 285 H1180 V335" />
        <path className={step >= 3 ? 'active result' : ''} d="M330 480 V530 H755 V565" />
        <path className={step >= 3 ? 'active result' : ''} d="M755 480 V565" />
        <path className={step >= 3 ? 'active result' : ''} d="M1180 480 V530 H755 V565" />
      </svg>
    </div>
    <div className={`team-principles ${step >= 4 ? 'visible' : ''}`}><span><Split />Task Decomposition</span><span><Waypoints />Context Isolation</span><span><Mail />Result Passing</span><strong>Coordination</strong></div>
    <CapabilityRail active={6} />
  </Slide>
}
