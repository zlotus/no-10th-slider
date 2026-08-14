import { Cable, Database, GitPullRequest, Globe2, Server, TicketCheck } from 'lucide-react'
import { CapabilityRail } from '../components/CapabilityRail'
import { HarnessNode, ModelNode, ToolNode } from '../components/Nodes'
import { ToolResultCard, ToolUseCard } from '../components/Packets'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const systems = [
  [GitPullRequest, 'GitHub', 'Issues · PRs'],
  [Database, 'Database', 'Query · Schema'],
  [Globe2, 'Browser', 'Navigate · Inspect'],
  [TicketCheck, 'Jira', 'Tasks · Status'],
  [Server, 'Internal API', 'Company systems'],
] as const

export function Slide20({ step }: SlideProps) {
  return <Slide number="20" eyebrow="SYSTEM EXTENSION · MCP" title="MCP：给 Agent 接上外部世界" className="slide-20">
    <div className="mcp-stage">
      <section className="mcp-agent">
        <HarnessNode>
          <div className="mcp-agent-core"><ModelNode /><ToolNode label="Tool Pool" caption="Built-in + MCP Tools" /></div>
        </HarnessNode>
        <small>Agent Loop 保持不变</small>
      </section>

      <section className={`mcp-gateway ${step >= 1 ? 'connected' : ''}`}>
        <header><Cable /><span>MCP CLIENT</span></header>
        <div><b>tools/list</b><small>发现外部能力</small></div>
        <div><b>tools/call</b><small>标准化调用入口</small></div>
        <footer>Harness 负责连接与权限</footer>
      </section>

      <section className="mcp-systems">
        <header>EXTERNAL SYSTEMS <span>MCP Servers</span></header>
        <div>{systems.map(([Icon, name, detail], index) => {
          const threshold = index < 2 ? 1 : index < 4 ? 2 : 3
          return <article key={name} className={step >= threshold ? 'visible' : ''}><Icon /><span><b>{name}</b><small>{detail}</small></span><i>mcp</i></article>
        })}</div>
      </section>

      <svg className="mcp-links" viewBox="0 0 1530 510" aria-hidden="true">
        <path className={step >= 1 ? 'active' : ''} d="M490 230 H650" />
        <path className={step >= 1 ? 'active' : ''} d="M880 230 H1010" />
      </svg>
    </div>

    <div className={`mcp-loop-strip ${step >= 4 ? 'visible' : ''}`}>
      <ToolUseCard compact name="mcp__github__search_issues" inputKey="query" inputValue="login bug" showStopReason={false} />
      <i>→</i><span><Cable /><b>MCP Server</b><small>调用 GitHub API</small></span><i>→</i>
      <ToolResultCard compact content="3 matching issues" toolUseId="toolu_mcp_01" />
      <strong>仍然是同一个 Tool Call</strong>
    </div>
    <CapabilityRail active={3} />
  </Slide>
}
