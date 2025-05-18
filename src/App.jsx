import React from 'react'
import './index.css'; // ya jiska naam bhi ho

import { Home } from './pages/Home'
import Header from './pages/header';

const App = () => {
  return (
    <div>
      <Header/>
      <h1 className="text-3xl font-bold text-red-600 text-center my-4">
        Sky Max Technologies — Empowering Your Digital Future
      </h1>
      <h2 className="text-lg text-gray-700 text-center max-w-2xl mx-auto px-4">
        Sky Max Technologies is an innovative IT solutions provider specializing in delivering
        cutting-edge technology and modern software development services. Our mission is to empower
        businesses through digital transformation and optimize their operational processes.
      </h2>
      <Home />
    </div>
  )
}

export default App
