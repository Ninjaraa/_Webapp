import React, { useEffect } from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';
import BreadCrumbSection from '../sections/BreadcrumbSection';
import AdjustProductsSection from '../sections/AdjustProductsSection';
import ProductProvider from '../contexts/ListProductsContext';
import ProductItems from '../components/ProductItems';
import ListProductProvider from '../contexts/ListProductsContext'
import { IListProductsContext, useProductsContext } from '../contexts/ListProductsContext'
import SignUpSignInSection from '../sections/SignUpSignInSection';

// Testpage for create, update or delete product from the product list

const CategoriesView: React.FC = () => {
  document.title = 'Categories | Fixxo.'

  const { listproducts, getAllListItems } = useProductsContext() as IListProductsContext

  useEffect(() => {
    getAllListItems()
  }, []);

  return (
    <>
      <ProductProvider>
      <ListProductProvider>
        <MainMenuSection />
          <BreadCrumbSection currentPage="Categories" />
          <SignUpSignInSection />
          <AdjustProductsSection />
        <div className='container mt-5'>
          <ProductItems listItem={listproducts} />
        </div>
          <FooterSection />
          </ListProductProvider>
      </ProductProvider>
    </>
  )
}

export default CategoriesView