import { motion } from 'motion/react'
import { AgentLoop } from '../components/AgentLoop'
import { CodeBlock, type CodeLine } from '../components/CodeBlock'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const code: CodeLine[] = [
  { code: 'while (true) {' },
  { code: '  const response = await llm(messages, tools)', note: '调用 Model' },
  { code: '  messages.push(response)', note: '保存 assistant turn' },
  { code: '  if (response.stop_reason !== "tool_use") break', note: '没有 Tool Use → 结束' },
  { code: '  const results = await harness.execute(response)', note: 'Harness 执行 Tool' },
  { code: '  messages.push({ role: "user", content: results })', note: '写回 tool_result' },
  { code: '}' },
]

const activeLines = [1, 3, 4, 5, 1]
const notes = ['调用 Model，读取当前 messages 与 tools', '检查是否出现 tool_use', 'Harness 执行真实 Tool', 'tool_result 写回 messages', '回到下一轮 Model 调用']

export function Slide08({ step }: SlideProps) {
  return <Slide number="08" eyebrow="AGENT LOOP · RUNTIME" title="真正让 Agent 跑起来的，是一个 Loop" className="slide-08">
    <div className="loop-mechanism">
      <div className="loop-code"><CodeBlock lines={code} activeLine={activeLines[step]} /><motion.div key={step} className="code-explanation" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><span>{String(step + 1).padStart(2, '0')}</span>{notes[step]}</motion.div></div>
      <div className="loop-visual"><AgentLoop active={step} /><div className="loop-protocol"><span>Claude-style signal</span><code>stop_reason: "tool_use"</code></div></div>
    </div>
    <div className="loop-outcomes"><div className={step === 1 ? 'focus' : ''}><i />没有新的 Tool Use <span>→</span><strong>Loop 结束</strong></div><div className={step >= 2 ? 'focus' : ''}><i />还有 Tool Use <span>→</span><strong>继续干活</strong></div></div>
  </Slide>
}
