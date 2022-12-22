import React, { useEffect } from 'react';
import { IProductContextType, useProductContext } from '../contexts/ProductContext';
import RelatedProducts from '../components/RelatedProducts'

const RelatedProductsSection: React.FC = () => {
  const { relatedProducts, getRelatedProducts } = useProductContext() as IProductContextType

  useEffect(() => {
    getRelatedProducts(4)
  }, []);

  return (
    <section className="__related-products">
      <div className="container">
        <h1 className='section-title'>Related Products</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">

          {
            relatedProducts.map(product => <RelatedProducts key={product.articleNumber} item={product} />)
          }

        </div>
      </div>
    </section>
  )
}
export default RelatedProductsSection