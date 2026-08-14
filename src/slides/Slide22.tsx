import { Beaker, Braces, CheckCircle2, FlaskConical, Search, ShieldCheck } from 'lucide-react'
import { AgentLoop } from '../components/AgentLoop'
import { AgentUnit } from '../components/AgentUnit'
import { CapabilityRail } from '../components/CapabilityRail'
import { ToolResultCard, ToolUseCard } from '../components/Packets'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const tasks = [[Search, 'Research'], [ShieldCheck, 'Security'], [FlaskConical, 'Tests']] as const

export function Slide22({ step }: SlideProps) {
  return <Slide number="22" eyebrow="SYSTEM EXTENSION · SUBAGENT" title="Subagent：给子任务一张干净工作台" className="slide-22">
    <div className="subagent-stage">
      <section className="parent-agent">
        <AgentUnit name="Main Agent" role="负责总体任务与决策" context="Main Context" tone="lead" state="WORK" />
        <div className="subtask-list">{tasks.map(([Icon, label], index) => <article key={label} className={`${step >= 1 ? 'visible' : ''} ${index === 1 ? 'selected' : ''}`}><Icon /><span>{label}</span>{index === 1 && <b>委派</b>}</article>)}</div>
        <div className={`task-packet ${step >= 1 ? 'visible' : ''}`}><ToolUseCard compact name="task" inputKey="prompt" inputValue="审计 auth 安全边界" showStopReason={false} /></div>
      </section>

      <div className={`subagent-bridge ${step >= 2 ? 'active' : ''}`}><span>fresh messages[]</span><i>→</i><small>不是复制父对话</small></div>

      <section className={`isolated-agent ${step >= 2 ? 'visible' : ''}`}>
        <header><Braces /><div><span>SUBAGENT CONTEXT</span><b>独立工作台</b></div><small>ISOLATED</small></header>
        <div className="isolated-content">
          <AgentUnit name="Security Subagent" role="只处理 auth 审计" context="Fresh Context" state={step >= 3 ? 'WORK' : 'READY'} />
          <div className="subagent-inputs"><p><b>Specific Task</b>审计 auth 安全边界</p><p><b>Selected Tools</b>Read · Search · Bash</p><p><b>Parent History</b><em>不进入</em></p></div>
          <div className={`subagent-loop ${step >= 3 ? 'active' : ''}`}><AgentLoop compact active={step >= 3 ? 4 : 0} /><span>独立 Agent Loop</span></div>
        </div>
      </section>

      <div className={`subagent-result ${step >= 4 ? 'visible' : ''}`}>
        <ToolResultCard compact content="发现 2 个风险；建议见摘要" toolUseId="toolu_task_01" />
        <i>←</i><span><CheckCircle2 /><b>Result Summary</b><small>只有结论回到 Main Context</small></span>
      </div>
    </div>
    <div className={`subagent-takeaway ${step >= 4 ? 'visible' : ''}`}><Beaker /><span>Subagent 的价值不只是并行</span><strong>更是 Context Isolation</strong></div>
    <CapabilityRail active={5} />
  </Slide>
}
