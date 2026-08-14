export function Terminal({
  failed = false,
  passed = false,
  command = 'npm test',
  title = 'Harness · Bash handler',
  failureText = '2 tests failed · 40 passed',
  successText = '42 tests passed',
}: {
  failed?: boolean
  passed?: boolean
  command?: string
  title?: string
  failureText?: string
  successText?: string
}) {
  return <div className="terminal">
    <div className="terminal-bar"><i /><i /><i /><span>{title}</span></div>
    <div className="terminal-body">
      <p><b>$</b> {command}</p>
      {failed && <div className="terminal-failure"><strong>FAIL</strong> auth.test.ts<span>{failureText}</span></div>}
      {passed && <div className="terminal-success"><strong>PASS</strong> auth.test.ts<span>{successText}</span></div>}
    </div>
  </div>
}
