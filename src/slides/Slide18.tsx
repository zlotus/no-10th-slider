import { Boxes, FileCode2, FileText, Folder, Library, MessageSquareMore } from 'lucide-react'
import { CapabilityRail } from '../components/CapabilityRail'
import { ToolResultCard, ToolUseCard } from '../components/Packets'
import { Slide } from '../components/Slide'
import type { SlideProps } from '../presentation/types'

const skillFiles = [
  [FileText, 'SKILL.md', '方法与触发条件'],
  [Folder, 'references/', '按需参考资料'],
  [Folder, 'templates/', '可复用模板'],
  [FileCode2, 'scripts/', '确定性工具'],
  [Boxes, 'agents/', '可选执行角色'],
] as const

export function Slide18({ step }: SlideProps) {
  return <Slide number="18" eyebrow="SYSTEM EXTENSION · SKILLS" title="Skills：把经验封装成能力" className="slide-18">
    <div className="skills-stage">
      <section className="without-skill">
        <header><MessageSquareMore />没有 Skill</header>
        <div><span>SESSION 01</span><p>请按这套方法整理项目状态……</p></div>
        <div><span>SESSION 02</span><p>再解释一遍文件、决策和下一步……</p></div>
        <div><span>SESSION 03</span><p>重新说明完整工作方法……</p></div>
        <footer>方法留在聊天历史里</footer>
      </section>

      <section className={`skill-package ${step >= 2 ? 'expanded' : ''}`}>
        <header><Library /><div><span>SKILL PACKAGE</span><strong>project-continuity/</strong></div><b>可版本化资产</b></header>
        <div className="skill-tree">{skillFiles.map(([Icon, name, detail], index) => <article key={name} className={step >= 2 ? 'visible' : ''} style={{ transitionDelay: `${index * 35}ms` }}><Icon /><b>{name}</b><small>{detail}</small></article>)}</div>
        <div className={`skill-catalog ${step >= 1 ? 'visible' : ''}`}><span>启动时只加入目录</span><code>project-continuity — Maintain project state…</code></div>
      </section>

      <section className="skill-loading">
        <header><Boxes />需要时再加载</header>
        <div className={step >= 3 ? 'visible' : ''}><ToolUseCard compact name="load_skill" inputKey="name" inputValue="project-continuity" showStopReason={false} /></div>
        <i className={step >= 3 ? 'active' : ''}>↓</i>
        <div className={step >= 3 ? 'visible' : ''}><ToolResultCard compact content="SKILL.md + relevant references" toolUseId="toolu_skill_01" /></div>
        <footer className={step >= 4 ? 'visible' : ''}>完整方法进入当前 Context</footer>
      </section>
    </div>
    <div className={`skill-takeaway ${step >= 4 ? 'visible' : ''}`}><span>反复解释的方法论</span><i>→</i><strong>可发现、可加载、可复用的 个人/团队 独特项目资产</strong></div>
    <CapabilityRail active={1} />
  </Slide>
}
