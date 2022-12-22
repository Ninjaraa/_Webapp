import React, { useState, useContext, createContext, useEffect } from 'react';
import { ListProducts, ProductRequest } from '../models/listproductsModel';
import { ProductsProviderProps } from '../models/productsProviderPropsModel'

//  Context for list products with create, update and delete function

export interface IListProductsContext {
    listproduct: ListProducts
    setlistproduct: React.Dispatch<React.SetStateAction<ListProducts>>
    productRequest: ProductRequest
    setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
    listproducts: ListProducts[]
    createListItem: (e: React.FormEvent) => void
    getListItem: (articleNumber: string) => void
    getAllListItems: () => void
    updateListItem: (e: React.FormEvent) => void
    removeListItem: (e: React.FormEvent) => void
}

export const ListProductsContext = createContext<IListProductsContext | null>(null)
export const useProductsContext = () => { return useContext(ListProductsContext) }

export const ListProductProvider = ({ children }: ProductsProviderProps) => {
    const listURL: string = 'http://localhost:5000/api/products'
    const product_default: ListProducts = { articleNumber: '', name: '', category: '', price: 0, imageName: '', label: '', description: '', rating: '', item: '' }
    const productRequest_default: ProductRequest = { name: '', category: '', imageName: '', label: '', price: 0}
    const [listproduct, setlistproduct] = useState<ListProducts>(product_default)
    const [productRequest, setProductRequest] = useState<ProductRequest>(productRequest_default)
    const [listproducts, setlistproducts] = useState<ListProducts[]>([])

    const createListItem = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch(`${listURL}`, {
            method: 'post', 
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
           
            body: JSON.stringify(productRequest)
        })

        if (res.status === 201) {
            const data = await res.json()
            console.log(data)
        } 
        else {
            const data = await res.json()
            console.log(data)
        }
    }

    const getListItem = async (articleNumber: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(`${listURL}/${articleNumber}`)
            setlistproduct(await res.json())
        }
    }

    const getAllListItems = async () => {
        const res = await fetch(listURL)
        setlistproducts(await res.json())
    }

    const updateListItem = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch(`${listURL}/${listproduct.articleNumber}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(listproduct)
        })

        if (res.status === 200) {
            const data = await res.json()
            console.log(data)
        }
    }

    const removeListItem = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch(`${listURL}/${listproduct.articleNumber}`, {
            method: 'delete',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        
        if (res.status === 200) {
            const data = await res.json()
            console.log(data)
        }
        
        else {
            const data = await res.json()
            console.log(data)
        }
    }

    return (
        <ListProductsContext.Provider value={{ listproduct, listproducts, productRequest, setlistproduct, createListItem, getListItem, getAllListItems, updateListItem, removeListItem, setProductRequest }}>
            {children}
        </ListProductsContext.Provider>
    )
}

export default ListProductProvider