import React, { useEffect } from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';
import ShowCaseSection from '../sections/ShowCaseSection';
import SeasonSaleSection from '../sections/SeasonSaleSection';
import OurSpecialitySection from '../sections/OurSpecialitySection';
import TopPicksSection from '../sections/TopPicksSection';
import ProductTiles from '../sections/ProductTiles';
import DiscountSection from '../sections/DiscountSection';
import CustomerServiceSection from '../sections/CustomerServiceSection';
import FlashSaleCardSection from '../sections/FlashSaleCardSection';
import FlashSaleCardRightSection from '../sections/FlashSaleCardRightSection';
import SmallCardSection from '../sections/SmallCardSection';
import { IProductContextType, useProductContext } from '../contexts/ProductContext'

const HomeView: React.FC = () => {
  document.title = 'Home | Fixxo.'

  const { featuredProducts, getFeaturedProducts } = useProductContext() as IProductContextType

  useEffect(() => {
    getFeaturedProducts(8)
  }, []);

  return (
    <>
      <MainMenuSection />
      <ShowCaseSection />
      <SeasonSaleSection />
      <ProductTiles title="Featured Products" items={featuredProducts} />
      <TopPicksSection />
      <OurSpecialitySection title="Product Speciality" />
      <FlashSaleCardSection />
      <FlashSaleCardRightSection />
      <DiscountSection />
      <SmallCardSection />
      <CustomerServiceSection />      
      <FooterSection />
    </>
  )
}

export default HomeView