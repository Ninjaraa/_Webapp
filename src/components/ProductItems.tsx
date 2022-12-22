import React from 'react';
import ProductItemList from './ProductItemList';
import { ListProducts } from '../models/listproductsModel'

// The product item listing page. Could be replaced with GraphQL version (component/product/ProductList)

interface IProductItems {
  listItem: ListProducts[]
}

const ProductItems: React.FC<IProductItems> = ({ listItem = []}) => {

  return (
    <section className="__product-list-section">
      <div className="container">
        <div className="product-list-details">

        {
            listItem.map(listproduct => <ProductItemList key={listproduct.articleNumber} listItem={listproduct} />)
        }

        </div>
      </div>
    </section>
  )
}

export default ProductItems