
import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';
import BreadCrumbSection from '../sections/BreadcrumbSection';
import ProductProvider from '../contexts/ProductContext';
import ProductList from '../components/product/ProductList';
import ProductForm from '../components/product/CreateProduct';
import ListProductProvider from '../contexts/ListProductsContext'

// All product items in a list (could be replace with the list from GraphQL (ProductDetailedView))

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