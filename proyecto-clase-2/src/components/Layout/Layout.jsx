import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const Layout = ({children}) => {
    return (
      <div>
          <Navbar/>
          <div>
              { children }
          </div>
          <Footer></Footer>
      </div>
    )
  }

export default Layout