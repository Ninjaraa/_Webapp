import React, { useEffect } from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import SalesNotification from '../components/SalesNotification';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import FooterSection from '../sections/FooterSection';
import { IProductContextType, useProductContext } from '../contexts/ProductContext';
import ProductsSection from '../sections/ProductsSection';
import RelatedProductsSection from '../sections/RelatedProductsSection'

// View to see details about a product

const ProductsView: React.FC = () => {
  document.title = 'Products | Fixxo.'
  const { productInfo, getProductInfo } = useProductContext() as IProductContextType

  useEffect(() => {
    getProductInfo(1)
  }, []);

  return (
    <>
      <MainMenuSection />
      <SalesNotification />
      <BreadcrumbSection currentPage="Products" />
      <ProductsSection title="Products" items={productInfo} />
      <RelatedProductsSection />
      <FooterSection />
    </>
  )
}
export default ProductsView