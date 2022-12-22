import React from 'react';
import { ShoppingCartType, useShoppingCartContext } from '../contexts/ShoppingCartContext';
import { ProductItem } from '../models/productsModel'

// The product choosen when clicking on "Quick view" from a product card

interface ProductDetailsProps {
  item: ProductItem
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ item }) => {
  const { incrementQuantity } = useShoppingCartContext() as ShoppingCartType

  return (
    <>
      <div className='product-details'>
        <div className='container'>
          <div>
            <h1>{item.name}</h1>
            <img src={item.imageName} alt={item.name} />
          </div>
          <div>
            <p>$ {item.price}</p>
          </div>
          <div>
            <button onClick={() => incrementQuantity({ product: item, articleNumber: item.articleNumber, quantity: 1 })} className="btn-dark-theme">ADD TO BASKET</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails