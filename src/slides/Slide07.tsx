import { AnimatePresence, motion } from 'motion/react'
import { MessageSquareText } from 'lucide-react'
import { ContextNode, HarnessNode, ModelNode } from '../components/Nodes'
import { ToolResultCard, ToolUseCard } from '../components/Packets'
import { Slide } from '../components/Slide'
import { Terminal } from '../components/Terminal'
import type { SlideProps } from '../presentation/types'

const labels = ['用户提出问题', 'Model 请求 Tool', 'Harness 接收请求', 'Runtime 执行 Bash', '获得真实结果', '包装 Tool Result', '写回 Context', '再次调用 Model']

export function Slide07({ step }: SlideProps) {
  return <Slide number="07" eyebrow="TOOL CALL · HERO" title="一次 Tool Call 到底发生了什么？" className="slide-07">
    <div className="toolcall-stage">
      <div className="user-prompt"><MessageSquareText /><span>用户</span><strong>“测试为什么失败？”</strong></div>
      <div className={`toolcall-model ${step === 1 || step === 7 ? 'focus' : ''}`}><ModelNode /></div>
      <div className={`toolcall-harness ${step >= 2 && step <= 6 ? 'focus' : ''}`}><HarnessNode><Terminal failed={step >= 4} /></HarnessNode></div>
      <div className={`toolcall-context ${step >= 6 ? 'focus' : ''}`}><ContextNode />{step >= 6 && <small>messages.push(tool_result)</small>}</div>
      <svg className="toolcall-path" viewBox="0 0 1520 620" aria-hidden="true">
        <path className={step >= 1 ? 'shown' : ''} d="M260 116 C360 116 350 180 448 180" />
        <path className={step >= 2 ? 'shown request' : ''} d="M660 190 C790 190 810 270 930 270" />
        <path className={step >= 6 ? 'shown result' : ''} d="M930 460 C810 560 660 560 520 492" />
        <path className={step >= 7 ? 'shown result' : ''} d="M430 430 C340 360 360 280 470 250" />
      </svg>
      <AnimatePresence>{step >= 1 && step < 6 && <motion.div className={`moving-packet request-position step-${step}`} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} layout><ToolUseCard compact /></motion.div>}</AnimatePresence>
      <AnimatePresence>{step >= 5 && <motion.div className={`moving-packet result-position step-${step}`} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} layout><ToolResultCard compact /></motion.div>}</AnimatePresence>
      <div className="execution-boundary"><span>LLM 边界</span><b>Model 只产生结构化请求</b></div>
      <div className="runtime-boundary"><span>真实环境</span><b>Harness 才执行 npm test</b></div>
    </div>
    <footer className="step-ribbon"><span>{String(step + 1).padStart(2, '0')}</span><div><small>当前步骤</small><strong>{labels[step]}</strong></div><ol>{labels.map((_, i) => <li key={i} className={i <= step ? 'done' : ''} />)}</ol></footer>
  </Slide>
}
