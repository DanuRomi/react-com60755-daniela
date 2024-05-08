import { useState } from 'react'
import './App.css'
import Home  from './pages/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {

  const itemListContainerProps = {
    greeting:"Hola, bienvenido a mi tienda"
  }

  return (
    <>   
      <Home /> 
    </>
  )
}

export default App
