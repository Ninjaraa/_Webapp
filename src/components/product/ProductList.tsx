import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { ProductItem } from '../../models/productsModel'
import { VendorListItem } from '../../models/vendorModel'

// Listing all products from GraphQL

const GET_PRODUCTS_QUERY = gql`{ products { _id, imageName, name, category, label, price, vendor { name }}}`

const ProductList: React.FC = () => {

  const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY)
  if (loading) return <p>...Loading</p>
  if (error) return <p>This error occured: {error.message}</p>

  return (
    <section className="__product-list-section">
      <div className="container">
        <div className="product-list-details">
          {
            data.products.map((product: ProductItem) => (
              <div className='product-list'>
                <div className='col-sm'>
                  <p>{product.id}</p>
                </div>
                <div className='col-sm'>
                  <img src={product.imageName} />
                </div>
                <div className='col-sm'>
                  <p>{product.name}</p>
                </div>
                <div className='col-sm'>
                  <p>{product.category}</p>
                </div>
                <div className='col-sm'>
                  <p>{product.label}</p>
                </div>
                <div className='col-sm'>
                  <p>${product.price}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ProductList