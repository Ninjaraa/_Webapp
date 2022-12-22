import React from 'react';
import { ProductItem } from '../models/productsModel'

interface IAllProductTilesProps {
  id: number
  name: string
  category: string
  imageName: string
  price: number
  product: ProductItem[]
}

const ProductTiles: React.FC<IAllProductTilesProps> = ({ product = [] }) => {

  return (

    <section className="__product-grid">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">

          {
            product.map((product: ProductItem) => (<div className="mb-3">{product.articleNumber} {product.name} {product.category} {product.imageName} {product.price}</div>))
          }

        </div>
      </div>
    </section>
  )
}

export default ProductTiles