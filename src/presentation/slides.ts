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
]
