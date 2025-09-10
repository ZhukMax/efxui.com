import React from 'react'

const features = [
  { title: 'Styled components', desc: 'Label, Button, Row, Column, Separator and more.', icon:'🎨' },
  { title: 'Expressions', desc: 'Use {expr} inside text with proper formatting and escaping.', icon:'🧩' },
  { title: 'Attributes', desc: 'Type-checked numeric, boolean and color attributes.', icon:'🧪' },
  { title: 'Panels & Windows', desc: 'Open Window, CentralPanel, SidePanel via ui.ctx().', icon:'🪟' },
]

export default function Features(){
  return (
    <section className="section py-12">
      <h2 className="text-2xl mb-6">Key Features</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f,i)=>(
          <div key={i} className="card">
            <div className="text-2xl">{f.icon}</div>
            <div className="mt-2 font-medium">{f.title}</div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
