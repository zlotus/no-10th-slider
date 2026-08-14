import { AnimatePresence, motion } from 'motion/react'
import { ContextNode, HarnessNode, LoopNode, ModelNode, PermissionNode, ToolNode } from '../components/Nodes'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

export function Slide03({ step }: SlideProps) {
  return <Slide number="03" eyebrow="CORE ARCHITECTURE" title="Agent ≈ Model + Harness" className="slide-03">
    <div className={`agent-architecture ${step >= 3 ? 'complete' : ''}`}>
      <AnimatePresence>{step >= 3 && <motion.div className="agent-frame" initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .98 }}><span>AGENT SYSTEM</span></motion.div>}</AnimatePresence>
      <motion.div className="model-slot" layout><ModelNode /></motion.div>
      <AnimatePresence>{step >= 1 && <motion.div className="harness-slot" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}>
        <HarnessNode><div className="harness-modules">
          {[<ContextNode />, <ToolNode />, <LoopNode />, <PermissionNode />].map((node, i) => <motion.div key={i} animate={{ opacity: step >= 2 ? 1 : .15, y: step >= 2 ? 0 : 12 }}>{node}</motion.div>)}
        </div></HarnessNode>
      </motion.div>}</AnimatePresence>
    </div>
    <div className="architecture-caption"><p><b>Model</b> 决定做什么</p><i /><p><b>Harness</b> 让它真的发生</p></div>
  </Slide>
}
