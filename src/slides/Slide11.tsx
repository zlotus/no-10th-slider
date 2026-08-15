import { motion } from 'motion/react'
import { ArrowUp, Braces, FolderGit2, Paperclip } from 'lucide-react'
import { Slide } from '../components/Slide'
import { StoryRail } from '../components/StoryRail'
import type { SlideProps } from '../presentation/types'

export function Slide11({ step }: SlideProps) {
  return <Slide number="11" eyebrow="CODING AGENT · CASE STUDY" title="任务：给现有项目增加登录功能" className="slide-11">
    <div className="task-scene">
      <div className="task-project">
        <FolderGit2 />
        <div><span>WORKSPACE</span><strong>acme-dashboard</strong></div>
        <small><i /> main</small>
      </div>
      <motion.div className="agent-input" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <header><Braces /><span>告诉 Agent 你想完成什么</span><b>AGENT MODE</b></header>
        <div className="agent-input-body">
          <motion.p animate={{ opacity: step >= 1 ? 1 : .28 }}>
            给这个项目增加用户登录功能。<br />
            <span>使用现有技术栈，并添加必要测试。</span>
          </motion.p>
          <footer><Paperclip /><span>AGENTS.md</span><button aria-label="发送任务"><ArrowUp /></button></footer>
        </div>
      </motion.div>
      <motion.div className="task-accepted" initial={{ opacity: 0 }} animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 8 }}>
        <i />目标进入 Context <span>接下来，Agent 先了解这个项目</span>
      </motion.div>
    </div>
    <StoryRail active={0} completed={step >= 1 ? 1 : 0} />
  </Slide>
}
