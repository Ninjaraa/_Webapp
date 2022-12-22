import React from 'react';
import { ListProducts } from '../models/listproductsModel'

// List with all product items

interface IProductItemList {
    listItem: ListProducts
}

const ProductItemList: React.FC<IProductItemList> = ({ listItem }) => {

    return (
        <section className="__product-list-section">
            <div className="container">
                <div className="product-list-details">
                    <div className='product-list'>
                        <div className='col-sm'>
                            <img src={listItem.imageName} alt={listItem.name} />
                        </div>
                        <div className='col-sm'>
                            <p>{listItem.name}</p>
                        </div>
                        <div className='col-sm'>
                            <p>{listItem.category}</p>
                        </div>
                        <div className='col-sm'>
                            <p>${listItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductItemList