import { Slide01 } from '../slides/Slide01'
import { Slide02 } from '../slides/Slide02'
import { Slide03 } from '../slides/Slide03'
import { Slide04 } from '../slides/Slide04'
import { Slide05 } from '../slides/Slide05'
import { Slide06 } from '../slides/Slide06'
import { Slide07 } from '../slides/Slide07'
import { Slide08 } from '../slides/Slide08'
import { Slide09 } from '../slides/Slide09'
import { Slide10 } from '../slides/Slide10'
import { Slide11 } from '../slides/Slide11'
import { Slide12 } from '../slides/Slide12'
import { Slide13 } from '../slides/Slide13'
import { Slide14 } from '../slides/Slide14'
import { Slide15 } from '../slides/Slide15'
import { Slide16 } from '../slides/Slide16'
import { Slide17 } from '../slides/Slide17'
import { Slide18 } from '../slides/Slide18'
import { Slide19 } from '../slides/Slide19'
import { Slide20 } from '../slides/Slide20'
import { Slide21 } from '../slides/Slide21'
import { Slide22 } from '../slides/Slide22'
import { Slide23 } from '../slides/Slide23'
import { Slide24 } from '../slides/Slide24'
import { Slide25 } from '../slides/Slide25'
import { Slide26 } from '../slides/Slide26'
import { Slide27 } from '../slides/Slide27'
import { Slide28 } from '../slides/Slide28'
import type { SlideDefinition } from './types'

export const slides: SlideDefinition[] = [
  { number: 1, title: 'AI 从“回答问题”到“替你做事”', maxStep: 2, component: Slide01 },
  { number: 2, title: '普通 LLM 为什么不能直接替你干活？', maxStep: 4, component: Slide02 },
  { number: 3, title: 'Agent ≈ Model + Harness', maxStep: 3, component: Slide03 },
  { number: 4, title: 'Model：Agent 的“大脑”', maxStep: 3, component: Slide04 },
  { number: 5, title: 'Context：Agent 此刻知道的一切', maxStep: 6, component: Slide05 },
  { number: 6, title: 'Tools：给模型一双“手”', maxStep: 3, component: Slide06 },
  { number: 7, title: '一次 Tool Call 到底发生了什么？', maxStep: 7, component: Slide07 },
  { number: 8, title: '真正让 Agent 跑起来的，是一个 Loop', maxStep: 4, component: Slide08 },
  { number: 9, title: 'Agent Loop：Reason → Act → Observe → Repeat', maxStep: 4, component: Slide09 },
  { number: 10, title: '一个完整 Coding Agent', maxStep: 4, component: Slide10 },
  { number: 11, title: '任务：给现有项目增加登录功能', maxStep: 1, component: Slide11 },
  { number: 12, title: '第一件事：Explore', maxStep: 4, component: Slide12 },
  { number: 13, title: 'Plan：把目标变成可执行步骤', maxStep: 3, component: Slide13 },
  { number: 14, title: 'Code：Agent 开始改变真实环境', maxStep: 3, component: Slide14 },
  { number: 15, title: '测试失败，其实只是新的 Observation', maxStep: 8, component: Slide15 },
  { number: 16, title: 'Explore → Plan → Code → Test → Commit', maxStep: 4, component: Slide16 },
  { number: 17, title: 'Instructions：这个项目有什么规矩？', maxStep: 3, component: Slide17 },
  { number: 18, title: 'Skills：把经验封装成能力', maxStep: 4, component: Slide18 },
  { number: 19, title: '真实案例：project-continuity', maxStep: 5, component: Slide19 },
  { number: 20, title: 'MCP：给 Agent 接上外部世界', maxStep: 4, component: Slide20 },
  { number: 21, title: 'Hooks：有些事不能靠 Agent 自觉', maxStep: 4, component: Slide21 },
  { number: 22, title: 'Subagent：给子任务一张干净工作台', maxStep: 4, component: Slide22 },
  { number: 23, title: '从 Agent 到 Agent Team', maxStep: 4, component: Slide23 },
  { number: 24, title: 'Agent 会犯错，而且错误也会进入 Loop', maxStep: 5, component: Slide24 },
  { number: 25, title: 'Context Window：工作台放不下了', maxStep: 5, component: Slide25 },
  { number: 26, title: 'Compact，还是 New Session？', maxStep: 5, component: Slide26 },
  { number: 27, title: '“AI 自己干了半小时”，底下究竟发生了什么？', maxStep: 9, component: Slide27 },
  { number: 28, title: '人的角色也变了', maxStep: 3, component: Slide28 },
]
