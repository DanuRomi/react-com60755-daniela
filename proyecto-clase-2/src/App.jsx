import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {

  const itemListContainerProps = {
    greeting:"Hola, bienvenido a mi tienda"
  }

  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer 
        { ...itemListContainerProps} //
      ></ItemListContainer>
      <ItemCount></ItemCount>
    </>
  )
}

export default App
