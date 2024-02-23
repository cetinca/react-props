import { useState } from 'react'
import './App.css'
import Jokes from './components/Jokes'

function App() {
  return (
    <>
      <div className='app'>
        <Jokes/>
      </div>
    </>
  )
}

export default App
