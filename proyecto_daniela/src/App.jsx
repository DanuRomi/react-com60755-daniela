import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer mensaje="Bienvenido!"></ItemListContainer>
    </>
  )
}

export default App