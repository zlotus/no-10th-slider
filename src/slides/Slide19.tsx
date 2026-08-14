import { ArrowRight, BookOpenCheck, CheckCircle2, FileText, Sparkles } from 'lucide-react'
import { CapabilityRail } from '../components/CapabilityRail'
import { ContextPanel, type ContextItem } from '../components/ContextPanel'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const sessionA: ContextItem[] = [
  { label: 'Goal', detail: '完成登录功能并交付', kind: 'goal' },
  { label: 'Completed A / B', detail: 'API 与页面已完成', kind: 'code' },
  { label: 'Failed attempt C', detail: '过期 Session 修复失败', kind: 'result' },
  { label: 'Decision D', detail: '保持现有 Token 格式', kind: 'instruction' },
  { label: 'TODO E / F', detail: '补回归测试与文档', kind: 'goal' },
  { label: 'Conversation History', detail: '大量探索、日志与往返', kind: 'conversation' },
]

const sessionB: ContextItem[] = [
  { label: 'Goal', detail: '完成剩余回归测试', kind: 'goal' },
  { label: 'Key Decisions', detail: '保持 Token 格式', kind: 'instruction' },
  { label: 'Next Steps', detail: '测试 → 文档 → Review', kind: 'code' },
]

const fields = ['Goal', 'Current Progress', 'Key Decisions', 'Important Files', 'Known Problems', 'Next Steps']

export function Slide19({ step }: SlideProps) {
  return <Slide number="19" eyebrow="REAL CASE · CONTEXT CONTINUITY" title="真实案例：project-continuity" className="slide-19">
    <div className="continuity-stage">
      <section className={`continuity-session session-a ${step >= 3 ? 'closed' : ''}`}>
        <header><span>SESSION A</span><b>LONG SESSION</b><small>Context 接近上限</small></header>
        <ContextPanel items={sessionA} capacity={94} className="continuity-context" />
        <div className="session-noise">源代码 · Tool Results · Logs · Conversation · Earlier Attempts</div>
        <div className="session-closed"><span>SESSION CLOSED</span><small>不再携带全部过程</small></div>
      </section>

      <section className="handoff-column">
        <div className={`continuity-skill ${step >= 1 ? 'active' : ''}`}><Sparkles /><div><span>SKILL</span><b>project-continuity</b></div></div>
        <div className={`handoff-document ${step >= 2 ? 'visible' : ''}`}>
          <header><BookOpenCheck /><div><span>STRUCTURED HANDOFF</span><b>Repository-owned state</b></div></header>
          <div>{fields.map((field, index) => <p key={field} className={step >= 2 ? 'visible' : ''} style={{ transitionDelay: `${index * 35}ms` }}><CheckCircle2 />{field}</p>)}</div>
          <footer><FileText />progress.md <i /> decisions.md <i /> handoff.md</footer>
        </div>
        <div className={`handoff-transfer ${step >= 4 ? 'active' : ''}`}><span>版本化项目状态</span><ArrowRight /></div>
      </section>

      <section className={`continuity-session session-b ${step >= 4 ? 'ready' : ''} ${step >= 5 ? 'active' : ''}`}>
        <header><span>SESSION B</span><b>NEW SESSION</b><small>Clean Context</small></header>
        <ContextPanel items={sessionB} visibleCount={step >= 5 ? 3 : 0} capacity={step >= 5 ? 28 : 4} className="continuity-context" />
        <div className="session-resume"><CheckCircle2 /><span>Relevant Project State</span><b>可以继续下一步</b></div>
      </section>
    </div>
    <div className={`continuity-takeaway ${step >= 5 ? 'visible' : ''}`}><span>连续性 ≠ 保留全部历史</span><strong>保留正确的状态，丢掉不再有价值的过程</strong></div>
    <CapabilityRail active={2} />
  </Slide>
}
