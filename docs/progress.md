# 当前进度

## 当前里程碑

Phase 2 基础概念页已完成，并于用户 Review 后获准进入 Phase 3。

## 已实现

- Vite + React + TypeScript 基础工程
- 1920×1080 固定逻辑舞台与 viewport 等比缩放
- hash 状态（`#/slide/step`）、前后翻页、Step 前进/回退、Home/End、全屏、页码与总体进度
- CSS Custom Properties 设计系统与共享 Agent 概念组件
- Slide 01–10 连续页面
- Slide 07 的 8 段 Tool Call 流程；状态完全由 step 派生，可对称回退
- 可复用的 `ContextPanel`、`CodeBlock` 与 `AgentLoop`
- Slide 08 的运行时循环与 Slide 09 的 Agent 心智模型

## 已验证

- `pnpm typecheck`：通过
- `pnpm lint`：通过
- `pnpm build`：通过
- Chromium 1920×1080 截图检查：新增 Slide 02/04/05/06/08/09 的关键状态无主要内容溢出
- 回归截图检查：Slide 01/03/07/10 保持 Phase 1 视觉与布局

## 下一步

1. 开始 Phase 3 前阅读 `specs.md` 中 Slide 11–16 的规格。
2. 围绕同一个登录功能案例实现 Explore → Plan → Code → Test → Fix → Commit 的连续故事。
3. 复用 `AgentLoop`、Tool packet、Terminal 和已有概念节点，并进行 Slide 01–16 回归检查。

## 待确认

- 字体使用本地系统字体以保证离线运行，需在最终演示电脑确认中文字体呈现。
- 控制条在静止时低透明，部分页面的底部辅助内容已预留安全区；仍需实际演示窗口确认。
