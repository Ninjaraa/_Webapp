import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';
import ProductDetails from '../sections/ProductDetails';
import BreadCrumbSection from '../sections/BreadcrumbSection';
import { IProductContextType, useProductContext } from '../contexts/ProductContext'

// View when clicking on "Quick view" on a product. Could be replace by ProductView

const QuickViewProduct: React.FC = () => {
  document.title = 'Product details | Fixxo.'

  const { id } = useParams<string>()
  const { product, get } = useProductContext() as IProductContextType

  useEffect(() => {
    get(id)
  }, [])

  return (
    <>
      <MainMenuSection />
      <BreadCrumbSection currentPage="Products" />
      <ProductDetails item={product} />
      <FooterSection />
    </>
  )
}

export default QuickViewProduct