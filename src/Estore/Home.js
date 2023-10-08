import React from 'react'
import { CommonProvider } from './contexts/common/commonContext';
import { CartProvider } from './contexts/cart/cartContext';
import Header from './components/common/Header';
import RouterRoutes from './routes/RouterRoutes';
import BackTop from './components/common/BackTop';
import { FiltersProvider } from './contexts/filters/filtersContext';

function Home() {
  return (
    <CommonProvider>
    <FiltersProvider>
      <CartProvider>
        <Header />
        <RouterRoutes />
       
        <BackTop />
      </CartProvider>
    </FiltersProvider>
  </CommonProvider>
  )
}

export default Home