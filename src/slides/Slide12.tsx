import { FileCode2, FileJson2, Folder, Search } from 'lucide-react'
import { AgentLoop } from '../components/AgentLoop'
import { ToolResultCard, ToolUseCard } from '../components/Packets'
import { Slide } from '../components/Slide'
import { StoryRail } from '../components/StoryRail'
import type { SlideProps } from '../presentation/types'

const calls = [
  { name: 'glob', key: 'pattern', input: '**/*', result: 'src/ · tests/ · package.json', id: 'toolu_11' },
  { name: 'read_file', key: 'path', input: 'package.json', result: 'React · TypeScript · Vitest', id: 'toolu_12' },
  { name: 'glob', key: 'pattern', input: '**/*auth*', result: 'src/auth.ts · tests/auth.test.ts', id: 'toolu_13' },
  { name: 'read_file', key: 'path', input: 'src/auth.ts', result: 'session 校验入口已存在', id: 'toolu_14' },
]

export function Slide12({ step }: SlideProps) {
  return <Slide number="12" eyebrow="CASE STUDY · EXPLORE" title="第一件事：Explore" className="slide-12">
    <div className="explore-layout">
      <section className="project-tree">
        <header><Folder />acme-dashboard <span>只读探索</span></header>
        <div className={step >= 1 ? 'seen' : ''}><Folder /> src</div>
        <div className={`indent ${step >= 4 ? 'focus' : ''}`}><FileCode2 /> auth.ts</div>
        <div className="indent"><FileCode2 /> App.tsx</div>
        <div className={step >= 1 ? 'seen' : ''}><Folder /> tests</div>
        <div className="indent"><FileCode2 /> auth.test.ts</div>
        <div className={step >= 2 ? 'focus' : ''}><FileJson2 /> package.json</div>
        <aside><Search />先建立项目地图，再决定改什么</aside>
      </section>
      <section className="explore-calls">
        <header><span>连续 Tool Call</span><small>Model 请求 · Harness 执行 · Result 回到 Context</small></header>
        <div className="explore-call-list">
          {calls.map((call, index) => <div key={call.id} className={`explore-call ${step > index ? 'visible' : ''}`}>
            <ToolUseCard compact name={call.name} inputKey={call.key} inputValue={call.input} showStopReason={false} />
            <i aria-hidden="true">→</i>
            <ToolResultCard compact content={call.result} toolUseId={call.id} />
          </div>)}
        </div>
      </section>
      <aside className="explore-loop">
        <AgentLoop compact active={step === 0 ? 0 : ((step - 1) % 4) + 1} />
        <div><span>AGENT LOOP</span><b>第 {step} 轮</b><small>每次 Result 都会成为下一轮输入</small></div>
      </aside>
    </div>
    <div className="explore-equation"><strong>“正在探索项目”</strong><span>=</span><b>很多轮 Tool Use / Tool Result</b></div>
    <StoryRail active={1} completed={step >= 4 ? 2 : 1} />
  </Slide>
}
