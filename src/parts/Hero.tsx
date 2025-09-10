import React from 'react'

export default function Hero(){
  return (
    <section className="section hero-gradient pt-16 pb-10">
      <div className="text-center max-w-3xl mx-auto">
        <span className="badge">Rust • egui • eframe • bevy_egui</span>
        <h1 className="mt-4 text-4xl sm:text-5xl">EFx — Declarative UI for Rust & egui</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Write XML-like templates in Rust and compile them into egui calls. Less boilerplate, more focus.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a className="btn btn-primary" href="https://github.com/ZhukMax/efx" target="_blank">Star on GitHub</a>
          <a className="btn btn-ghost" href="https://docs.rs/efx" target="_blank">View docs.rs</a>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card"><b>⚡ Less boilerplate</b><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Compact XML instead of long egui calls.</p></div>
          <div className="card"><b>🦀 Type-safe</b><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Attributes are validated at compile time.</p></div>
          <div className="card"><b>🔌 Backends</b><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">eframe • bevy_egui • winit+wgpu</p></div>
        </div>
      </div>
    </section>
  )
}
