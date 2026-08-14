import { CornerDownLeft, CornerUpRight } from 'lucide-react'

export function ToolUseCard({
  compact = false,
  name = 'bash',
  inputKey = 'command',
  inputValue = 'npm test',
  showStopReason = true,
}: {
  compact?: boolean
  name?: string
  inputKey?: string
  inputValue?: string
  showStopReason?: boolean
}) {
  return <article className={`packet tool-use-card ${compact ? 'compact' : ''}`}>
    <header><CornerUpRight />结构化请求 <b>tool_use</b></header>
    <pre><span>type:</span> <em>"tool_use"</em>{'\n'}<span>name:</span> <em>"{name}"</em>{'\n'}<span>input:</span>{'\n'}  {inputKey}: <em>"{inputValue}"</em></pre>
    {showStopReason && <footer>stop_reason: <b>"tool_use"</b></footer>}
  </article>
}

export function ToolResultCard({
  compact = false,
  content = '2 tests failed',
  toolUseId = 'toolu_01',
}: {
  compact?: boolean
  content?: string
  toolUseId?: string
}) {
  return <article className={`packet tool-result-card ${compact ? 'compact' : ''}`}>
    <header><CornerDownLeft />执行结果 <b>tool_result</b></header>
    <pre><span>type:</span> <em>"tool_result"</em>{'\n'}<span>tool_use_id:</span> <em>"{toolUseId}"</em>{'\n'}<span>content:</span>{'\n'}  <em>"{content}"</em></pre>
  </article>
}
