import React from 'react'
import './style.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { ProductProvider } from './contexts/ProductContext'
import { ListProductProvider } from './contexts/ListProductsContext'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'
import ContactView from './views/ContactView'
import HomeView from './views/HomeView'
import CategoriesView from './views/CategoriesView'
import NotFoundView from './views/NotFoundView'
import ProductListView from './views/ProductListView'
import QuickViewProduct from './views/QuickViewProduct'
import ProductDetailedView from './views/ProductDetailedView'
import SignInView from './views/SignInView'
import SignUpView from './views/SignUpView'
import VendorView from './views/VendorView'
import ProductList from './views/ProductView'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ShoppingCartProvider>
          <ProductProvider>
            <ListProductProvider>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/contacts" element={<ContactView />} />
              <Route path="*" element={<NotFoundView />} />
              <Route path="/products" element={<ProductDetailedView />} />
              <Route path="/products/:id" element={<QuickViewProduct />} />
              <Route path="/categories" element={<CategoriesView />} />
              <Route path="/allproducts" element={<ProductListView />} />
              <Route path="/signin" element={<SignInView />} />
              <Route path="/signup" element={<SignUpView />} />
              <Route path='/productview' element={<ProductList />} />
              <Route path='/vendorview' element={<VendorView />} />
              </Routes>
            </ListProductProvider>
          </ProductProvider>
        </ShoppingCartProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;