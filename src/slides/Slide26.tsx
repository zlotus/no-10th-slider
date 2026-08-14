import { AlertTriangle, ArrowRight, CheckCircle2, MessageSquareText, RefreshCw, Target } from 'lucide-react'
import { ContextPanel, type ContextItem } from '../components/ContextPanel'
import { HandoffDocument } from '../components/HandoffDocument'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const compactContext: ContextItem[] = [
  { label: 'Conversation Summary', detail: '此前对话的压缩摘要', kind: 'conversation' },
  { label: 'Recent Tool Results', detail: '最近几轮仍然保留', kind: 'result' },
  { label: 'Current Focus', detail: '继续当前 Session', kind: 'goal' },
  { label: 'Earlier Details', detail: '部分信息已经淡出', kind: 'conversation' },
]

const newSessionContext: ContextItem[] = [
  { label: 'Goal', detail: '完成剩余回归测试', kind: 'goal' },
  { label: 'Key Decisions', detail: '保持 Token 格式', kind: 'instruction' },
  { label: 'Next Steps', detail: '测试 → 文档 → Review', kind: 'code' },
]

export function Slide26({ step }: SlideProps) {
  const compacted = step === 1
  const filledAgain = step >= 2
  return <Slide number="26" eyebrow="CONTEXT MANAGEMENT · CHOICE" title="Compact，还是 New Session？" className="slide-26">
    <div className="context-choice-stage">
      <section className="compact-lane">
        <header><RefreshCw /><div><span>同一个 Session</span><b>Compact → Continue</b></div><small>对话连续性</small></header>
        <ContextPanel
          items={compactContext}
          visibleCount={4}
          capacity={compacted ? 52 : filledAgain ? 92 : 98}
          mutedFrom={compacted ? 3 : undefined}
          meterState={compacted ? 'compact' : 'warning'}
          className="compact-choice-panel"
          headerCaption={compacted ? '摘要后继续' : filledAgain ? '继续工作后再次增长' : '当前 Session 接近上限'}
        />
        <div className="compact-cycle">
          {['FULL', 'COMPACT', 'CONTINUE', 'FULL', 'COMPACT'].map((label, index) => <span key={`${label}-${index}`} className={step >= Math.min(index, 2) ? 'active' : ''}>{label}{index < 4 && <i>→</i>}</span>)}
        </div>
        <div className={`compact-risks ${step >= 2 ? 'visible' : ''}`}><span><AlertTriangle />摘要误差</span><span>旧信息干扰</span><span>焦点漂移</span></div>
      </section>

      <section className="handoff-lane">
        <header><Target /><div><span>新的 Session</span><b>Structured Handoff</b></div><small>任务连续性</small></header>
        <div className="handoff-choice-flow">
          <div className={`choice-session old ${step >= 3 ? 'closed' : ''}`}><span>SESSION A</span><b>Long Context</b><small>关闭旧工作台</small></div>
          <ArrowRight className={step >= 3 ? 'active' : ''} />
          <HandoffDocument visible={step >= 3} className="context-choice-doc" fields={['Goal', 'Decisions', 'Progress', 'Next Steps']} />
          <ArrowRight className={step >= 4 ? 'active' : ''} />
          <div className={`choice-session fresh ${step >= 4 ? 'active' : ''}`}><span>SESSION B</span><b>Clean Context</b><small>只带相关项目状态</small></div>
        </div>
        <ContextPanel items={newSessionContext} visibleCount={step >= 4 ? 3 : 0} capacity={step >= 4 ? 28 : 4} className={`new-session-panel ${step >= 4 ? 'visible' : ''}`} headerCaption="Relevant Project State" />
        <div className={`handoff-confirm ${step >= 4 ? 'visible' : ''}`}><CheckCircle2 />不复制整段聊天，仍然可以继续任务</div>
      </section>
    </div>
    <div className={`context-choice-summary ${step >= 5 ? 'visible' : ''}`}>
      <span><MessageSquareText /><b>Compact</b>保留“对话连续性”</span><i>≠</i><span><Target /><b>Handoff</b>保留“任务连续性”</span>
      <strong>Context Management 本身也是 Agent Engineering</strong>
    </div>
  </Slide>
}
