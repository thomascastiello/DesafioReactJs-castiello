import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import CategoriesContainer from './CategoriesContainer'
import Header from './Header'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'


const Router = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/categories" element={<CategoriesContainer />} />
        <Route path="/cart" element={<Cart/>} />
        <Route
          path="*"
          element={
            <div className="error404">
              <h1>Error 404</h1>
            </div>
          }
        />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default Router