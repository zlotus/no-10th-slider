import { CornerDownLeft, CornerUpRight } from 'lucide-react'

export function ToolUseCard({ compact = false }: { compact?: boolean }) {
  return <article className={`packet tool-use-card ${compact ? 'compact' : ''}`}>
    <header><CornerUpRight />结构化请求 <b>tool_use</b></header>
    <pre><span>type:</span> <em>"tool_use"</em>{'\n'}<span>name:</span> <em>"bash"</em>{'\n'}<span>input:</span>{'\n'}  command: <em>"npm test"</em></pre>
    <footer>stop_reason: <b>"tool_use"</b></footer>
  </article>
}

export function ToolResultCard({ compact = false }: { compact?: boolean }) {
  return <article className={`packet tool-result-card ${compact ? 'compact' : ''}`}>
    <header><CornerDownLeft />执行结果 <b>tool_result</b></header>
    <pre><span>type:</span> <em>"tool_result"</em>{'\n'}<span>tool_use_id:</span> <em>"toolu_01"</em>{'\n'}<span>content:</span>{'\n'}  <em>"2 tests failed"</em></pre>
  </article>
}
