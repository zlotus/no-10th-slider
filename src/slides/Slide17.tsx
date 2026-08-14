import { Check, FileText, LockKeyhole, PackageCheck, PlayCircle, ScrollText } from 'lucide-react'
import { CapabilityRail } from '../components/CapabilityRail'
import { ContextNode, ModelNode } from '../components/Nodes'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const rules = [
  ['使用 TypeScript', FileText],
  ['使用 pnpm', PackageCheck],
  ['修改后运行 pnpm test', PlayCircle],
  ['不修改 migrations', LockKeyhole],
  ['API 保持向后兼容', Check],
] as const

export function Slide17({ step }: SlideProps) {
  return <Slide number="17" eyebrow="SYSTEM EXTENSION · INSTRUCTIONS" title="Instructions：这个项目有什么规矩？" className="slide-17">
    <div className="instructions-stage">
      <section className="instruction-file">
        <header><i /><i /><i /><span>AGENTS.md</span><b>PROJECT RULES</b></header>
        <div className="instruction-lines">
          <small># 在这个项目里工作时</small>
          {rules.map(([rule, Icon], index) => <article key={rule} className={step >= Math.min(index, 2) ? 'visible' : ''}><span>{String(index + 1).padStart(2, '0')}</span><Icon /><b>{rule}</b></article>)}
        </div>
        <footer>每个 Session 都会读取</footer>
      </section>

      <section className="instruction-pipeline">
        <div className="instruction-source"><ScrollText /><span>AGENTS.md</span><small>项目规则</small></div>
        <div className={`instruction-arrow ${step >= 1 ? 'active' : ''}`}><span>加入当前调用</span><i>↓</i></div>
        <div className={`instruction-context ${step >= 1 ? 'active' : ''}`}><ContextNode /><small>Instructions 成为 Context 的一部分</small></div>
        <div className={`instruction-arrow ${step >= 2 ? 'active' : ''}`}><span>每轮读取</span><i>↓</i></div>
        <div className={`instruction-model ${step >= 2 ? 'active' : ''}`}><ModelNode /></div>
      </section>
    </div>
    <div className={`instruction-takeaway ${step >= 3 ? 'visible' : ''}`}><span>Instructions 不让 Model 更聪明</span><i>→</i><strong>它让 Agent 更了解这里应该怎么工作</strong></div>
    <CapabilityRail active={0} />
  </Slide>
}
