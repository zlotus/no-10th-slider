export function FlowArrow({ active = false, reverse = false, label, className = '' }: { active?: boolean; reverse?: boolean; label?: string; className?: string }) {
  return <div className={`flow-arrow ${active ? 'active' : ''} ${reverse ? 'reverse' : ''} ${className}`}>
    {label && <span>{label}</span>}
    <svg viewBox="0 0 220 40" aria-hidden="true"><path d={reverse ? 'M210 20 H18' : 'M10 20 H202'} /><polyline points={reverse ? '30,10 18,20 30,30' : '190,10 202,20 190,30'} /></svg>
  </div>
}
