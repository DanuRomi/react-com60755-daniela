import './App.css'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer'
import Layout from './Components/Layout/Layout'
import Error from './Components/Error'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<ItemListContainer mensaje="Productos" />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer mensaje="Productos" />} />
            <Route path='/producto/:productId' element={<ItemDetailContainer />} />
            <Route path='*' element={<Error/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App