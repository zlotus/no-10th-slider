import { AlertTriangle, BrainCircuit, CheckCircle2, FileWarning, LockKeyhole, ShieldCheck, TerminalSquare } from 'lucide-react'
import { AgentLoop } from '../components/AgentLoop'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const errorChain = [
  [BrainCircuit, '错误判断', '“这个文件可以直接覆盖”'],
  [TerminalSquare, '错误操作', 'edit_file("src/auth.ts")'],
  [FileWarning, '环境被改变', '正确校验逻辑被删除'],
  [AlertTriangle, '错误结果回到 Context', '下一轮继续基于错误状态'],
] as const

export function Slide24({ step }: SlideProps) {
  return <Slide number="24" eyebrow="LIMITS · FEEDBACK RISK" title="Agent 会犯错，而且错误也会进入 Loop" className="slide-24">
    <div className="risk-stage">
      <section className="chat-error-path">
        <header>CHAT <span>错误停在屏幕上</span></header>
        <div><AlertTriangle /><p><b>错误回答</b><small>用户先看到结果</small></p></div>
        <i>↓</i>
        <div className="human-check"><ShieldCheck /><p><b>Human Check</b><small>尚未改变环境</small></p></div>
      </section>

      <section className={`agent-error-path ${step >= 1 ? 'danger' : ''}`}>
        <header><span>AGENT FEEDBACK LOOP</span><b>{step >= 4 ? 'ERROR RE-ENTERS LOOP' : 'ACTION CAN CHANGE REALITY'}</b></header>
        <div className="danger-loop"><AgentLoop active={Math.min(step, 4)} /></div>
        <div className="error-chain">
          {errorChain.map(([Icon, label, detail], index) => <article key={label} className={step > index ? 'visible' : ''}>
            <Icon /><div><b>{label}</b><small>{detail}</small></div><span>0{index + 1}</span>
          </article>)}
        </div>
        <div className={`loop-warning ${step >= 4 ? 'visible' : ''}`}><AlertTriangle /><span>Observation 不保证正确</span><b>错误也能驱动下一轮</b></div>
      </section>
    </div>

    <div className={`risk-gates ${step >= 5 ? 'visible' : ''}`}>
      <span><LockKeyhole /><b>Permission</b>限制能做什么</span>
      <i>+</i>
      <span><CheckCircle2 /><b>Verification</b>检查做得对不对</span>
      <strong>能力越强，边界与验证越重要</strong>
    </div>
  </Slide>
}
