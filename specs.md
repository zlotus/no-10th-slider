# Agent 工作原理演示：产品与实现规格

## 1. 项目目标

制作一套约 30 分钟的中文浏览器演示，用于向对 AI Agent 缺乏系统认识的
听众解释：

> AI Agent 到底是如何工作的？

目标不是介绍某一个具体产品，而是帮助观众建立一个可迁移的 Agent
心智模型。

Claude Code、Codex 等 Coding Agent 用作具体案例。

演示结束后，观众应该能够回答：

1. 普通 Chat 与 Agent 的本质区别是什么？
2. Model 与 Agent 为什么不是同一个概念？
3. Harness 是什么？
4. Context 在 Agent 中承担什么角色？
5. Tool Call 实际发生了什么？
6. 为什么 Agent 可以连续执行很多步骤？
7. Agent Loop 是什么？
8. Coding Agent 为什么会先探索项目再修改代码？
9. Instructions、Skills、MCP、Hooks、Subagents 分别解决什么问题？
10. 为什么 Context Window 会成为长期 Agent 工作的重要限制？
11. Compact 与重新开启 Session 有什么区别？
12. 为什么 Agent 越强，人类越需要管理权限、验证和上下文？

---

# 2. 核心叙事

整场演示围绕一个核心观点逐层展开：

> Agent 不是一个神秘的、更大的 Prompt。
>
> Agent 是围绕 Model 构建起来的一套系统。

核心抽象：

    Agent ≈ Model + Harness

进一步展开：

    Model
      +
    Context
      +
    Tools
      +
    Loop
      +
    Permissions / Environment
      =
    Agent System

其中：

- Model 提供智能和决策能力。
- Context 提供当前工作状态。
- Tools 提供行动能力。
- Harness 负责组织模型调用、工具执行、权限、状态和循环。
- Loop 让 Agent 可以观察行动结果并继续行动。

后续：

- Instructions
- Skills
- MCP
- Hooks
- Subagents
- Agent Teams
- Context Management

全部视为围绕这个基本 Agent System 增强出来的能力。

---

# 3. 全局视觉系统

## 3.1 舞台

逻辑尺寸：

    1920 × 1080

固定 16:9。

整个舞台根据 viewport 等比例缩放。

页面设计时不得依赖浏览器具体像素尺寸。

---

## 3.2 风格

目标：

- 深色
- 克制
- 技术感
- 高对比
- keynote 风格
- developer-tool 风格

避免：

- 企业模板感
- 大量文字
- 过度渐变
- 过度发光
- 无意义动画

---

## 3.3 固定概念视觉身份

以下概念必须拥有稳定的视觉身份：

### Human / User

人物或简洁用户图标。

### Model

整套演示最重要的核心节点之一。

视觉上应该明确代表：

- 推理
- 决策
- 下一步行动选择

所有页面使用同一套 ModelNode。

### Context

容器/工作台视觉。

应该天然适合：

- 填充
- 增长
- compact
- 内容进入/离开

### Harness

系统层/运行时层。

不要表现成另一个 AI。

它是程序系统。

### Tool

统一 ToolNode。

具体 Tool 可通过 icon/label 区分：

- Read
- Edit
- Bash
- Git
- Web
- MCP Tool

### Tool Use

结构化请求。

建议视觉表现为从 Model 发出的 packet/card。

### Tool Result

结构化返回。

视觉上与 Tool Use 属于同一语言，但方向相反。

---

# 4. 动画模型

每张 slide 有：

    step = 0..N

进入页面时：

    step = 0

重要动画由演讲者逐步推进。

动画必须支持合理的 reverse。

不要使用自动时间轴承担关键解释。

---

# 5. Slide Specification

---

## Slide 01
# AI 从“回答问题”到“替你做事”

### 目的

建立 Chat 与 Agent 的直觉差异。

### 静态

标题：

    AI 从“回答问题”到“替你做事”

