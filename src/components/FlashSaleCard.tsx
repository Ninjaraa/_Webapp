import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartType, useShoppingCartContext } from '../contexts/ShoppingCartContext';
import { ProductItem } from '../models/productsModel'

// FlashSaleCard item

interface IFlashSaleCardProps {
  item: ProductItem
}

const FlashSaleCard: React.FC<IFlashSaleCardProps> = ({ item }) => {
  const { incrementQuantity } = useShoppingCartContext() as ShoppingCartType;

  return (
    <div className="flashcard">
      <div className="flashcard-img">
        <img src={item.imageName} alt={item.name} />
        <div className="flashcard-menu">
          <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
          <button className="menu-link"><i className="fa-regular fa-code-compare fa-flip-horizontal"></i></button>
          <button onClick={() => incrementQuantity({ articleNumber: item.articleNumber, product: item, imageName: item.imageName, name: item.name, quantity: 1 })} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
        </div>
        <NavLink to={`/products/${item.articleNumber}`} className="card-btn">QUICK VIEW</NavLink>
        <div className="flashcard-body">
          <p className="flashcard-category">{item.category}</p>
          <h5 className="flashcard-title">{item.name}</h5>
          <p className="flashcard-rating">
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
          </p>
          <div className="flashcard-price">
            <p className="discount-price">${item.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlashSaleCard