# AI Agent 是如何工作的？

一套面向技术初学者的中文浏览器演示，用交互式 Slide 解释 Model、Harness、Context、Tools、Agent Loop 等 AI Agent 核心机制。

项目使用 Vite、React、TypeScript 和 Motion 构建。演示内部采用固定的 1920×1080 逻辑舞台，由浏览器根据窗口大小整体等比缩放。

## 环境要求

- Node.js 20 或更高版本
- pnpm 10 或更高版本

## 安装依赖

```bash
pnpm install
```

## 本地开发

```bash
pnpm dev
```

根据终端提示打开本地地址，通常为 `http://localhost:5173`。

## 检查与构建

```bash
pnpm typecheck
pnpm lint
pnpm build
```

生产构建输出到 `dist/`。

## 预览生产构建

先完成构建，再启动本地预览服务器：

```bash
pnpm build
pnpm preview
```

根据终端提示打开预览地址，通常为 `http://localhost:4173`。

## 演示控制

- `Space`、`Right Arrow`、`PageDown`：推进页内 Step；当前页结束后进入下一页
- `Left Arrow`、`PageUp`：回退页内 Step；回到起点后进入上一页
- `Home` / `End`：跳到第一张或最后一张页面
- `F`：进入或退出全屏

当前 Phase 1–4 均已完成并通过 Review；Slide Registry 已连续覆盖 Slide 01–23。Phase 5（Slide 24–28）尚未开始。