左右两个区域：

    Chat
    Agent

底部核心句：

    从“告诉我怎么做”到“替我完成它”

### 动画

Step 0：

显示 Chat：

    用户：
    帮我修一下登录 Bug

    AI：
    你可以检查 auth.ts……

Step 1：

出现 Agent 用户请求。

Step 2：

Agent 依次出现：

    读取项目
    搜索代码
    修改文件
    运行测试
    修复错误
    完成

这些动作应形成清晰的执行链。

### 视觉目标

简单、漂亮。

不要在此页解释 Tool/Harness。

---

## Slide 02
# 普通 LLM 为什么不能直接替你干活？

### 目的

制造问题。

### 静态

中央：

    Prompt → LLM → Text

周围：

    文件系统
    Shell
    Internet
    Database
    Git

它们最初与 LLM 没有连接。

### 动画

依次出现三个问题：

    它怎么读取文件？
    它怎么执行命令？
    它怎么知道执行结果？

最后：

    答案不在 LLM 里面，
    而在 LLM 外面。

---

## Slide 03
# Agent ≈ Model + Harness

### 目的

第一次正式揭开 Agent 架构。

### 静态

Model 位于中心。

### 动画

Step 0：

只有 Model。

Step 1：

Harness 外层/底层结构出现。

Step 2：

Harness 中出现：

    Context
    Tools
    Loop
    Permissions

Step 3：

完整外框出现：

    AGENT

最终强调：

    Model 决定做什么
    Harness 让它真的发生

### 视觉要求

这是第一张 architecture hero slide。

需要建立后续可复用的 Agent visual language。

---

## Slide 04
# Model：Agent 的“大脑”

### 内容

输入：

    Goal
    Context
    Available Tools

Model：

    理解
    推理
    决定下一步

输出：

    回答用户
    OR
    请求 Tool

### 核心句

    Model 负责“决定”，不负责“执行”。

### 对比

    “应该运行 npm test”

    ≠

    电脑真的运行 npm test

---

## Slide 05
# Context：Agent 此刻知道的一切

### 视觉

ContextPanel 像一个工作台。

逐步填入：

    System Instructions
    AGENTS.md / CLAUDE.md
    User Goal
    Source Code
    Tool Results
    Earlier Conversation

### 核心句

    模型不是“永久记得项目”，
    而是当前 Context 中仍然存在这些信息。

### 伏笔

右下角：

    Context 并不是无限的

不要在此页展开解释。

---

## Slide 06
# Tools：给模型一双“手”

### 静态

Model 位于上方。

下方 Tool 节点：

    Read
    Edit
    Bash
    Git
    Web

### 动画

Tools 逐渐连接到 Harness / Model interface。

可显示简单接口：

    read_file(path)
    edit_file(path, ...)
    bash(command)

### 核心句

    Tool 是 Model 可以请求调用的结构化能力。

---

## Slide 07
# 一次 Tool Call 到底发生了什么？

### 重要程度

HERO SLIDE。

这是整场最重要的技术解释之一。

### 必须参考

    ../learn-claude-code/

在实现前核实 `tool_use` / `tool_result` / `stop_reason` 的准确表达。

### 示例

用户：

    “测试为什么失败？”

### 动画

Step 0：

User → Model

Step 1：

Model response 中出现结构化 Tool Use：

    type: "tool_use"
    name: "bash"
    input:
      command: "npm test"

Step 2：

Tool Use packet 从 Model 移动到 Harness。

Step 3：

Harness 识别请求，并真正执行：

    $ npm test

Step 4：

Terminal 显示：

    FAIL auth.test.ts
    2 tests failed

Step 5：

Harness 创建 Tool Result：

    type: "tool_result"
    content:
      "2 tests failed..."

Step 6：

Tool Result 返回 Context / messages。

Step 7：

Model 再次被调用。

### 必须强调

LLM 没有直接执行：

    npm test

Harness/runtime 才真正执行命令。

