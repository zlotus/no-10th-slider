import { AnimatePresence, motion } from 'motion/react'
import { ContextPanel, type ContextItem } from '../components/ContextPanel'
import { ModelNode } from '../components/Nodes'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const contextItems: ContextItem[] = [
  { label: 'System Instructions', detail: '系统级行为与边界', kind: 'instruction' },
  { label: 'AGENTS.md / CLAUDE.md', detail: '当前项目的工作规则', kind: 'instruction' },
  { label: 'User Goal', detail: '修复登录 Bug', kind: 'goal' },
  { label: 'Source Code', detail: 'src/auth.ts', kind: 'code' },
  { label: 'Tool Results', detail: 'npm test → 2 failed', kind: 'result' },
  { label: 'Earlier Conversation', detail: '此前的判断与反馈', kind: 'conversation' },
]

export function Slide05({ step }: SlideProps) {
  const visible = Math.min(step, contextItems.length)
  return <Slide number="05" eyebrow="CONTEXT" title="Context：Agent 此刻知道的一切" className="slide-05">
    <div className="context-stage">
      <ContextPanel items={contextItems} visibleCount={visible} capacity={18 + visible * 9} />
      <div className="context-to-model"><span>每一轮都重新读取</span><i>→</i></div>
      <ModelNode />
    </div>
    <div className="context-takeaway">模型不是“永久记得项目”，<strong>而是这些信息仍在当前 Context 中。</strong></div>
    <AnimatePresence>{step >= 6 && <motion.div className="context-limit" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><i />Context 并不是无限的</motion.div>}</AnimatePresence>
  </Slide>
}
