# 长期决策

## Presentation Runtime

- 逻辑舞台固定为 1920×1080，Runtime 只对整个舞台做统一 `transform: scale()`。
- Slide 由注册表描述真实编号、标题、组件与 `maxStep`；当前只注册 Phase 1 的 01/03/07/10。
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

## 依赖边界

- Phase 1 仅使用 React、Motion、Lucide、Vite、TypeScript 与 ESLint；不引入路由、状态库、Slide 框架、Canvas 或大型 UI 库。
- TypeScript 固定在 5.9、ESLint 固定在 9.x，以兼容当前 `typescript-eslint` 工具链。