Model 产生的是：

    structured request / tool_use

### 视觉

数据流必须非常清楚。

动画应该让观众可以“跟着 packet 走一圈”。

不要同时移动太多东西。

---

## Slide 08
# 真正让 Agent 跑起来的，是一个 Loop

### 左侧

极简 TypeScript 风格伪代码：

    while (true) {
      const response = await llm(messages, tools)

      if (!response.toolUse) break

      const result = await execute(response.toolUse)

      messages.push(result)
    }

实际 Claude 风格字段可在旁边小字注明：

    stop_reason: "tool_use"

### 右侧

循环图：

    Model
      ↓ tool_use
    Tool
      ↓ tool_result
    Context
      ↺ Model

### 动画

逐行解释代码，同时右侧对应路径高亮。

### 核心句

    没有新的 Tool Use → Loop 结束
    还有 Tool Use → 继续干活

---

## Slide 09
# Agent Loop：Reason → Act → Observe → Repeat

### 目的

把 Slide 08 的代码重新抽象成心智模型。

### 视觉

大圆环：

    Reason
      ↓
    Act
      ↓
    Observe
      ↺

### 动画

圆环执行 2–3 次。

每次可用一个很小的实际动作：

    Reason: 需要看 auth.ts
    Act: read_file
    Observe: 文件内容

下一轮：

    Reason: 需要运行测试
    Act: bash
    Observe: test failed

### 核心句

    Agent 的“自主性”，
    很大程度来自持续的反馈循环。

---

## Slide 10
# 一个完整 Coding Agent

### 重要程度

HERO SLIDE。

### 视觉

完整 Agent System：

    Agent
      Model
      Context
      Harness
        Tools
        Loop
        Permissions

连接外部：

    Files
    Shell
    Web

### 动画

从 Slide 03 的基础结构逐层扩展成完整系统。

右侧预告：

    Instructions
    Skills
    Hooks
    MCP
    Subagents

    ↓

    稍后加入

### 目的

建立之后所有页面都可以返回的“总地图”。

---

## Slide 11
# 任务：给现有项目增加登录功能

### 视觉

模拟 Coding Agent 输入框。

内容：

    给这个项目增加用户登录功能。
    使用现有技术栈，并添加必要测试。

### 动画

只需要轻微进入动画。

### 目的

进入实际案例。

---

## Slide 12
# 第一件事：Explore

### 左侧

项目目录。

### 右侧

Tool Call 序列：

    list_files()
    read_file("package.json")
    search("auth")
    read_file(...)

每一个 Tool Call 后出现简短 Tool Result。

### 底部

持续显示一个小型 Agent Loop。

每次 Tool Call，loop 转一轮。

### 核心句

    “Agent 正在探索项目”
    =
    连续执行很多轮 Tool Use / Tool Result

---

## Slide 13
# Plan：把目标变成可执行步骤

### 输入

Explore 得到的信息。

### 输出

计划：

    1. User 数据模型
    2. /api/login
    3. Session / Token
    4. Login 页面
    5. Route Guard
    6. Tests

### 动画

散乱信息逐渐汇聚成结构化计划。

### 核心句

    先降低不确定性
    → 再制定计划
    → 最后执行

---

## Slide 14
# Code：Agent 开始改变真实环境

### 视觉

READ：

    src/auth.ts

然后：

    EDIT src/auth.ts

再：

    WRITE tests/auth.test.ts

### 侧边风险标尺

    Read        低风险
    Edit        ↑
    Execute     ↑
    Destructive 高风险

### 目的

为 Permissions / Hooks 做铺垫。

---

## Slide 15
# 测试失败，其实只是新的 Observation

### 重要程度

HERO / STORY CLIMAX。

### 动画

    npm test
       ↓
    ❌ 2 tests failed
       ↓
    Model observes
       ↓
    read auth.ts
       ↓
    edit auth.ts
       ↓
    npm test
       ↓
    ✅ 42 tests passed

