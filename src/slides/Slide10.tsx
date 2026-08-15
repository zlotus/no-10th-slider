import { AnimatePresence, motion } from 'motion/react'
import { ContextNode, EnvironmentNode, HarnessNode, LoopNode, ModelNode, PermissionNode, ToolNode } from '../components/Nodes'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const future = ['Instructions', 'Skills', 'Hooks', 'MCP', 'Subagents']

export function Slide10({ step }: SlideProps) {
  return <Slide number="10" eyebrow="CORE SYSTEM · OVERVIEW" title="一个完整 Coding Agent" className="slide-10">
    <div className="system-map">
      <div className="system-agent">
        <div className="system-label">AGENT SYSTEM <small>围绕 Model 运行的工程系统</small></div>
        <ModelNode className="system-model" />
        <AnimatePresence>{step >= 1 && <motion.div className="system-harness" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}><HarnessNode><div className="system-grid"><ContextNode /><ToolNode /><LoopNode /><PermissionNode /></div></HarnessNode></motion.div>}</AnimatePresence>
        <div className={`system-links ${step >= 2 ? 'shown' : ''}`}><i /><i /><i /></div>
        <div className="environment-row">{step >= 2 && <><EnvironmentNode kind="Files" /><EnvironmentNode kind="Shell" /><EnvironmentNode kind="Web" /></>}</div>
      </div>
      <AnimatePresence>{step >= 3 && <motion.aside className="future-stack" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }}><header>稍后加入</header>{future.map((item, i) => <motion.div key={item} animate={{ opacity: 1 }} transition={{ delay: i * .06 }}>{item}<span>+</span></motion.div>)}<p>扩展 Agent 的能力与边界</p></motion.aside>}</AnimatePresence>
    </div>
    <motion.div className="system-equation" initial={{ opacity: 0, y: 10 }} animate={{ opacity: step >= 4 ? 1 : 0, y: step >= 4 ? 0 : 10 }}><b>Model</b><i>+</i><b>Context</b><i>+</i><b>Tools</b><i>+</i><b>Harness</b><i>+</i><b>Loop</b><span>=</span><strong>Agent System</strong></motion.div>
  </Slide>
}
