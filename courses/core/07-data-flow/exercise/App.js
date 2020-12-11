import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthStateProvider } from 'YesterTech/AuthState'
import { ShoppingCartProvider } from 'YesterTech/ShoppingCartState'
import PrimaryLayout from 'YesterTech/PrimaryLayout'
import 'YesterTech/styles/global-styles.scss'

import { FavoriteProductProvider } from './FavoriteProductState'

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <FavoriteProductProvider>
          <AuthStateProvider>
            <PrimaryLayout />
          </AuthStateProvider>
        </FavoriteProductProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}

export default App
