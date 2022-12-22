import React from 'react';
import ProductDetails from '../components/ProductDetails';
import { ProductItem } from '../models/productsModel'

interface IProductTilesProps {
  title?: string
  items: ProductItem[]
}

const ProductsSection: React.FC<IProductTilesProps> = ({ items = [] }) => {

  return (
    <>
      {
        items.map(product => <ProductDetails key={product.articleNumber} item={product} label={'productInformation'} />)
      }
    </>
  )
}
export default ProductsSection