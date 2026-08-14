import { motion } from 'motion/react'
import { CheckCircle2, Eye, FileEdit, MessageCircleWarning, RefreshCw, XCircle } from 'lucide-react'
import { ModelNode } from '../components/Nodes'
import { ToolResultCard } from '../components/Packets'
import { Slide } from '../components/Slide'
import { StoryRail } from '../components/StoryRail'
import { Terminal } from '../components/Terminal'
import type { SlideProps } from '../presentation/types'

const labels = [
  'Harness 执行 npm test',
  '测试返回失败状态',
  '包装为 tool_result',
  'Model 分析新的 Observation',
  '读取出错位置',
  '修改过期时间判断',
  'Harness 再次执行测试',
  '全部 42 项测试通过',
  '错误成为下一轮输入',
]

export function Slide15({ step }: SlideProps) {
  const passed = step >= 7
  return <Slide number="15" eyebrow="FEEDBACK LOOP · HERO" title="测试失败，其实只是新的 Observation" className="slide-15">
    <div className={`feedback-stage ${passed ? 'resolved' : ''}`}>
      <svg className="feedback-path" viewBox="0 0 1570 610" aria-hidden="true">
        <path className={step >= 1 ? 'active request' : ''} d="M350 110 C480 110 500 126 600 126" />
        <path className={step >= 2 ? 'active result' : ''} d="M845 126 C960 126 980 126 1080 126" />
        <path className={step >= 4 ? 'active request' : ''} d="M1260 190 C1260 285 1210 318 1080 342" />
        <path className={step >= 6 ? 'active request' : ''} d="M1030 430 C820 520 480 520 300 402" />
        <path className={step >= 7 ? 'active result' : ''} d="M245 335 C118 260 140 174 260 155" />
      </svg>

      <section className="feedback-terminal">
        <span>01 · ACT</span>
        <Terminal failed={step >= 1 && !passed} passed={passed} />
      </section>

      <div className={`feedback-result ${step >= 2 ? 'visible' : ''}`}>
        <span>02 · OBSERVE</span>
        <ToolResultCard compact content={passed ? '42 tests passed' : '2 tests failed · 40 passed'} toolUseId={passed ? 'toolu_22' : 'toolu_21'} />
      </div>

      <section className={`feedback-model ${step >= 3 ? 'focus' : ''}`}>
        <span>03 · REASON</span>
        <ModelNode />
        <div className={`model-analysis ${step >= 3 ? 'visible' : ''}`}>
          <MessageCircleWarning />
          <p><b>Observation</b>过期 session 仍被判定有效<small>检查 expiresAt 的边界条件</small></p>
        </div>
      </section>

      <section className="feedback-fix">
        <span>04 · ACT AGAIN</span>
        <motion.article animate={{ opacity: step >= 4 ? 1 : .12, y: step >= 4 ? 0 : 12 }}><Eye /><div><b>read_file</b><code>src/auth.ts</code></div><small>读取</small></motion.article>
        <motion.article animate={{ opacity: step >= 5 ? 1 : .12, y: step >= 5 ? 0 : 12 }}><FileEdit /><div><b>edit_file</b><code>expiresAt &gt; Date.now()</code></div><small>修改</small></motion.article>
        <motion.div className="retest-chip" animate={{ opacity: step >= 6 ? 1 : .12 }}><RefreshCw /><b>bash</b><code>npm test</code></motion.div>
      </section>

      <div className={`feedback-contrast ${step >= 8 ? 'visible' : ''}`}>
        <div><XCircle /><span>Chat</span><b>错误 → 一次回答结束</b></div>
        <i>VS</i>
        <div><CheckCircle2 /><span>Agent</span><b>错误 → 下一轮输入</b></div>
        <strong>Feedback Loop</strong>
      </div>
    </div>
    <footer className="feedback-ribbon"><span>{String(step + 1).padStart(2, '0')}</span><div><small>当前因果步骤</small><strong>{labels[step]}</strong></div><ol>{labels.map((_, index) => <li key={index} className={index <= step ? 'done' : ''} />)}</ol></footer>
    <StoryRail active={4} completed={passed ? 5 : 4} />
  </Slide>
}
