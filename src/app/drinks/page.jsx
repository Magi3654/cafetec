import React from 'react'
import Link from 'next/link';
import ItemCard from '../items/ItemCard';

const Drinks = () => {
    return (
        <div className='flex flex-col'>
            <section>
                <button type="button" className="text-darkGray bg-gray focus:ring-2 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center inline-flex items-center m-3">
                    <span className='font-semibold' style={{whiteSpace: 'nowrap'}}>Bebidas Calientes</span>
                </button>

                <div className="flex overflow-x-scroll font-semibold text-center mx-4">
                    <ItemCard
                        title={'Café'}
                        image={'cafe.jpg'}
                        description={'Vaso de 12 oz.'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Té caliente'}
                        image={'cafe.jpg'}
                        description={'Vaso de 12 oz.'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Cappuccino'}
                        image={'cafe.jpg'}
                        description={'Vaso de 12 oz.'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Chocolate'}
                        image={'cafe.jpg'}
                        description={'Vaso de 12 oz.'}
                        price={'$25.00'}>
                    </ItemCard>
                </div>

            </section>
            
            <section>
                <button type="button" className="text-darkGray bg-gray focus:ring-2 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center inline-flex items-center m-3">
                    <span className='font-semibold' style={{whiteSpace: 'nowrap'}}>Bebidas Frias</span>
                </button>

                <div className="flex overflow-x-scroll font-semibold text-center mx-4">
                    <ItemCard
                        title={'Coca-Cola'}
                        image={'cafe.jpg'}
                        description={'600 ml.'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Licuado'}
                        image={'cafe.jpg'}
                        description={'500 ml.'}
                        price={'$35.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Té Arizona'}
                        image={'cafe.jpg'}
                        description={'460 ml.'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Agua Kirkland'}
                        image={'cafe.jpg'}
                        description={'500 ml.'}
                        price={'$10.00'}>
                    </ItemCard>
                </div>

            </section>
            
        </div>
    )
}

export default Drinks