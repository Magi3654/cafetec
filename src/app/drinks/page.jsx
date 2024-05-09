import React from 'react'
import ItemCard from '../items/ItemCard';
import Encabezado from '../encabezado/Encabezado';
import Dropdown from '../dropdown/Dropdown';
import Search from '../search/page';
import Link from 'next/link';

function Drinks() {
  return (
    <div className='p-2 w-full'>
       <section className='w-full'>
            <Link href="/main">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='flex-none h-6 mt-4 mx-2' fill='#000'>
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                </svg>
            </Link>
            <p className='m-3 font-bold text-2xl'>Bebidas</p>
        </section>

        <div className="flex overflow-x-scroll font-semibold text-center justify-center">
            <Link href={'/drinks'}>
                <button type="button" className="text-white bg-lightBrown focus:ring-2 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center inline-flex items-center m-3">
                    Bebidas Calientes
                </button>
            </Link>

            <Link href={'/snacks'}>
                <button type="button" className="text-white bg-lightBrown focus:ring-2 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center inline-flex items-center m-3">
                    Bebidas Frias
                </button>
            </Link>
        </div>

        <div className="overflow-y-scroll font-semibold text-center grid grid-cols-2 gap-4" class="image-container">
            <ItemCard
                    title={'Café'}
                    image={'cafe.jpg'}
                    description={'Vaso de 12 oz.'}
                    price={'$25.00'}>
            </ItemCard>

            <ItemCard
                    title={'Licuado Fresa'}
                    image={'licuado.png'}
                    description={'Vaso de 12 oz.'}
                    price={'$25.00'}>
            </ItemCard>

            <ItemCard
                    title={'Coca-cola'}
                    image={'cocacola.png'}
                    description={'Botella 600 ml.'}
                    price={'$25.00'}>
            </ItemCard>

            <ItemCard
                    title={'Cappuccino'}
                    image={'capuccino.png'}
                    description={'Vaso de 12 oz.'}
                    price={'$25.00'}>
            </ItemCard>
        </div>
    
    </div> 
  )
}

export default Drinks