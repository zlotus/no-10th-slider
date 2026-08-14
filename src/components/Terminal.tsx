export function Terminal({ failed = false }: { failed?: boolean }) {
  return <div className="terminal">
    <div className="terminal-bar"><i /><i /><i /><span>Harness · Bash handler</span></div>
    <div className="terminal-body"><p><b>$</b> npm test</p>{failed && <div className="terminal-failure"><strong>FAIL</strong> auth.test.ts<span>2 tests failed · 40 passed</span></div>}</div>
  </div>
}
