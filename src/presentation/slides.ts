import { Slide01 } from '../slides/Slide01'
import { Slide03 } from '../slides/Slide03'
import { Slide07 } from '../slides/Slide07'
import { Slide10 } from '../slides/Slide10'
import type { SlideDefinition } from './types'

export const slides: SlideDefinition[] = [
  { number: 1, title: 'AI 从“回答问题”到“替你做事”', maxStep: 2, component: Slide01 },
  { number: 3, title: 'Agent ≈ Model + Harness', maxStep: 3, component: Slide03 },
  { number: 7, title: '一次 Tool Call 到底发生了什么？', maxStep: 7, component: Slide07 },
  { number: 10, title: '一个完整 Coding Agent', maxStep: 4, component: Slide10 },
]
