import React from 'react'

export default function Topbar(){
  return (
    <header className="sticky top-0 z-30 bg-white/70 dark:bg-slate-950/70 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="section h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-semibold">
          <img src="/favicon.svg" className="h-6 w-6" alt="EFx"/>
          EFx
        </a>
        <nav className="flex items-center gap-3">
          <a className="btn btn-ghost" href="https://github.com/ZhukMax/efx" target="_blank">⭐ GitHub</a>
          <a className="btn btn-ghost" href="https://crates.io/crates/efx" target="_blank">📦 crates.io</a>
          <a className="btn btn-primary" href="#docs">📖 Docs</a>
        </nav>
      </div>
    </header>
  )
}