### 核心对比

Chat：

    错误通常意味着一次回答结束

Agent：

    错误可以成为下一轮输入

### 核心句

    Feedback Loop 是 Agent
    相比一次性生成最重要的能力之一。

---

## Slide 16
# Explore → Plan → Code → Test → Commit

### 视觉

横向 workflow：

    Explore
      →
    Plan
      →
    Code
      →
    Test
      ↺ Fix
      →
    Commit

底部始终：

    Reason → Tool Use → Tool Result → Reason...

### 核心句

    Workflow 是上层过程，
    Agent Loop 是底层发动机。

---

## Slide 17
# Instructions：这个项目有什么规矩？

### 左侧

模拟 `AGENTS.md`：

    使用 TypeScript
    使用 pnpm
    修改后运行 pnpm test
    不修改 migrations
    API 保持向后兼容

### 右侧

    AGENTS.md
        ↓
      Context
        ↓
       Model

### 核心句

    Instructions 不让模型更聪明，
    它让 Agent 更了解这里应该怎么工作。

---

## Slide 18
# Skills：把经验封装成能力

### 对比

没有 Skill：

    每次重新解释完整工作方法

有 Skill：

    /project-continuity
    /review
    /deploy
    /tdd

### Skill 展开

    Skill
    ├── SKILL.md
    ├── references/
    ├── templates/
    ├── scripts/
    └── agents/

### 核心句

    把反复使用的方法论，
    从聊天历史变成可复用资产。

---

## Slide 19
# 真实案例：project-continuity

### 必须参考

    ../my-skills/project-continuity/

### 起始状态

Session A：

    Goal
    Completed A
    Completed B
    Failed attempt C
    Decision D
    TODO E
    TODO F
    Large conversation history

Context 很满。

### 动画

Step 1：

执行 project-continuity Skill。

Step 2：

生成结构化状态：

    Goal
    Current Progress
    Key Decisions
    Important Files
    Known Problems
    Next Steps

Step 3：

旧 Session 淡出。

Step 4：

状态文档移动到新 Session。

Step 5：

Session B 出现：

    Clean Context
    +
    Relevant Project State

### 核心句

    连续性不一定意味着保留全部历史。

然后：

    保留正确的状态，
    丢掉不再有价值的过程。

---

## Slide 20
# MCP：给 Agent 接上外部世界

### 视觉

Agent / Harness → MCP → 外部系统：

    GitHub
    Database
    Browser
    Jira
    Internal API

### 动画

外部能力逐个连接。

### 重点

MCP 不让 Model 本身更聪明。

它标准化外部能力/上下文的接入方式。

### 回归主线

对于 Agent Loop：

    MCP Tool
      ↓
    Tool Use
      ↓
    Tool Result

---

## Slide 21
# Hooks：有些事不能靠 Agent 自觉

### 左侧

Instruction：

    修改代码后记得运行 prettier

Agent：

    好的！

随后：

    忘了

### 右侧

    PostToolUse
        ↓
      prettier
        ↓
    ALWAYS RUN

### 示例

    Edit 后自动格式化
    禁止修改 .env
    记录 Tool Calls

### 核心句

    “尽量做到” → Instruction

    “必须做到” → Hook / Permission / Code

---

## Slide 22
# Subagent：给子任务一张干净工作台

### 主 Agent

分出：

    Research
    Security
    Tests

### 单个 Subagent 放大

    Fresh Context
    +
    Specific Task
    +
    Selected Tools
       ↓
    Result Summary

结果返回 Main Agent。

### 核心句

    Subagent 的价值不只是并行，
    更是 Context Isolation。

---

## Slide 23
# 从 Agent 到 Agent Team

### 视觉

Human

↓

Planner

分发：

    Researcher
    Coder
    Tester

汇聚：

    Reviewer

### 核心元素

    Task Decomposition
    Context Isolation
    Result Passing
    Coordination

