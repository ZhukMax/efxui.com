import React from 'react'

const code = String.raw`use efx::efx;

efx!(ui, r#"
  <Column gap="8" align="center">
    <Heading>EFx Demo</Heading>
    <Row>
      <Label color="green">Hello</Label>
      <Button tooltip="Click me!">World</Button>
    </Row>
    <Separator space="12"/>
  </Column>
"#);`

export default function CodeExample(){
  return (
    <section className="section py-12">
      <h2 id="docs" className="text-2xl mb-4">Quick Example</h2>
      <div className="code font-mono text-sm leading-6">
        <pre><code>{code}</code></pre>
      </div>
      <div className="mt-4 flex gap-3">
        <a className="btn btn-ghost" href="https://docs.rs/efx" target="_blank">Docs on docs.rs</a>
        <a className="btn btn-ghost" href="https://github.com/ZhukMax/efx" target="_blank">Open GitHub</a>
        <a className="btn btn-ghost" href="/wasm-demo/" target="_blank">WASM Demo (placeholder)</a>
      </div>
    </section>
  )
}
