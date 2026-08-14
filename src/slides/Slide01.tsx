import { AnimatePresence, motion } from 'motion/react'
import { CheckCircle2, FileSearch, PencilLine, PlayCircle, SearchCode } from 'lucide-react'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const actions = [
  [FileSearch, '读取项目'], [SearchCode, '搜索代码'], [PencilLine, '修改文件'],
  [PlayCircle, '运行测试'], [CheckCircle2, '修复错误'], [CheckCircle2, '完成'],
] as const

export function Slide01({ step }: SlideProps) {
  return <Slide number="01" eyebrow="THE SHIFT" title={'AI 从“回答问题”到“替你做事”'} className="slide-01">
    <div className="comparison-grid">
      <article className="comparison-panel chat-panel">
        <header><span>CHAT</span><small>生成答案</small></header>
        <div className="message user-message"><b>你</b><p>帮我修一下登录 Bug</p></div>
        <div className="message ai-message"><b>AI</b><p>你可以先检查 <code>auth.ts</code> 中的 session 校验逻辑……</p></div>
        <div className="panel-end">停在建议</div>
      </article>
      <article className={`comparison-panel agent-panel ${step >= 1 ? 'visible' : ''}`}>
        <header><span>AGENT</span><small>执行任务</small></header>
        <AnimatePresence>{step >= 1 && <motion.div className="message user-message" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}><b>你</b><p>帮我修一下登录 Bug</p></motion.div>}</AnimatePresence>
        <div className="action-chain">
          {actions.map(([Icon, label], index) => <motion.div key={label} className="action-item" animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 14 }} transition={{ duration: .25, delay: step >= 2 ? index * .06 : 0 }}><Icon /><span>{label}</span>{index < actions.length - 1 && <i />}</motion.div>)}
        </div>
        <div className="panel-end success">交付结果</div>
      </article>
    </div>
    <div className="takeaway">从 <span>“告诉我怎么做”</span> 到 <strong>“替我完成它”</strong></div>
  </Slide>
}
