
import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';
import BreadCrumbSection from '../sections/BreadcrumbSection';
import ProductProvider from '../contexts/ProductContext';
import ProductForm from '../components/product/CreateProduct';
import ProductList from '../components/product/ProductList';
import ListProductProvider from '../contexts/ListProductsContext'

// Create a new product (in this case from GraphQL) and see all products in a list

const ProductListView: React.FC = () => {

  return (
    <>
      <ProductProvider>
      <ListProductProvider>
        <MainMenuSection />
        <BreadCrumbSection currentPage="All Products" />
        <div className='container mt-5'>
          <ProductForm />
        </div>
        <div className='container mt-5'>
          <ProductList />
        </div>
          <FooterSection />
          </ListProductProvider>
      </ProductProvider>
    </>
  )
}

export default ProductListView