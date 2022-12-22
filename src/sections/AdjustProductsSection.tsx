import React from "react";
import { IListProductsContext, ListProductsContext } from '../contexts/ListProductsContext'

// To create or update a new product

const AdjustProductsSection: React.FC = () => {
    const { productRequest, setProductRequest, createListItem, listproduct, setlistproduct, updateListItem, removeListItem } = React.useContext(ListProductsContext) as IListProductsContext

    return (
        <section className="__product-form-section">
            <div className="container">

            <div className='adjust-product-form'>                
                <form onSubmit={createListItem}>
                    <h2>Create product</h2>
                    <input type="hidden" value={productRequest.articleNumber} />
                    <input name="createName" value={productRequest.name} onChange={(e) => setProductRequest({ ...productRequest, name: e.target.value })} type="text" placeholder="Name" className="form-control" />
                    <input name="createImageName" value={productRequest.imageName} onChange={(e) => setProductRequest({ ...productRequest, imageName: e.target.value })} type="text" className="form-control" placeholder="Image" />
                    <input name="createCategory" value={productRequest.category} onChange={(e) => setProductRequest({ ...productRequest, category: e.target.value })} type="text" className="form-control" placeholder="Category" />
                    <input name="createPrice" value={productRequest.price} onChange={(e) => setProductRequest({ ...productRequest, price: Number(e.target.value) })} type="text" className="form-control" placeholder="Price" />
                    <button type="submit" className="create-product-btn">Create product</button>
                </form>
            </div>
            
                <div className='adjust-product-form'>
                <form onSubmit={updateListItem}>
                    <h2>Update product</h2>
                    <input type="hidden" value={listproduct.articleNumber} />
                    <input name="articleNoUpdate" value={listproduct.articleNumber} onChange={(e) => setlistproduct({ ...listproduct, articleNumber: e.target.value })} type="text" className="form-control" placeholder="ID" />
                    <input name="createName" value={listproduct.name} onChange={(e) => setlistproduct({ ...listproduct, name: e.target.value })} type="text" placeholder="Name" className="form-control" />
                    <input name="createImageName" value={listproduct.imageName} onChange={(e) => setlistproduct({ ...listproduct, imageName: e.target.value })} type="text" className="form-control" placeholder="Image" />
                    <input name="createCategory" value={listproduct.category} onChange={(e) => setlistproduct({ ...listproduct, category: e.target.value })} type="text" className="form-control" placeholder="Category" />
                    <input name="createPrice" value={listproduct.price} onChange={(e) => setlistproduct({ ...listproduct, price: Number(e.target.value) })} type="text" className="form-control" placeholder="Price" />
                    <button type="submit" className="product-btn">Update product</button>
                </form>
                </div>

                <div className='adjust-product-form'>
                <form onSubmit={removeListItem}>
                    <h2>Delete product</h2>
                    <input type="hidden" value={listproduct.articleNumber} />
                    <input name="deleteArticleNo" value={listproduct.articleNumber} onChange={(e) => setlistproduct({ ...listproduct, articleNumber: e.target.value })} type="text" className="form-control" placeholder="ArticleNumber" />
                    <button type="submit" className="product-btn">Delete product</button>
                </form>
                </div>
                </div>                
        </section>
    )
}

export default AdjustProductsSection