### 避免

不要做成拟人化 AI 开会动画。

---

## Slide 24
# Agent 会犯错，而且错误也会进入 Loop

### 视觉

重新使用 AgentLoop。

正常 loop 逐渐变成错误 loop：

    错误判断
       ↓
    错误操作
       ↓
    错误结果
       ↓
    继续误判

### 对比

Chat：

    错误回答
       ↓
    用户看到错误

Agent：

    错误判断
       ↓
    错误行动
       ↓
    改变环境
       ↓
    继续推理

### 核心句

    Agent 能力越强，
    权限和验证越重要。

---

## Slide 25
# Context Window：工作台放不下了

### 必须复用

Slide 05 的 ContextPanel。

### 动画

Context 从：

    30%

不断填入：

    Source Code
    Tool Results
    Logs
    Tests
    Conversation
    More Code
    More Results

直到：

    100%

然后：

    COMPACT

变回约：

    50%

但少量细节视觉上淡出。

### 核心句

    Compact 不是无损压缩。

---

## Slide 26
# Compact，还是 New Session？

### 左侧

当前 Session：

    Full
      ↓
    Compact
      ↓
    Continue
      ↓
    Full
      ↓
    Compact

优点：

    连续
    方便

风险：

    摘要误差
    旧信息干扰
    焦点漂移

### 右侧

    Session A
       ↓
    Structured Handoff
       ↓
    Session B

Handoff：

    Goal
    Decisions
    Progress
    Next Steps

### 核心对比

    Compact
    保留“对话连续性”

    Handoff
    保留“任务连续性”

### 最终句

    Context Management
    本身也是 Agent Engineering。

---

## Slide 27
# “AI 自己干了半小时”，底下究竟发生了什么？

### 重要程度

FINAL HERO SLIDE。

### 起点

用户：

    帮我实现登录功能

### 动画

镜头进入 Agent：

    Model
      ↓
    tool_use
      ↓
    Harness
      ↓
    Tool
      ↓
    tool_result
      ↓
    Context
      ↺
    Model

然后外围依次出现：

    Instructions
    Skills
    Hooks
    MCP
    Subagents
    Permissions
    Context Management

最终形成：

    AGENT SYSTEM

### 最终总结

依次出现：

    Model 提供智能

    Tools 提供行动能力

    Context 提供当前状态

    Harness 提供执行机制

    Loop 让这一切持续运转

最终：

    Agent 不是一个更大的 Prompt，
    而是一个围绕 Model 运行的系统。

---

## Slide 28
# 人的角色也变了

### 第一阶段

    Human
      ↓
    Computer

### 转场

    Human
      ↓
    Goal / Rules
      ↓
    Agent
      ↓
    Code / Tools / Agents

### 最终六个词

    定义目标
    提供上下文
    设置边界
    授予工具
    观察执行
    判断结果

### Closing

    从操作电脑，
    到管理能够操作电脑的 Agent。

---

# 6. 实施阶段

## Phase 1 —— 原型阶段

仅实现以下内容：

* Presentation Runtime
* Design System
* 可复用的架构与视觉组件
* Slide 01
* Slide 03
* Slide 07
* Slide 10

完成后：

> **停止继续开发，等待用户 Review。**

不要自动进入后续页面实现。

---

## Phase 2 —— 基础概念页

在 Phase 1 获得确认后，实现：

* Slide 02
* Slide 04
* Slide 05
* Slide 06
* Slide 08
* Slide 09

这一阶段主要补齐：

* 普通 LLM 与 Agent 的区别
* Model
* Context
* Tools
* Agent Loop

并完成第一、第二章的基础内容。

---

## Phase 3 —— Coding Agent 完整案例

实现：

* Slide 11
* Slide 12
* Slide 13
* Slide 14
* Slide 15
* Slide 16

这一阶段围绕一个完整的 Coding Agent 故事展开：

