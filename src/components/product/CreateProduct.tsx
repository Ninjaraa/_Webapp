import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { VendorListItem } from '../../models/vendorModel'

// Create product an vendor with GraphQL/Apollo

const GET_VENDORS_QUERY = gql`{ vendors { _id, name}}`
const POST_PRODUCT_QUERY = gql`mutation AddProduct ($name: String!, $price: String!, $label: String!, $category: String!, $description: String!, $vendorId: ID!) {
addProduct (name: $name, price: $price, label: $label, category: $category, description: $description, vendorId: $vendorId) {
name}}`

const CreateProduct = () => {
  const default_value = { name: '', price: '', category: '', label: '', vendorId: '0', description: '', imageName: '' }
  const [product, setProduct] = useState(default_value)
  const { loading, error, data, refetch } = useQuery(GET_VENDORS_QUERY)
  const [addProduct] = useMutation(POST_PRODUCT_QUERY)

  const populateVendors = () => {
    if (loading) return <option disabled>...Loading</option>
    if (error) return <option disabled>An error occured</option>

    return data.vendors.map((vendor: VendorListItem) => <option key={vendor._id} value={vendor._id}>{vendor.name}</option>)

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addProduct({ variables: product })
    setProduct(default_value)
  }

  return (
    <section className="__contact-form-section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className='col-md'>
            <h3>Add product</h3>
          </div>
          <div className="textarea">
            <input value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} type="text" placeholder="Add product name" />
          </div>
          <div className="textarea">
            <input value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} type="text" placeholder="Add a price" />
          </div>
          <div className="textarea">
            <input value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })} type="text" placeholder="Add a category" />
          </div>
          <div className="textarea">
            <input value={product.label} onChange={(e) => setProduct({ ...product, label: e.target.value })} type="text" placeholder="Add a label" />
          </div>
          <div className="textarea">
            <input value={product.imageName} onChange={(e) => setProduct({ ...product, imageName: e.target.value })} type="text" placeholder="Add a product image" />
          </div>
          <div className="textarea">
            <select value={product.vendorId} onChange={(e) => setProduct({ ...product, vendorId: e.target.value })} >
              <option value="0" disabled>Pick a vendor</option>
              {populateVendors()}
            </select>
          </div>
          <div className="textarea">
            <textarea value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} placeholder="Add a description" />
          </div>
          <div>
            <button type="submit" onClick={() => refetch({ product: '' })} className="form-btn">Add product</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CreateProduct