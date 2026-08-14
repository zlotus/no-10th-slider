import { Ban, CheckCircle2, Code2, FileEdit, FileWarning, ListRestart, ScrollText, ShieldCheck, WandSparkles, X } from 'lucide-react'
import { CapabilityRail } from '../components/CapabilityRail'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

export function Slide21({ step }: SlideProps) {
  return <Slide number="21" eyebrow="SYSTEM EXTENSION · HOOKS" title="Hooks：有些事不能靠 Agent 自觉" className="slide-21">
    <div className="hooks-stage">
      <section className="soft-instruction">
        <header><ScrollText /><span>INSTRUCTION</span><b>指导层</b></header>
        <blockquote>“修改代码后记得运行 prettier”</blockquote>
        <div className={step >= 1 ? 'visible' : ''}><CheckCircle2 /><span>Agent：好的</span></div>
        <div className={`forgot ${step >= 1 ? 'visible' : ''}`}><X /><span>这一次忘了</span></div>
        <footer>影响 Model 的判断，但不是执行门禁</footer>
      </section>

      <section className="hook-runtime">
        <header><ListRestart /><span>HARNESS LIFECYCLE</span><b>程序层</b></header>
        <div className="hook-flow">
          <article className={step >= 2 ? 'active' : ''}><FileEdit /><span><b>edit_file</b><small>Tool handler 完成</small></span></article>
          <i>→</i>
          <article className={`checkpoint ${step >= 2 ? 'active' : ''}`}><ShieldCheck /><span><b>PostToolUse</b><small>生命周期检查点</small></span></article>
          <i>→</i>
          <article className={step >= 2 ? 'active' : ''}><WandSparkles /><span><b>prettier</b><small>自动执行</small></span></article>
        </div>
        <div className={`always-run ${step >= 2 ? 'visible' : ''}`}><CheckCircle2 />ALWAYS RUN <span>不依赖 Model 再想起来</span></div>
      </section>

      <section className="enforcement-grid">
        <article className={step >= 3 ? 'visible' : ''}><Ban /><div><span>PreToolUse · Permission</span><b>拒绝修改 .env</b></div><small>DENY</small></article>
        <article className={step >= 3 ? 'visible' : ''}><FileWarning /><div><span>Pre / Post Tool Use</span><b>记录每次 Tool Call</b></div><small>LOG</small></article>
        <article className={step >= 3 ? 'visible' : ''}><Code2 /><div><span>Host Code</span><b>规则由程序执行</b></div><small>ENFORCE</small></article>
      </section>
    </div>
    <div className={`hook-takeaway ${step >= 4 ? 'visible' : ''}`}><span>“希望做到” <b>Instruction</b></span><i>≠</i><strong>“必须做到” <b>Hook / Permission / Code</b></strong></div>
    <CapabilityRail active={4} />
  </Slide>
}
