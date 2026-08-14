import { Archive, Boxes, Cable, CircleUserRound, Network, ScrollText, ShieldCheck } from 'lucide-react'
import { AgentLoop } from '../components/AgentLoop'
import { ContextNode, EnvironmentNode, HarnessNode, ModelNode, PermissionNode, ToolNode } from '../components/Nodes'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const capabilities = [
  [ScrollText, 'Instructions', '项目规则', 'context', 4, 'left-one'],
  [Boxes, 'Skills', '按需方法', 'loop', 4, 'left-two'],
  [Archive, 'Context Management', 'Compact · Handoff', 'result', 6, 'left-three'],
  [ShieldCheck, 'Hooks', '生命周期强制', 'permission', 5, 'right-one'],
  [Cable, 'MCP', '外部 Tool 接入', 'tool', 5, 'right-two'],
  [Network, 'Subagents', '隔离与委派', 'loop', 6, 'right-three'],
] as const

const roles = [
  ['Model', '智能'], ['Tools', '行动'], ['Context', '状态'], ['Harness', '执行'], ['Loop', '持续'],
] as const

export function Slide27({ step }: SlideProps) {
  return <Slide number="27" eyebrow="FINAL SYSTEM · HERO" title={'“AI 自己干了半小时”，底下究竟发生了什么？'} className="slide-27">
    <div className="final-system-stage">
      <div className="final-user-goal"><CircleUserRound /><span>HUMAN GOAL</span><b>帮我实现登录功能</b><i>↓</i></div>

      <section className={`final-agent-system ${step >= 1 ? 'framed' : ''} ${step >= 7 ? 'complete' : ''}`}>
        <header><span>AGENT SYSTEM</span><small>围绕 Model 运行的工程系统</small><b>{step >= 7 ? 'RUNNING' : 'ASSEMBLING'}</b></header>
        <div className="final-model"><ModelNode /></div>
        <div className={`final-harness ${step >= 1 ? 'visible' : ''}`}>
          <HarnessNode>
            <div className="final-harness-content">
              <div className={`final-context ${step >= 2 ? 'visible' : ''}`}><ContextNode /></div>
              <div className={`final-loop ${step >= 3 ? 'visible' : ''}`}><AgentLoop compact active={step >= 3 ? 4 : 0} /><span>tool_use → tool_result → 下一轮</span></div>
              <div className="final-action-nodes">
                <div className={step >= 2 ? 'visible' : ''}><ToolNode /></div>
                <div className={step >= 2 ? 'visible' : ''}><PermissionNode /></div>
              </div>
            </div>
          </HarnessNode>
        </div>
        <div className={`final-environment ${step >= 7 ? 'visible' : ''}`}><EnvironmentNode kind="Files" /><EnvironmentNode kind="Shell" /><EnvironmentNode kind="Web" /></div>
      </section>

      <div className="final-capabilities">
        {capabilities.map(([Icon, label, detail, tone, threshold, position]) => <article key={label} className={`final-capability tone-${tone} ${position} ${step >= threshold ? 'visible' : ''}`}>
          <Icon /><div><b>{label}</b><small>{detail}</small></div><i />
        </article>)}
      </div>
    </div>

    <div className={`final-role-strip ${step >= 8 ? 'visible' : ''}`}>{roles.map(([name, role]) => <span key={name}><b>{name}</b><i>提供</i><strong>{role}</strong></span>)}</div>
    <div className={`final-thesis ${step >= 9 ? 'visible' : ''}`}><span>Agent 不是一个更大的 Prompt</span><strong>而是一个围绕 Model 运行的系统</strong></div>
  </Slide>
}