```text
用户提出目标
    ↓
Explore
    ↓
Plan
    ↓
Code
    ↓
Test
    ↓
Fix
    ↓
Commit
```

重点保证这些页面之间具有连续的视觉叙事，而不是六张互相独立的页面。

底层的 Agent Loop：

```text
Reason
→ Tool Use
→ Tool Result
→ Reason
```

应该在这一阶段持续作为视觉暗线存在。

---

## Phase 4 —— Agent 扩展能力

实现：

* Slide 17
* Slide 18
* Slide 19
* Slide 20
* Slide 21
* Slide 22
* Slide 23

这一阶段主要解释：

* Instructions
* Skills
* `project-continuity`
* MCP
* Hooks
* Subagents
* Agent Teams

实现这些页面时，应继续复用前面已经建立的 Agent、Context、Tool、Harness 等视觉组件。

不要为了每一个新概念重新设计一套完全不同的视觉语言。

---

## Phase 5 —— Agent 的限制与总结

实现：

* Slide 24
* Slide 25
* Slide 26
* Slide 27
* Slide 28

这一阶段主要解释：

* Agent 错误如何进入执行循环
* Context Window 的限制
* Context Compact
* New Session / Structured Handoff
* Context Management
* 完整 Agent System 总结
* 人类角色从 Operator 向 Agent Manager 的变化

Slide 27 应作为整套演示的最终架构 Hero Slide。

Slide 28 应作为简洁、有力的 Closing Slide。

---

# 7. 完成标准

当以下条件全部满足时，项目才能视为完成。

## 7.1 页面完整性

全部 28 张 Slide 均已实现。

页面顺序、主题和核心内容与本规格一致。

不得在没有明确批准的情况下随意删除、合并或新增核心页面。

---

## 7.2 构建与运行

项目必须能够正常完成生产构建。

至少保证：

```bash
pnpm build
```

成功。

如果项目配置了独立的类型检查和 Lint 命令，也应保证：

```bash
pnpm typecheck
pnpm lint
```

成功。

不得遗留由当前实现引入的：

* TypeScript Error
* ESLint Error
* Build Error

---

## 7.3 离线运行

依赖安装完成并成功构建后，演示的核心功能不应依赖实时互联网服务。

以下内容应尽量本地完成：

* Slide 内容
* 动画
* 图标
* 代码高亮
* 架构图
* Terminal 示例
* Tool Call 示例

不要因为一个纯视觉需求引入必须联网才能正常展示的服务。

---

## 7.4 Slide Navigation

必须支持：

* 下一页
* 上一页
* 第一页
* 最后一页
* 直接页面跳转，如果已经实现
* 当前页码显示
* 总页数显示
* 总体进度显示

键盘控制在正常演讲过程中必须可靠。

---

## 7.5 Step Navigation

存在页内动画的 Slide 必须支持：

```text
step 0
→ step 1
→ step 2
→ ...
```

并能够合理回退：

```text
...
→ step 2
→ step 1
→ step 0
```

回退过程中不能出现明显的：

* 元素残留
* 重复元素
* 状态错乱
* 突然跳动
* 动画无法恢复
* 页面布局破坏

---

## 7.6 Fullscreen

必须支持浏览器全屏演示。

进入和退出全屏不应破坏：

* 当前页
* 当前 Step
* 页面缩放
* 布局
* 导航状态

---

## 7.7 固定舞台

所有 Slide 均基于：

```text
1920 × 1080
16:9
```

的固定逻辑舞台设计。

浏览器只负责对整个舞台进行统一缩放。

任何 Slide 的主要内容不得明显超出逻辑舞台范围。

---

## 7.8 投影可读性

演示必须以：

> **投影或大屏远距离观看**

作为主要阅读场景。

不要以开发者在笔记本前近距离阅读作为标准。

因此必须确保：

* 标题足够大
* 正文足够大
* Label 不过小
* Code 不过密
* 对比度足够
* 不依赖极细线条表达关键含义

