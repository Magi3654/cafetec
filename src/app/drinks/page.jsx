import React from 'react'
import Link from 'next/link';
import ItemCard from '../items/ItemCard';

const Drinks = () => {
    return (
        <div className='flex flex-col'>
            <section>
                <div className='flex flex-1 justify-between mt-2'>
                    <button type="button" className="text-darkGray bg-gray focus:ring-2 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center inline-flex items-center m-3">
                        <span className='font-semibold' style={{whiteSpace: 'nowrap'}}>Bebidas Calientes</span>
                    </button>

                    <Link href="/main">
                        <button type="button" className="text-darkGray focus:outline-none font-semibold text-sm px-6 py-2.5 text-right inline-flex items-center m-3">
                        Mirar mas
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#6c757d" className="h-3.5 ml-2">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                        </svg>
                        </button>
                    </Link>
                </div>

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
                <div className='flex flex-1 justify-between mt-2'>
                    <button type="button" className="text-darkGray bg-gray focus:ring-2 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center inline-flex items-center m-3">
                        <span className='font-semibold' style={{whiteSpace: 'nowrap'}}>Bebidas Frias</span>
                    </button>

                    <Link href="/main">
                        <button type="button" className="text-darkGray focus:outline-none font-semibold text-sm px-6 py-2.5 text-right inline-flex items-center m-3">
                        Mirar mas
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#6c757d" className="h-3.5 ml-2">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                        </svg>
                        </button>
                    </Link>
                </div>

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