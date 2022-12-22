import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

// Create a vendor with GraphQL/Apollo

const POST_VENDOR_QUERY = gql`mutation AddVendor ($name: String!) {addVendor (name: $name) {_id,name}}`
const GET_VENDORS_QUERY = gql`{ vendors { _id, name}}`

const VendorForm: React.FC = () => {
  const [vendor, setVendor] = useState('')
  const { refetch } = useQuery(GET_VENDORS_QUERY)
  const [addVendor] = useMutation(POST_VENDOR_QUERY)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addVendor({ variables: { name: vendor } })
    setVendor('')
  }

  return (
    <section className="__contact-form-section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className='col-md'>
            <h3>Add a new vendor</h3>
          </div>
          <div className="textarea">
            <input value={vendor} onChange={(e) => setVendor(e.target.value)} type="text" placeholder="Add a new vendor" />
          </div>
          <button type="submit" onClick={() => refetch({ vendor: '' })} className="form-btn">Save vendor</button>
        </form>
      </div>
    </section>

  )
}

export default VendorForm