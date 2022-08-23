import React from 'react'
import { CartProvider } from './components/context/useContext'
import Router from './components/Router'



function App() {
  return (
    <>
    <CartProvider>
      <Router />
    </CartProvider>
    </>
  )
}

export default App
