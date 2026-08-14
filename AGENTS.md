# AGENTS.md

## 项目简介

本仓库用于实现一套中文、基于浏览器运行的类 PPT 交互式演示，主题是：

> **AI Agent 是如何工作的？**

演示时长目标约为 30 分钟。

主要受众是技术基础较弱、可能使用过 ChatGPT，但并不了解以下概念的听众：

- Agent 内部工作机制
- Tool Calling
- Harness
- Context
- Skills
- Hooks
- MCP
- Subagents
- Agent Teams
- Context Management

本演示会使用 Claude Code、Codex 等 Coding Agent 作为具体案例，但目标不是制作 Claude Code 产品教程，而是解释可以迁移到不同 Agent 产品上的通用工作原理。

在进行任何架构、视觉或内容层面的重要决策之前，必须先完整阅读：

`specs.md`

---

## 工作区结构

Codex 可能会从一个包含多个同级目录的工作区打开本项目：

```text
Claude-Code-Everything-You-Need-to-Know/
Claude-Code-Everything-You-Need-to-Know-Zh-cn/
learn-claude-code/
my-skills/
```

其中：

### `Claude-Code-Everything-You-Need-to-Know/`

上游英文参考仓库。

主要用于在中文翻译存在歧义时，对照英文原文。

### `Claude-Code-Everything-You-Need-to-Know-Zh-cn/`

中文翻译版本。

在研究 Claude Code、Skills、Hooks、Subagents、Workflows、MCP 等演示内容时，优先参考此仓库。

### `learn-claude-code/`

Agent 底层原理的重要技术参考。

尤其用于核实以下内容：

- Agent Loop
- `tool_use`
- `tool_result`
- `stop_reason: "tool_use"`
- Harness 架构
- 工具执行机制
- Context Compact
- Subagents
- Agent Harness 的逐层构建方式

涉及 Tool Calling 和 Agent Loop 的页面，在实现前必须优先阅读这里的相关实现和文档，避免为了视觉表现牺牲技术准确性。

### `my-skills/`

包含真实使用中的 Skills。

其中：

`my-skills/project-continuity/`

是本演示中非常重要的真实案例，主要用于：

- Skills
- 长上下文管理
- Session Handoff
- Context Compact 与 New Session 的比较
- 跨会话保持项目连续性

### `agent-explained/`

本演示项目本身。

**所有代码、文档和实现修改必须限制在本项目目录内。**

其余几个仓库均为：

> **只读参考资料。**

禁止修改这些参考仓库中的任何文件。

---

## 语言要求

面向观众展示的内容必须使用：

> **简体中文**

以下已经形成行业惯例或直接对应协议/API 字段的技术词，可以保留英文：

- Agent
- Model
- Harness
- Context
- Tool
- Tool Use
- Tool Result
- MCP
- Skill
- Hook
- Subagent
- Agent Team

原则上应采用：

> 中文解释 + 英文技术词

而不是强行创造生硬的中文翻译。

例如：

> Harness：围绕模型运行、负责工具执行、上下文组织、权限与循环控制的运行时系统。

代码标识符、文件名、协议字段和必要的项目内部文档可以使用英文，以保证技术表达准确。

但演示页面面向观众的主体文案必须使用中文。

---

## 技术栈

项目使用：

- Vite
- React
- TypeScript
- Motion for React
- CSS Modules 和/或结构清晰的原生 CSS
- CSS Custom Properties 作为 Design System
- SVG 绘制架构图、连接线与数据流
- Lucide React 作为通用图标库
- Shiki 用于静态代码高亮

除非用户明确要求，否则禁止引入：

- Slidev
- reveal.js
- Tailwind CSS
- Mermaid
- Canvas 架构图
- Monaco Editor
- Redux
- Zustand
- React Router
- 大型 UI Component Library
- 第二套动画框架
- 与项目目标无关的大型依赖

依赖应尽可能少。

在添加任何新依赖前，先判断：

> 当前技术栈是否已经能够合理完成这个功能？

如果能，则不要增加依赖。

---

## Presentation Runtime

本项目是：

> **演示系统**

而不是普通响应式网站、营销页或后台系统。

内部逻辑舞台固定为：

```text
1920 × 1080
16:9
```

浏览器只负责把整个舞台等比例缩放到当前 viewport。

禁止针对 Desktop / Tablet / Mobile 分别重新设计 Slide。

每页布局都应基于固定 1920×1080 坐标系完成。

Presentation Runtime 至少需要支持：

- 上一页
- 下一页
- 页内动画 Step
- 键盘控制
- 全屏
- 当前页码
- 总页数
- 总体进度
- 直接跳转页面
- URL / Hash 状态保持，如果实现成本合理

### 键盘行为

