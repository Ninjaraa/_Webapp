import React, { useEffect } from 'react';
import { IProductContextType, useProductContext } from '../contexts/ProductContext';
import FlashSaleCard from '../components/FlashSaleCard'

const FlashSaleCardRightSection: React.FC = () => {
    const { flashSaleProduct, getFlashSaleProduct } = useProductContext() as IProductContextType
    const { flashSaleProducts, getFlashSaleProducts } = useProductContext() as IProductContextType

    useEffect(() => {
        getFlashSaleProduct(2)
    }, []);

    useEffect(() => {
        getFlashSaleProducts(2)
    }, []);

    return (
        <section className="__flashsale-section-r">
            <div className='container'>
                <div className="grid">
                    <div className="flascard-background" id="item-0"></div>
                    <div className="flashcard-content" id="item-1">
                        <h2 className='h2-flashsale'>2 FOR USD $49</h2>
                        <button className="btn-card-theme">FLASH SALE</button>
                    </div>
                    <div className="flashcardsrow" id="item-2">
                        {
                            flashSaleProduct.map(product => <FlashSaleCard key={product.articleNumber} item={product} />)
                        }
                    </div>
                    <div className="flashcardsrow" id="item-3">
                        {
                            flashSaleProducts.map(product => <FlashSaleCard key={product.articleNumber} item={product} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FlashSaleCardRightSection