import React, { useEffect } from 'react';
import SmallproductCard from '../components/SmallProductCard';
import { IProductContextType, useProductContext } from '../contexts/ProductContext'

const SmallCardSection: React.FC = () => {
  const { bestsellingProducts, getBestSellingProducts } = useProductContext() as IProductContextType
  const { topReactedProducts, getTopReactedProducts } = useProductContext() as IProductContextType
  const { latestProducts, getLatestProducts } = useProductContext() as IProductContextType

  useEffect(() => {
    getLatestProducts(3)
  }, []);

  useEffect(() => {
    getBestSellingProducts(3)
  }, []);

  useEffect(() => {
    getTopReactedProducts(3)
  }, []);

  return (
    <section className="__small-card-section">
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 className='small-card-headline'>Best Selling Products</h1>

            {
              bestsellingProducts.map(product => <SmallproductCard key={product.articleNumber} item={product} />)
            }

          </div>

          <div className='col'>
            <h1 className='small-card-headline'>Top Reacted Products</h1>

            {
              topReactedProducts.map(product => <SmallproductCard key={product.articleNumber} item={product} />)
            }

          </div>

          <div className='col'>
            <h1 className='small-card-headline'>Latest Products</h1>

            {
              latestProducts.map(product => <SmallproductCard key={product.articleNumber} item={product} />)
            }

          </div>
        </div>
      </div>
      <hr></hr>
    </section>
  )
}

export default SmallCardSection