```text
Right Arrow
Space
PageDown
```

执行：

1. 如果当前 Slide 仍有未播放的动画 Step，则推进一个 Step。
2. 如果当前 Slide 已经没有后续 Step，则进入下一页。

```text
Left Arrow
PageUp
```

执行：

1. 如果当前 `step > 0`，回退一个 Step。
2. 如果当前已经是 `step = 0`，进入上一页。

其他快捷键：

```text
Home
```

跳转到第一页。

```text
End
```

跳转到最后一页。

```text
F
```

进入全屏。

```text
Esc
```

退出全屏。

```text
G
```

如实现 Overview / Slide Grid，则用于打开总览。

### 演讲者控制优先

重要动画必须由演讲者主动推进。

禁止让关键教学流程依赖固定时间自动播放。

例如：

```text
tool_use
→ Harness
→ Terminal
→ tool_result
→ Model
```

必须能够通过 Space / Right Arrow 一步一步控制。

---

## Slide 代码组织

禁止把 28 页全部写进一个巨型 React Component。

推荐目录：

```text
src/
├── app/
├── components/
├── presentation/
├── slides/
├── styles/
└── main.tsx
```

每个 Slide 原则上单独一个组件：

```text
Slide01.tsx
Slide02.tsx
...
Slide28.tsx
```

但不同 Slide 中重复出现的概念必须抽成共享组件。

优先考虑以下组件：

```text
Slide
ChapterLabel
ModelNode
HarnessNode
ContextPanel
ToolNode
ToolUseCard
ToolResultCard
FlowArrow
AgentLoop
Terminal
CodeBlock
```

同一个概念跨页面必须保持稳定视觉身份。

例如：

Model 会出现在：

```text
Slide 03
Slide 07
Slide 09
Slide 10
Slide 15
Slide 24
Slide 27
```

禁止每一页都重新设计一个完全不同的 Model。

应该复用统一的：

`ModelNode`

并通过 props 或局部布局差异适配不同页面。

---

## 视觉原则

整体视觉应接近：

- 现代 Developer Tool
- 技术主题 Keynote
- 系统架构可视化
- 深色、专注、高对比
- 克制而专业

不应该像：

- 企业蓝色 PowerPoint 模板
- 普通后台管理系统
- AI 自动生成的 Landing Page
- 充斥玻璃拟态的展示页
- 过度炫光的科技宣传片

应该避免：

- 大面积无意义渐变
- 过量 Glow
- Bounce
- 大幅旋转
- 不断循环的背景动画
- 为了“酷”而加入的装饰运动
- 每个元素都单独做一次动画

允许并鼓励：

- 大量留白
- 单页只表达一个核心观点
- 视觉层级清楚
- 大字号
- 少文字
- 强对比
- 清晰的数据流和状态变化

演示页面：

> **不是演讲稿。**

屏幕上的文字必须比讲解内容更简洁。

---

## 动画原则

动画只应用于以下场景：

- 表达因果关系
- 表达先后顺序
- 表达数据流
- 表达状态变化
- 表达系统逐层构建
- 表达 Context 的增长或压缩
- 表达 Session Handoff
- 表达 Agent Loop

推荐只使用四类动画语言。

### 1. Fade + 轻微纵向移动

用于：

- 普通文字
- 标签
- 普通说明元素

### 2. 小幅 Scale

例如：

```text
0.96 → 1
```

用于：

- 重要节点
- Model
- Tool
- Harness
- 关键 Result

### 3. SVG Path Animation

用于：

- Tool Call
- Tool Result
- Agent Loop
- 数据流
- Subagent 结果返回
- 系统之间的连接

### 4. Layout Transition

用于：

- Context 增长
- Agent Architecture 展开
- Compact
- Session Handoff
- Subagent 创建
- 完整系统组装

禁止：

- Bounce
- 大幅 Spring
- 大角度 Rotation
- 随机漂浮
- 连续运动的装饰背景
- 演讲者无法控制的长时间动画

---

## 静态内容与动画内容的边界

不是所有内容都应该动画。

### 通常保持静态

以下内容通常在进入页面后即可保持静态：

- Slide Title
- 简短定义
- 栏目标题
- 辅助说明
- 页面主体框架
- 架构边界
- 对比区域标题
- 不需要表达顺序关系的文字

### 应通过 Step 动画展示

以下内容适合逐步动画：

- Tool Use 从 Model 发出
- Harness 接收 Tool Use
- Harness 执行真实工具
- Terminal Command 执行
- Tool Result 返回
- Agent Loop 循环
- Explore 阶段连续 Tool Calls
- Test Failed → Analyze → Fix → Test Passed
- Context 不断增长
- Compact
- `project-continuity` Handoff
- 新 Session 建立
- Subagent 创建
- Subagent Result 返回
- 最终 Agent Architecture 逐层组装

