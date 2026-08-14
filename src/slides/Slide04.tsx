import { AnimatePresence, motion } from 'motion/react'
import { Braces, Check, CornerUpRight, Target, Wrench, X } from 'lucide-react'
import { ModelNode } from '../components/Nodes'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const inputs = [[Target, 'Goal', '用户目标'], [Braces, 'Context', '当前状态'], [Wrench, 'Available Tools', '可用能力']] as const

export function Slide04({ step }: SlideProps) {
  return <Slide number="04" eyebrow="MODEL" title="Model：Agent 的“大脑”" className="slide-04">
    <div className="decision-stage">
      <div className="model-inputs">{inputs.map(([Icon, label, caption]) => <div key={label}><Icon /><span><b>{label}</b><small>{caption}</small></span></div>)}</div>
      <div className="decision-arrow">读取当前输入 <span>→</span></div>
      <div className="decision-model"><ModelNode /><div><span>理解</span><i /> <span>推理</span><i /> <span>决定下一步</span></div></div>
      <AnimatePresence>{step >= 1 && <motion.div className="model-outputs" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 18 }}>
        <div><Check /><span><b>回答用户</b><small>输出 Text</small></span></div><em>OR</em><div><CornerUpRight /><span><b>请求 Tool</b><small>输出 tool_use</small></span></div>
      </motion.div>}</AnimatePresence>
    </div>
    <AnimatePresence>{step >= 2 && <motion.div className="decision-contrast" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 14 }}><div><span>Model 判断</span><code>“应该运行 npm test”</code></div><b>≠</b><div className="real-execution"><span><X /> 尚未发生</span><code>电脑真的运行 npm test</code></div></motion.div>}</AnimatePresence>
    <motion.div className="model-takeaway" animate={{ opacity: step >= 3 ? 1 : 0 }}>Model 负责<strong>“决定”</strong>，不负责<strong>“执行”</strong>。</motion.div>
  </Slide>
}
