import { useState } from 'react'
import './App.css'
import TimeComponent from './components/TimeComponent'
import Count from './components/Count'
import PixelCursorImage from './components/PixelCursorImage'
import Paint from './components/Paint'

function App() {
  

  return (
    <>
      <TimeComponent/>
      <Count/>
      <PixelCursorImage/>
      <Paint/>
    </>
  )
}

export default App
