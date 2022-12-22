import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';
import { ProductItem } from '../models/productsModel'

//  View for shoppingcart

interface ShoppingCartView {
  items: ProductItem
}

const ShoppingCartView: React.FC<ShoppingCartView> = ({ items }) => {

  return (
    <>
      <MainMenuSection />
      <ShoppingCartView items={items} />
      <FooterSection />
    </>
  )
}

export default ShoppingCartView