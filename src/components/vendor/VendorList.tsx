import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { VendorListItem } from '../../models/vendorModel'

// List with all created vendors

const GET_VENDORS_QUERY = gql`{ vendors { _id, name } }`

const VendorList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_VENDORS_QUERY)

  if (loading) return <p>...Loading</p>
  if (error) return <p>This error occured: {error.message}</p>

  return (
    <section className="__product-list-section">
      <div className="container">
        <div className="product-list-details">
          <h5 className='mb-5'>Vendor list</h5>

          {
            data.vendors.map((vendor: VendorListItem) => (<div key={vendor._id}>{vendor.name} </div>))
          }

        </div>
      </div>
    </section>
  )
}

export default VendorList