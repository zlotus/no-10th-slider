import { motion } from 'motion/react'
import { BrainCircuit, Eye, RefreshCw, Wrench } from 'lucide-react'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const firstRound = [
  ['Reason', '需要先看登录逻辑', '需要看 auth.ts'],
  ['Act', '请求读取文件', 'read_file("auth.ts")'],
  ['Observe', '获得文件内容', '发现 session 校验缺失'],
] as const
const secondRound = [
  ['Reason', '需要验证当前行为', '应该运行测试'],
  ['Act', '请求执行命令', 'bash("npm test")'],
  ['Observe', '获得测试结果', '2 tests failed'],
] as const
const icons = [BrainCircuit, Wrench, Eye]

export function Slide09({ step }: SlideProps) {
  const round = step >= 3 ? secondRound : firstRound
  return <Slide number="09" eyebrow="AGENT LOOP · MENTAL MODEL" title="Agent Loop：Reason → Act → Observe → Repeat" className="slide-09">
    <div className="mental-loop">
      <svg viewBox="0 0 760 620" aria-hidden="true"><path d="M380 74 C580 74 666 210 638 340 C610 484 474 554 344 530 C188 502 104 378 126 246 C146 136 244 76 380 74" /></svg>
      {round.map(([label, caption, example], index) => {
        const Icon = icons[index]
        const visible = step >= index || step >= 3
        return <motion.article key={`${label}-${round === secondRound ? 2 : 1}`} className={`mental-node mental-${label.toLowerCase()} ${visible ? 'visible' : ''}`} initial={{ opacity: visible ? 1 : .16, scale: visible ? 1 : .97 }} animate={{ opacity: visible ? 1 : .16, scale: visible ? 1 : .97 }}>
          <Icon /><span><b>{label}</b><small>{caption}</small></span><code>{example}</code>
        </motion.article>
      })}
      <div className={`repeat-node ${step >= 3 ? 'visible' : ''}`}><RefreshCw /><span>下一轮</span></div>
      <div className="round-indicator"><span>ROUND</span><b>{step >= 3 ? '02' : '01'}</b></div>
    </div>
    <motion.div className="autonomy-takeaway" initial={{ opacity: 0 }} animate={{ opacity: step >= 4 ? 1 : 0 }}>Agent 的“自主性”，<strong>很大程度来自持续的反馈循环。</strong></motion.div>
  </Slide>
}
