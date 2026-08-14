import { BrainCircuit, Box, Braces, CheckCircle2, FileCode2, Gauge, LockKeyhole, RefreshCw, TerminalSquare, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

function Node({ icon: Icon, label, caption, tone, className = '', children }: {
  icon: LucideIcon; label: string; caption?: string; tone: string; className?: string; children?: ReactNode
}) {
  return <div className={`concept-node tone-${tone} ${className}`}>
    <div className="node-icon"><Icon strokeWidth={1.6} /></div>
    <div><strong>{label}</strong>{caption && <span>{caption}</span>}</div>{children}
  </div>
}

export const ModelNode = ({ className = '' }: { className?: string }) => <Node icon={BrainCircuit} label="Model" caption="推理 · 决策" tone="model" className={className} />
export const ContextNode = ({ className = '' }: { className?: string }) => <Node icon={Braces} label="Context" caption="当前工作状态" tone="context" className={className} />
export const ToolNode = ({ label = 'Tools', caption = '行动能力', icon = Wrench, className = '' }: { label?: string; caption?: string; icon?: LucideIcon; className?: string }) => <Node icon={icon} label={label} caption={caption} tone="tool" className={className} />
export const LoopNode = ({ className = '' }: { className?: string }) => <Node icon={RefreshCw} label="Loop" caption="观察 · 继续" tone="loop" className={className} />
export const PermissionNode = ({ className = '' }: { className?: string }) => <Node icon={LockKeyhole} label="Permissions" caption="边界 · 审批" tone="permission" className={className} />
export const HarnessNode = ({ children, className = '' }: { children: ReactNode; className?: string }) => <div className={`harness-node ${className}`}><div className="harness-label"><Gauge /> Harness / Runtime <span>执行与循环控制</span></div>{children}</div>
export const EnvironmentNode = ({ kind }: { kind: 'Files' | 'Shell' | 'Web' }) => {
  const icons = { Files: FileCode2, Shell: TerminalSquare, Web: Box }
  return <Node icon={icons[kind]} label={kind} tone="environment" />
}
export { CheckCircle2 }
