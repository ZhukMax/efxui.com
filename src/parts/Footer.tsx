import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 py-10">
      <div className="section text-sm text-slate-600 dark:text-slate-300 flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
        <div>© 2025 Max Zhuk — MIT & Apache-2.0</div>
        <div className="flex gap-3">
          <a href="https://github.com/ZhukMax/efx" target="_blank">GitHub</a>
          <a href="https://crates.io/crates/efx" target="_blank">crates.io</a>
          <a href="https://docs.rs/efx" target="_blank">docs.rs</a>
        </div>
      </div>
    </footer>
  )
}
