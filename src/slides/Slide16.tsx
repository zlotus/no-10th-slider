import { motion } from 'motion/react'
import { Code2, FlaskConical, GitCommitHorizontal, ListChecks, Search, Wrench } from 'lucide-react'
import { AgentLoop } from '../components/AgentLoop'
import { Slide } from '../components/Slide'
import { StoryRail } from '../components/StoryRail'
import type { SlideProps } from '../presentation/types'

const workflow = [
  { name: 'Explore', detail: '理解现有项目', icon: Search },
  { name: 'Plan', detail: '降低不确定性', icon: ListChecks },
  { name: 'Code', detail: '改变真实环境', icon: Code2 },
  { name: 'Test ↺ Fix', detail: '把错误变成输入', icon: FlaskConical },
  { name: 'Commit', detail: '形成可审查结果', icon: GitCommitHorizontal },
]

export function Slide16({ step }: SlideProps) {
  return <Slide number="16" eyebrow="CASE STUDY · SYSTEM VIEW" title="Explore → Plan → Code → Test → Commit" className="slide-16">
    <div className="workflow-summary">
      <header><span>上层过程</span><b>WORKFLOW</b><small>我们看到的任务阶段</small></header>
      <div className="workflow-row">
        {workflow.map(({ name, detail, icon: Icon }, index) => <motion.article key={name} className={`${index <= step ? 'visible' : ''} ${index === 3 ? 'feedback' : ''}`} initial={{ opacity: 0 }} animate={{ opacity: index <= step ? 1 : .13, y: index <= step ? 0 : 14 }}>
          <i><Icon /></i><span>{String(index + 1).padStart(2, '0')}</span><b>{name}</b><small>{detail}</small>{index < workflow.length - 1 && <em>→</em>}
        </motion.article>)}
      </div>
    </div>
    <motion.div className="engine-divider" initial={{ opacity: 0 }} animate={{ opacity: step >= 0 ? 1 : .25 }}><i /><span><Wrench />同一台发动机，驱动每一个阶段</span><i /></motion.div>
    <div className={`workflow-engine ${step >= 0 ? 'revealed' : ''}`}>
      <AgentLoop compact active={step >= 4 ? 4 : Math.min(step, 4)} />
      <div className="engine-copy">
        <span>底层机制</span>
        <h2>Reason <i>→</i> Tool Use <i>→</i> Tool Result <i>→</i> Reason…</h2>
        <p><b>Workflow</b> 决定现在处于哪一段；<strong>Agent Loop</strong> 让每一段持续向前。</p>
      </div>
    </div>
    <StoryRail active={5} completed={step >= 4 ? 6 : 5} />
  </Slide>
}
