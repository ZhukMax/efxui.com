import React from 'react'

const items = [
  { ver: '0.5', status: '✅', text: 'Attributes, core tags, windows & panels' },
  { ver: '0.6', status: '🚧', text: 'Components, events (onClick), classes' },
  { ver: '0.7', status: '🔮', text: 'Themes, tables, tabs' },
]

export default function Roadmap(){
  return (
    <section className="section py-12">
      <h2 className="text-2xl mb-4">Roadmap</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {items.map((it,i)=>(
          <div key={i} className="card">
            <div className="flex items-center gap-2">
              <span className="text-xl">{it.status}</span>
              <b>v{it.ver}</b>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
