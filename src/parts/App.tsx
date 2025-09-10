import React from 'react'
import Hero from './Hero'
import Features from './Features'
import CodeExample from './CodeExample'
import Roadmap from './Roadmap'
import Footer from './Footer'
import Topbar from './Topbar'

export default function App(){
  return (
    <div>
      <Topbar/>
      <Hero/>
      <Features/>
      <CodeExample/>
      <Roadmap/>
      <Footer/>
    </div>
  )
}
