import { Archive, ArrowDown, CheckCircle2, FileCode2, FileWarning, MessageSquareText, Minimize2, ScrollText, TerminalSquare } from 'lucide-react'
import { ContextPanel, type ContextItem } from '../components/ContextPanel'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const contextItems: ContextItem[] = [
  { label: 'Instructions + Goal', detail: '项目规则与当前目标', kind: 'instruction' },
  { label: 'Source Code', detail: 'auth.ts · App.tsx', kind: 'code' },
  { label: 'Recent Tool Results', detail: 'read_file · search', kind: 'result' },
  { label: 'Execution Logs', detail: '完整命令输出', kind: 'result' },
  { label: 'Tests', detail: '失败堆栈与断言细节', kind: 'result' },
  { label: 'Conversation', detail: '多轮推理与反馈', kind: 'conversation' },
  { label: 'More Source Code', detail: '更多相关文件', kind: 'code' },
  { label: 'More Tool Results', detail: '持续累积的新结果', kind: 'result' },
]

const capacities = [30, 55, 78, 100, 52, 52]
const visibleCounts = [3, 5, 7, 8, 8, 8]

export function Slide25({ step }: SlideProps) {
  const compacted = step >= 4
  return <Slide number="25" eyebrow="CONTEXT MANAGEMENT · COMPACT" title="Context Window：工作台放不下了" className="slide-25">
    <div className="context-pressure-stage">
      <section className="growing-context">
        <ContextPanel
          items={contextItems}
          visibleCount={visibleCounts[step]}
          capacity={capacities[step]}
          mutedFrom={compacted ? 3 : undefined}
          meterState={step === 3 ? 'warning' : compacted ? 'compact' : 'normal'}
          headerCaption={compacted ? '摘要后的活跃工作台' : '持续增长的活跃工作台'}
          className={compacted ? 'compacted' : ''}
        />
        <div className={`context-full-badge ${step === 3 ? 'visible' : ''}`}><FileWarning />CONTEXT FULL</div>
      </section>

      <section className="context-pressure-story">
        <header><ScrollText /><span>ACTIVE CONTEXT</span><b>{capacities[step]}%</b></header>
        <ol>
          <li className={step >= 0 ? 'done' : ''}><FileCode2 /><span>读取代码</span></li>
          <li className={step >= 1 ? 'done' : ''}><TerminalSquare /><span>积累结果与 Logs</span></li>
          <li className={step >= 2 ? 'done' : ''}><MessageSquareText /><span>更多轮对话</span></li>
          <li className={step >= 3 ? 'danger' : ''}><Archive /><span>工作台到达上限</span></li>
        </ol>
        <div className={`compact-action ${compacted ? 'visible' : ''}`}><Minimize2 /><span>COMPACT</span><ArrowDown /></div>
        <div className={`compact-details ${compacted ? 'visible' : ''}`}>
          <div><CheckCircle2 /><p><b>摘要保留</b><small>目标 · 当前状态 · 关键决策</small></p></div>
          <div className="lost"><FileWarning /><p><b>细节可能淡出</b><small>原始 Logs · 精确措辞 · 中间过程</small></p></div>
        </div>
      </section>
    </div>
    <div className={`compact-takeaway ${step >= 5 ? 'visible' : ''}`}><span>Compact 让当前 Session 继续</span><strong>但它不是无损压缩</strong></div>
  </Slide>
}
