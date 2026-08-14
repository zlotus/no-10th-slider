# 长期决策

## Presentation Runtime

- 逻辑舞台固定为 1920×1080，Runtime 只对整个舞台做统一 `transform: scale()`。
- Slide 由注册表描述真实编号、标题、组件与 `maxStep`；Phase 4 后连续注册 Slide 01–23。
- URL 使用 `#/slide/step`。所有 Step 视觉状态由整数派生，不保存动画副作用，以保证前进与回退一致。
- Space、Right、PageDown 优先推进 Step，再翻页；Left、PageUp 优先回退 Step，再翻页；Home/End/F 遵循演示快捷键约定。

## Design System

- 深色中性背景、细边界、高对比文字，强调色承担概念语义而非装饰：Model 金色、Context 蓝色、Tool 绿色、Loop 紫色、Permissions 橙红色。
- 相同概念跨页复用 `ModelNode`、`HarnessNode`、`ContextNode`、`ToolNode`、`LoopNode`、`PermissionNode`。
- 动画只使用淡入/轻移、小幅缩放与 SVG 路径状态，不使用自动时间轴、bounce、旋转或循环背景。
- 使用系统中文字体和本地依赖，不加载远程字体或运行时网络资源。

## Tool Calling 表达

- Claude 风格流程以 `tool_use`、`stop_reason: "tool_use"`、handler dispatch、真实工具执行、带 `tool_use_id` 的 `tool_result`、写回 messages、再次调用 Model 表达。
- Model 与真实环境之间保留明确边界；Shell 命令位于 Harness 的 Bash handler 内，绝不表现为 LLM 自己执行。

## 基础概念组件

- `ContextPanel` 是 Context 的长期视觉容器，项目规则、目标、代码、Tool Result 与对话作为可填充条目；后续增长、Compact 与 Handoff 页面应扩展该组件，而不是重画 Context。
- `CodeBlock` 负责静态代码和逐行讲解，不引入运行时高亮依赖。
- `AgentLoop` 表达协议与运行时数据流；Slide 08 展示程序机制，Slide 09 使用独立的大圆环表达 Reason → Act → Observe → Repeat，避免两页重复。
- Phase 2 不增加依赖，继续使用 Step 派生状态与已有颜色语义。

## Coding Agent 案例

- Slide 11–16 固定为同一个 `acme-dashboard` 登录功能任务；`src/auth.ts`、`tests/auth.test.ts` 与 42 项测试作为跨页故事锚点，后续不要把六页改成互不相关的示例。
- `StoryRail` 统一显示需求 → Explore → Plan → Code → Test/Fix → Commit，并为后续 Workflow 页面保留复用入口。
- `ToolUseCard`、`ToolResultCard` 与 `Terminal` 通过可选 props 承载不同工具和结果，默认值保持 Slide 07 的原始 `npm test` 示例不变。
- Slide 15 的关键元素使用常驻 DOM + step 可见状态，确保 Hash 直达、正向与反向都能确定还原；失败是 `tool_result` Observation，不是 Model 自己执行测试。
- Slide 16 明确分层：Workflow 是上层任务过程，`AgentLoop` 是每个阶段共用的底层运行机制。

## Agent System 工程能力

- Slide 17–23 不是七套孤立能力，而是沿用 Model、Context、Harness、Tools、Agent Loop 的既有系统边界逐层扩展；`CapabilityRail` 只承担累积导航，不替代页面主体解释。
- Instructions 作为项目规则进入 Context，影响 Model 判断但不承担强制执行；Hooks、Permissions 与 Host Code 位于 Harness 生命周期，负责确定性拦截或执行。
- Skills 使用“轻量目录元数据 + 按需加载完整 `SKILL.md`”表达，避免暗示所有 Skill 正文始终占用 Context。
- project-continuity 的交接对象是版本化仓库中的结构化项目状态，而不是整段聊天历史；新 Session 从 Clean Context 开始，只读取继续任务所需状态。
- MCP 作为 Harness 的标准化外部 Tool 接入层，新增 Tool 来源但不改变 `tool_use` → 执行 → `tool_result` → Context → Model 的循环。
- `AgentUnit` 为 Subagent 与 Agent Team 提供统一视觉身份；Subagent 使用独立 `messages[]` 与 Agent Loop，仅把结果摘要返回父 Context，不把 Context Isolation 误画成文件系统隔离。
- Agent Team 使用 Lead、独立成员 Context、共享任务状态与消息/结果传递表达协调；避免拟人化“多个 AI 开会”。

## 依赖边界

- Phase 1 仅使用 React、Motion、Lucide、Vite、TypeScript 与 ESLint；不引入路由、状态库、Slide 框架、Canvas 或大型 UI 库。
- TypeScript 固定在 5.9、ESLint 固定在 9.x，以兼容当前 `typescript-eslint` 工具链。
