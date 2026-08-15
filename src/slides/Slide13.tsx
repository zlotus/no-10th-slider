import { motion } from 'motion/react'
import { Braces, FileCode2, FileJson2, GitBranch, ListChecks, Route, ShieldCheck } from 'lucide-react'
import { Slide } from '../components/Slide'
import { StoryRail } from '../components/StoryRail'
import type { SlideProps } from '../presentation/types'

const findings = [
  { icon: FileJson2, text: 'React + TypeScript + Vitest' },
  { icon: FileCode2, text: '已有 auth.ts 与测试入口' },
  { icon: Route, text: 'App.tsx 负责页面路由' },
  { icon: Braces, text: 'Session 校验尚未完整' },
]

const plan = [
  ['01', 'User 数据模型'], ['02', '/api/login'], ['03', 'Session / Token'],
  ['04', 'Login 页面'], ['05', 'Route Guard'], ['06', 'Tests'],
]

export function Slide13({ step }: SlideProps) {
  return <Slide number="13" eyebrow="CASE STUDY · PLAN" title="Plan：把目标变成可执行步骤" className="slide-13">
    <div className="plan-layout">
      <section className="finding-cloud">
        <header>EXPLORE OUTPUT <span>已知事实</span></header>
        {findings.map(({ icon: Icon, text }, index) => <motion.div key={text} animate={{ x: step >= 1 ? 18 : index % 2 ? 20 : -12, y: step >= 1 ? 0 : index * 3 }}><Icon />{text}</motion.div>)}
      </section>
      <div className="plan-funnel">
        <GitBranch />
        <span>降低不确定性</span>
        <i className={step >= 1 ? 'active' : ''} />
        <i className={step >= 2 ? 'active' : ''} />
        <i className={step >= 3 ? 'active' : ''} />
      </div>
      <section className="structured-plan">
        <header><ListChecks /><div><span>IMPLEMENTATION PLAN</span><strong>登录功能</strong></div><small>{Math.min(step * 2, 6)} / 6</small></header>
        <div>{plan.map(([number, label], index) => <motion.article key={number} initial={{ opacity: 0, y: 10 }} animate={{ opacity: index < step * 2 ? 1 : .1, x: index < step * 2 ? 0 : 16 }}>
          <span>{number}</span><b>{label}</b>{index === 2 && <ShieldCheck />}
        </motion.article>)}</div>
      </section>
    </div>
    <motion.p className="plan-principle" initial={{ opacity: 0 }} animate={{ opacity: step >= 3 ? 1 : .28 }}><b>先降低不确定性</b><i>→</i><b>再制定计划</b><i>→</i><strong>最后执行</strong></motion.p>
    <StoryRail active={2} completed={step >= 3 ? 3 : 2} />
  </Slide>
}
