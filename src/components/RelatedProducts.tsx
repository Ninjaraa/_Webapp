import React from 'react';
import { NavLink } from 'react-router-dom';
import { useShoppingCartContext, ShoppingCartType } from '../contexts/ShoppingCartContext'
import { ProductItem } from '../models/productsModel'

// Related products on product detailed page (/products)

interface IRelatedProduct {
  item: ProductItem
}

const RelatedProducts: React.FC<IRelatedProduct> = ({ item }) => {
  const { incrementQuantity } = useShoppingCartContext() as ShoppingCartType

  return (
    <div className="col">
      <div className="card">
        <div className="card-img">
          <img src={item.imageName} alt={item.name} />
          <div className="card-menu">
            <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
            <button className="menu-link"><i className="fa-regular fa-code-compare fa-flip-horizontal"></i></button>
            <button onClick={() => incrementQuantity({ articleNumber: item.articleNumber, product: item, imageName: item.imageName, name: item.name, quantity: 1 })} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
          </div>
          <NavLink to={`/products/${item.articleNumber}`} className="card-btn">QUICK VIEW</NavLink>
          <div className="card-body">
            <p className="card-category">{item.category}</p>
            <h5 className="card-title">{item.name}</h5>
            <p className="card-rating">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
            </p>
            <div className="card-price">
              <p className="original-price">${item.price}</p>
              <p className="discount-price">${item.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts