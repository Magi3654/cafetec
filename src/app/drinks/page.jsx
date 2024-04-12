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
                        title={'Cafe'}
                        image={'cafe.jpg'}
                        description={'Vaso de 12 oz.'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Cafe'}
                        image={'cafe.jpg'}
                        description={'Vaso de 12 oz.'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Cafe'}
                        image={'cafe.jpg'}
                        description={'Vaso de 12 oz.'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Cafe'}
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
                        title={'Cafe'}
                        image={'cafe.jpg'}
                        description={'Vaso de 12 oz.'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Cafe'}
                        image={'cafe.jpg'}
                        description={'Vaso de 12 oz.'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Cafe'}
                        image={'cafe.jpg'}
                        description={'Vaso de 12 oz.'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Cafe'}
                        image={'cafe.jpg'}
                        description={'Vaso de 12 oz.'}
                        price={'$25.00'}>
                    </ItemCard>
                </div>

            </section>
            
        </div>
    )
}

export default Drinks