原则：

> 如果动画不能帮助观众理解因果、顺序、状态或结构，就不要做动画。

---

## 技术准确性

技术准确性优先于视觉效果。

尤其是 Tool Calling 相关页面，必须清晰表达：

### Model 做什么

Model：

- 接收当前 Context
- 看到可用 Tools
- 根据任务和当前状态决定下一步
- 输出结构化的工具调用请求

Model 并不是直接在操作真实电脑。

### Harness / Runtime 做什么

Harness：

- 读取 Model 返回的 Tool Use
- 找到对应 Tool Handler
- 校验和处理参数
- 真正执行命令或操作
- 获得结果
- 把结果包装成 Tool Result
- 添加回 messages / Context
- 再次调用 Model

对于 Claude 风格案例，可以明确展示：

```text
tool_use
tool_result
stop_reason: "tool_use"
```

在实现 Slide 07、08 等页面前，必须先阅读：

`../learn-claude-code/`

核实具体机制。

禁止做出以下误导表达：

> LLM 自己执行了 `npm test`

应该表达成：

> LLM 请求使用 Bash Tool，Harness 执行 `npm test`。

---

## 内容参考优先级

### Claude Code 一般概念

优先参考：

`../Claude-Code-Everything-You-Need-to-Know-Zh-cn/`

适用于：

- Instructions
- Skills
- Hooks
- MCP
- Subagents
- Workflows
- Agent Teams
- Claude Code 工作模式

### Agent 底层机制

优先参考：

`../learn-claude-code/`

适用于：

- Harness
- Agent Loop
- Tool Use
- Tool Result
- Context
- Context Compact
- Subagent Context Isolation

### Project Continuity

优先参考：

`../my-skills/project-continuity/`

适用于：

- Skills
- Context 长时间膨胀
- Compact 局限
- Session Handoff
- New Session
- 项目状态保持

### 英文原文

当中文翻译存在歧义或需要核对原始含义时，参考：

`../Claude-Code-Everything-You-Need-to-Know/`

---

## 不要大段复制参考资料

参考仓库用于：

- 核实事实
- 理解概念
- 提炼内容

演示内容必须重新组织为：

> 简洁、适合现场讲解、适合小白理解的中文表达。

禁止把 README 或教程中的长段落直接搬进 Slide。

---

## Context Continuity 与多 Session 开发

本项目预计会经历多个 Codex Session。

用户会使用：

`~/.codex/skills/project-continuity/`

来保持跨 Session 的项目连续性。

因此在开发过程中，应维护以下文档：

```text
docs/progress.md
docs/decisions.md
docs/handoff.md
```

---

## `docs/progress.md`

用于记录当前项目状态。

应该包含：

- 已完成的阶段
- 已完成的 Slide
- 当前正在做什么
- 下一批计划
- Known Bugs
- 仍需视觉 Review 的页面

保持：

- 简洁
- 最新
- 面向未来 Session

不要记录所有历史流水账。

---

## `docs/decisions.md`

用于记录未来 Session 不应该随意推翻的重要决策。

例如：

- 技术栈
- Presentation Runtime 架构
- 依赖选择
- 1920×1080 固定舞台
- 动画约定
- Design System
- 共享组件语义
- 特定视觉规则
- 有意偏离 `specs.md` 的地方及原因

不要把它写成：

> “今天做了 A，然后做了 B，然后又改了 C。”

只记录真正具有长期价值的决策。

---

## `docs/handoff.md`

用于：

> 当前 Session → 下一 Session

应保持短小、准确。

当准备使用 `project-continuity` 重开 Session 时，必须更新。

至少包含：

### 当前目标

当前正在完成哪个 Phase / Slide / 问题。

### 当前实现状态

哪些已经完成。

哪些只完成了一部分。

### 关键文件

例如：

```text
src/components/ModelNode.tsx
src/slides/Slide07.tsx
src/styles/theme.css
```

### 已确定的重要决策

避免下一 Session 重新争论已经解决的问题。

### 未解决问题

例如：

- Slide07 reverse animation 仍存在问题
- Slide03 Harness 层级太拥挤
- 字号需要 projector review

### 下一步

必须尽量具体。

例如：

```text
1. 修复 Slide07 step 4 → step 3 回退时 ToolResult 不消失的问题
2. pnpm build
3. Review Slide01/03/07/10
4. 暂时不要开始 Slide02
```

---

## 什么时候应该更新 Continuity 文档

不要求每次小改动都更新。

在以下情况应更新：

