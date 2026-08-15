import { motion } from 'motion/react'
import { FilePenLine, FileText, GitBranch, Globe2, TerminalSquare } from 'lucide-react'
import { HarnessNode, ModelNode, ToolNode } from '../components/Nodes'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const tools = [
  [FileText, 'Read', 'read_file(path)'], [FilePenLine, 'Edit', 'edit_file(path, ...)'],
  [TerminalSquare, 'Bash', 'bash(command)'], [GitBranch, 'Git', 'git_status()'], [Globe2, 'Web', 'web_search(query)'],
] as const

export function Slide06({ step }: SlideProps) {
  return <Slide number="06" eyebrow="TOOLS" title="Tools：给模型一双“手”" className="slide-06">
    <div className="tools-stage">
      <ModelNode className="tools-model" />
      <div className={`tool-interface ${step >= 1 ? 'connected' : ''}`}><span>结构化 Tool Interface</span><i /></div>
      <HarnessNode className="tools-harness"><div className="tool-grid">{tools.map(([Icon, label, signature], index) => {
        const threshold = index < 2 ? 1 : index < 4 ? 2 : 3
        return (
  <motion.div
    key={label}
    initial={{ opacity: .18, y: 10 }}
    animate={{
      opacity: step >= threshold ? 1 : .18,
      y: step >= threshold ? 0 : 10
    }}
  >
    <ToolNode icon={Icon} label={label} caption={signature} />
  </motion.div>
)
      })}</div></HarnessNode>
    </div>
    <motion.div
  className="tools-takeaway"
  initial={{ opacity: 0 }}
  animate={{ opacity: step >= 3 ? 1 : 0 }}
>
  Tool 是 Model 可以<strong>请求调用</strong>的结构化能力。
</motion.div>
  </Slide>
}
