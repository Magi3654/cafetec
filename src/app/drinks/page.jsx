import React from 'react'
import Link from 'next/link';
import ItemCard from '../items/ItemCard';
import Encabezado from '../encabezado/encabezado';

const Drinks = () => {
    return (
        <div className='flex flex-col'>
            <section>
                <Encabezado title={'Bebidas Calientes'}/>
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
                <Encabezado title={'Bebidas Frías'}/>
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