如果一页内容放不下，优先：

1. 删除次要文字
2. 转换为图示
3. 留给演讲者口头讲解

不要优先缩小字体。

---

## 7.9 信息密度

Slide 不得演变成文章或 README。

原则上：

> **一页只传达一个主要观点。**

屏幕文字只承担：

* 标题
* 核心结论
* 必要 Label
* 极短解释
* 必要代码或数据

完整解释由演讲者口头完成。

---

## 7.10 视觉一致性

相同概念必须使用稳定一致的视觉组件。

例如：

* Model
* Context
* Harness
* Tool
* Tool Use
* Tool Result
* Agent Loop
* Human
* Subagent

不能在不同页面上毫无理由地更换：

* 形状
* 颜色语义
* 图标语义
* 视觉层级

观众应该在看到一个节点时，能够立刻识别：

> “这是之前讲过的那个 Model。”

---

## 7.11 Tool Calling 技术准确性

Slide 07、08 以及所有涉及 Tool Calling 的页面必须准确表达：

```text
Model
→ Tool Use
→ Harness / Runtime
→ 真正执行 Tool
→ Tool Result
→ Context / Messages
→ 再次调用 Model
```

不得误导观众认为：

> LLM 本身直接操作了 Shell、文件系统或其他真实环境。

对于 Claude 风格案例，可以准确展示：

```text
tool_use
tool_result
stop_reason: "tool_use"
```

相关内容应参考：

```text
../learn-claude-code/
```

进行核实。

---

## 7.12 动画必须服务理解

关键教学动画必须由演讲者控制。

不得让重要解释依赖自动计时。

动画应该主要用于表达：

* 因果
* 顺序
* 状态变化
* 数据流
* 系统逐层构建
* Context 变化
* Agent Loop
* Session Handoff

不要把动画当作装饰。

---

## 7.13 共享组件复用

已经建立的共享概念组件应被合理复用。

不能为了快速完成页面，大量复制类似 JSX 和 CSS。

但也不要为了追求“100% 抽象”建立复杂、难以理解的通用框架。

目标是：

> **稳定复用明显重复的概念，同时保持 Slide Composition 简单清晰。**

---

## 7.14 参考仓库保持只读

以下参考目录不得被本项目修改：

```text
../Claude-Code-Everything-You-Need-to-Know/
../Claude-Code-Everything-You-Need-to-Know-Zh-cn/
../learn-claude-code/
../my-skills/
```

任何演示代码、生成文件、临时文件、文档更新都应限制在本项目目录内。

---

## 7.15 Project Continuity 文档

开发过程中应维护：

```text
docs/progress.md
docs/decisions.md
docs/handoff.md
```

这些文件必须保持：

* 简洁
* 准确
* 面向未来 Session
* 以当前项目状态为中心

禁止把它们变成冗长的聊天摘要或开发流水账。

---

## 7.16 时长目标

全部 28 页应该能够在正常语速下完成约：

> **30 分钟**

允许一定现场浮动。

关键页面可以讲：

* 1.5 分钟
* 2 分钟

过渡页可以只讲：

* 20 秒
* 30 秒
* 45 秒

不能要求演讲者为了讲完全部内容持续快速念稿。

---

## 7.17 最终验收目标

最终结果应该让一个没有系统学习过 Agent 的观众，在演示结束后能够形成这样的心智模型：

```text
Agent
不是一个“更聪明的聊天框”

而是：

Model
+
Context
+
Tools
+
Harness
+
Loop
+
Permissions
+
不断扩展的工程能力
```

并能够理解：

```text
Model 提供智能

Tools 提供行动能力

Context 提供当前状态

Harness 提供执行机制

Loop 让系统持续运行
```

最终让观众意识到：

> **Agent 不是一个更大的 Prompt，而是一个围绕 Model 构建起来、能够持续观察并作用于环境的系统。**
