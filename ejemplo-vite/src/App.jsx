import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Navbar'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1>Bienvenidos</h1>
    </>
  )
}

export default App
