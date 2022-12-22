import React, { useState, useContext, createContext } from 'react';
import { ProductItem } from '../models/productsModel';
import { ProductsProviderProps } from '../models/productsProviderPropsModel'

// Product context for fetching the products with right information

export interface IProductContextType {
    product: ProductItem
    products: ProductItem[]
    featuredProducts: ProductItem[]
    flashSaleProduct: ProductItem[]
    flashSaleProducts: ProductItem[]
    flashSale: ProductItem[]
    flashSales: ProductItem[]
    relatedProducts: ProductItem[]
    latestProducts: ProductItem[]
    bestsellingProducts: ProductItem[]
    topReactedProducts: ProductItem[]
    productInfo: ProductItem[]
    productInformation: ProductItem[]
    
    get: (articleNumber?: string) => void
    getAll: () => void
    getFeaturedProducts: (take: number) => void
    getFlashSaleProduct: (take: number) => void
    getFlashSaleProducts: (take: number) => void
    getFlashSale: (take: number) => void
    getFlashSales: (take: number) => void
    getRelatedProducts: (take: number) => void
    getLatestProducts: (take: number) => void
    getBestSellingProducts: (take: number) => void
    getTopReactedProducts: (take: number) => void
    getProductInfo: (take: number) => void
    getProductInformation: (take: number) => void
}

export const ProductContext = createContext<IProductContextType | null>(null);
export const useProductContext = () => { return useContext(ProductContext) }

export const ProductProvider: React.FC<ProductsProviderProps> = ({ children }) => {
    const baseURL: string = 'http://localhost:5000/api/products'
    const EMPTY_PRODUCT: ProductItem = { articleNumber: '', name: '', category: '', price: 0, imageName: '', label: '', description: '', rating: '' }
    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<ProductItem[]>([])
    const [flashSaleProduct, setFlashSaleProduct ] = useState<ProductItem[]>([])
    const [flashSaleProducts, setFlashSaleProducts] = useState<ProductItem[]>([])
    const [flashSale, setFlashSale ] = useState<ProductItem[]>([])
    const [flashSales, setFlashSales] = useState<ProductItem[]>([])  
    const [latestProducts, setLatestProducts] = useState<ProductItem[]>([])
    const [relatedProducts, setRelatedProducts] = useState<ProductItem[]>([])
    const [bestsellingProducts, setBestSellingProducts] = useState<ProductItem[]>([])
    const [topReactedProducts, setTopReactedProducts] = useState<ProductItem[]>([])
    const [productInfo, setProductInfo] = useState<ProductItem[]>([])
    const [productInformation, setProductInformation] = useState<ProductItem[]>([])

    const get = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(`${baseURL}/product/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getAll = async () => {
        const res = await fetch(baseURL)
        setProducts(await res.json())
    }

    const getFeaturedProducts = async (take: number = 0) => {
        let url = `${baseURL}/featured`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setFeaturedProducts(await res.json())
    }

    const getProductInfo = async (take: number = 0) => {
        let url = `${baseURL}/productinfo`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setProductInfo(await res.json())
    }

    const getProductInformation = async (take: number = 0) => {
        let url = `${baseURL}/productinformation`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setProductInformation(await res.json())
    }


    const getFlashSaleProduct = async (take: number = 0) => {
        let url = `${baseURL}/flashsaleproduct`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setFlashSaleProduct(await res.json())
    }

    const getFlashSaleProducts = async (take: number = 0) => {
        let url = `${baseURL}/flashsaleproducts`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setFlashSaleProducts(await res.json())
    }

    const getFlashSale = async (take: number = 0) => {
        let url = `${baseURL}/flashsale`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setFlashSale(await res.json())
    }

    const getFlashSales = async (take: number = 0) => {
        let url = `${baseURL}/flashsales`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setFlashSales(await res.json())
    }

    const getTopReactedProducts = async (take: number = 0) => {
        let url = `${baseURL}/topreacted`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setTopReactedProducts(await res.json())
    }

    const getLatestProducts = async (take: number = 0) => {
        let url = `${baseURL}/latestproducts`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setLatestProducts(await res.json())
    }

    const getRelatedProducts = async (take: number = 0) => {
        let url = `${baseURL}/relatedproducts`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setRelatedProducts(await res.json())
    }

    const getBestSellingProducts = async (take: number = 0) => {
        let url = `${baseURL}/bestselling`
        if (take !== 0)
            url += `/${take}`
        const res = await fetch(url)
        setBestSellingProducts(await res.json())
    }

    return <ProductContext.Provider value={{ product, productInfo, productInformation, products, featuredProducts, flashSale, flashSales, flashSaleProduct, flashSaleProducts, relatedProducts, latestProducts, bestsellingProducts, topReactedProducts, get, getFeaturedProducts, getProductInfo, getProductInformation, getAll, getFlashSaleProducts, getFlashSaleProduct, getRelatedProducts, getLatestProducts, getBestSellingProducts, getTopReactedProducts, getFlashSales, getFlashSale }}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider