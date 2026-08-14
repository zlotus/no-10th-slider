import { AnimatePresence, motion } from 'motion/react'
import { Database, FileCode2, GitBranch, Globe2, MessageSquareText, TerminalSquare } from 'lucide-react'
import { ModelNode } from '../components/Nodes'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const questions = ['它怎么读取文件？', '它怎么执行命令？', '它怎么知道执行结果？']
const environments = [
  [FileCode2, '文件系统', 'env-files'], [TerminalSquare, 'Shell', 'env-shell'], [Globe2, 'Internet', 'env-web'],
  [Database, 'Database', 'env-db'], [GitBranch, 'Git', 'env-git'],
] as const

export function Slide02({ step }: SlideProps) {
  return <Slide number="02" eyebrow="THE GAP" title="普通 LLM 为什么不能直接替你干活？" className="slide-02">
    <div className="isolated-llm">
      <div className="text-pipeline"><div><MessageSquareText />Prompt</div><i>→</i><ModelNode /><i>→</i><div><MessageSquareText />Text</div></div>
      {environments.map(([Icon, label, position]) => <div key={label} className={`isolated-environment ${position}`}><Icon /><span>{label}</span><i /></div>)}
      <div className="question-stack">{questions.map((question, index) => <AnimatePresence key={question}>{step >= index + 1 && <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}><span>0{index + 1}</span>{question}</motion.div>}</AnimatePresence>)}</div>
    </div>
    <AnimatePresence>{step >= 4 && <motion.div className="outside-answer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>答案不在 LLM 里面，<strong>而在 LLM 外面。</strong></motion.div>}</AnimatePresence>
  </Slide>
}
