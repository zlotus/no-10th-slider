import { AnimatePresence, motion } from 'motion/react'
import { AlertTriangle, Eye, FileEdit, FilePlus2, Shield, TerminalSquare } from 'lucide-react'
import { Slide } from '../components/Slide'
import { StoryRail } from '../components/StoryRail'
import type { SlideProps } from '../presentation/types'

const actions = [
  { label: 'READ', file: 'src/auth.ts', icon: Eye, detail: '理解现有 session 校验', tone: 'read' },
  { label: 'EDIT', file: 'src/auth.ts', icon: FileEdit, detail: '加入登录与过期检查', tone: 'edit' },
  { label: 'WRITE', file: 'tests/auth.test.ts', icon: FilePlus2, detail: '补充成功与失败用例', tone: 'write' },
]

export function Slide14({ step }: SlideProps) {
  return <Slide number="14" eyebrow="CASE STUDY · CODE" title="Code：Agent 开始改变真实环境" className="slide-14">
    <div className="code-story-layout">
      <section className="file-actions">
        <header><span>HARNESS · FILE TOOLS</span><small>Model 请求操作，Tool handler 改变工作区</small></header>
        <div className="action-stack">
          {actions.map(({ label, file, icon: Icon, detail, tone }, index) => <motion.article key={label} className={`${tone} ${step > index ? 'visible' : ''}`} animate={{ opacity: step > index ? 1 : .1, x: step > index ? 0 : 24 }}>
            <i><Icon /></i><div><span>{label}</span><strong>{file}</strong><small>{detail}</small></div><b>{index === 0 ? '只读' : '已执行'}</b>
          </motion.article>)}
        </div>
        <AnimatePresence>{step >= 2 && <motion.div className="code-diff" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>
          <header>src/auth.ts <span>+8 −2</span></header>
          <code><i>−</i> return decodeSession(token)</code>
          <code className="added"><i>+</i> const session = decodeSession(token)</code>
          <code className="added"><i>+</i> return session.expiresAt &gt; Date.now()</code>
        </motion.div>}</AnimatePresence>
      </section>
      <aside className="risk-meter">
        <header><Shield />操作风险</header>
        <div className="risk-scale"><i /><i /><i /><i /></div>
        <ol>
          <li className={step >= 1 ? 'active' : ''}><Eye /><span>Read</span><small>低风险</small></li>
          <li className={step >= 2 ? 'active' : ''}><FileEdit /><span>Edit</span><small>改变文件</small></li>
          <li><TerminalSquare /><span>Execute</span><small>运行程序</small></li>
          <li><AlertTriangle /><span>Destructive</span><small>高风险</small></li>
        </ol>
        <p>能力越接近真实环境，<br /><b>越需要 Permissions 与 Hooks。</b></p>
      </aside>
    </div>
    <StoryRail active={3} completed={step >= 3 ? 4 : 3} />
  </Slide>
}
