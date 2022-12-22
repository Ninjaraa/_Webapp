import React, { useEffect } from 'react';
import FlashSaleCard from '../components/FlashSaleCard';
import { IProductContextType, useProductContext } from '../contexts/ProductContext'

const FlashSaleCardSection: React.FC = () => {
    const { flashSale, getFlashSale } = useProductContext() as IProductContextType
    const { flashSales, getFlashSales } = useProductContext() as IProductContextType

    useEffect(() => {
        getFlashSale(2)
    }, []);

    useEffect(() => {
        getFlashSales(2)
    }, []);

    return (
        <section className="__flashsale-section-l">
            <div className='container'>
                <div className="grid">
                    <div className="flascard-background" id="item-0"></div>
                    <div className="flashcard-content" id="item-1">
                        <h2 className='h2-flashsale'>2 FOR USD $29</h2>
                        <button className="btn-card-theme">FLASH SALE</button>
                    </div>

                    <div className="flashcardsrow" id="item-2">
                        {
                            flashSale.map(product => <FlashSaleCard key={product.articleNumber} item={product} />)
                        }
                    </div>
                    <div className="flashcardsrow" id="item-3">
                        {
                            flashSales.map(product => <FlashSaleCard key={product.articleNumber} item={product} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FlashSaleCardSection