- 完成一个 Phase
- 完成一个 Slide Batch
- 做出重要架构决策
- 改变 Design System
- 增加重要共享组件
- 发现影响后续开发的 Known Issue
- 准备结束当前 Session
- 当前 Context 已经明显变长
- Session 已经多次 Compact
- Codex 开始失去当前项目焦点
- 准备通过 `project-continuity` 开启新 Session

原则：

> 保留项目状态，而不是保存所有开发历史。

---

## 开发流程

所有重要开发任务遵循：

```text
Explore
→ Plan
→ Implement
→ Verify
→ Document
```

开始一个较大的 Batch 前：

### 1. 阅读规格

阅读：

`specs.md`

中与当前任务对应的部分。

### 2. 检查现有组件

优先复用已经存在的：

- ModelNode
- ContextPanel
- ToolNode
- AgentLoop
- FlowArrow
- Terminal
- CodeBlock

不要重复造轮子。

### 3. 必要时阅读参考仓库

只有涉及事实准确性时才读取参考资料。

避免无理由反复扫描大型 repo，以减少无意义上下文消耗。

### 4. 制定简短计划

开始修改前先确定：

- 哪些文件需要改
- 是否新增共享组件
- 哪些部分静态
- 哪些使用 Step Animation
- 如何验证

### 5. 实现

保持 Scope。

不要顺便重构无关代码。

### 6. 验证

运行必要检查。

### 7. 视觉检查

如果当前环境允许截图或浏览器预览，应检查：

- 溢出
- 字号
- 对齐
- 对比度
- 动画顺序
- Reverse Animation
- 组件视觉一致性

### 8. 更新文档

如果项目状态有重要变化：

更新：

- `progress.md`
- `decisions.md`
- `handoff.md`

---

## 验证要求

重要修改后至少运行适用的：

```bash
pnpm typecheck
pnpm lint
pnpm build
```

如果实际 `package.json` 命令不同，则使用项目中定义的命令。

必须解决由当前修改引入的：

- TypeScript Error
- ESLint Error
- Build Error

---

## Slide 视觉验证

每张 Slide 至少检查：

### 1. 无布局溢出

任何主要内容都不能超出：

```text
1920×1080
```

逻辑舞台。

### 2. 投影可读性

不要以笔记本近距离阅读作为标准。

正文和标签需要保证投影距离下仍然能看清。

### 3. 信息密度

禁止把页面写成文章。

如果一页出现大量段落，应优先：

- 减字
- 拆成图
- 转换为演讲者口头内容

而不是缩小字体。

### 4. Step Forward

所有动画必须能够：

```text
0 → 1 → 2 → ...
```

正常播放。

### 5. Step Reverse

必须尽量保证：

```text
... → 2 → 1 → 0
```

不会出现：

- 元素残留
- 状态错乱
- 突然跳动
- Layout 崩坏

### 6. 视觉一致性

相同概念：

- Model
- Tool
- Context
- Harness
- Tool Use
- Tool Result

跨页面必须保持一致。

---

## Scope Discipline

不要擅自扩展主题。

本演示主题是：

> **AI Agent 如何工作**

Coding Agent 是主要案例。

本项目不是以下主题的完整课程：

- Prompt Engineering
- RAG
- Vector Database
- 模型训练
- Transformer 原理
- Function Calling API 教程
- Claude Code 全功能介绍
- Codex 全功能介绍
- LLM Benchmark
- Agent 产品横向评测

只有在帮助解释 Agent 心智模型时，才能简短涉及这些旁支。

---

## 第一阶段实施要求

**禁止一开始就实现全部 28 页。**

第一阶段只完成：

### 基础设施

1. 初始化项目
2. Presentation Runtime
3. 1920×1080 固定舞台
4. Slide Navigation
5. Step Navigation
6. Fullscreen
7. 页码与进度
8. Design System
9. 基础共享组件
10. 基础 SVG / Flow Arrow 系统

### Prototype Slides

只实现：

```text
Slide 01
Slide 03
Slide 07
Slide 10
```

这四页分别用于验证：

### Slide 01

普通演示页面的视觉语言。

### Slide 03

Agent Architecture 视觉语言。

### Slide 07

复杂 Step-controlled Tool Call Animation。

### Slide 10

完整 Agent System 的组合能力。

---

## 第一阶段完成后的行为

完成：

- Runtime
- Design System
- Shared Components
- Slide 01
- Slide 03
- Slide 07
- Slide 10

之后：

> **立即停止。**

不要因为已经读取了完整 `specs.md` 就继续实现其他页面。

应：

1. 运行验证
2. 更新 `docs/progress.md`
3. 更新 `docs/decisions.md`
4. 必要时更新 `docs/handoff.md`
5. 总结当前实现
6. 明确告诉用户应该重点 Review 哪些视觉和交互
7. 等待用户确认

在用户明确批准前：

> **先不要进入 Phase 2。**
