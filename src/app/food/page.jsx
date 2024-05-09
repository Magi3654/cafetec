'use client'
import React from 'react'
import ItemCard from '../items/ItemCard';
import Encabezado from '../encabezado/Encabezado';
import Dropdown from '../dropdown/Dropdown';
import Link from 'next/link';

function Food() {
  return (
    <div className='p-2 w-full'>
       <section className='w-full'>
            <div className="flex">
                <Link href="/main" className='flex-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='flex-none h-6 mt-4 mx-2' fill='#000'>
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                    </svg>
                </Link>

                <Link href="/carrito" className='flex-1 flex justify-end'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='h-6 mt-4 mx-2' fill='#ffc600'>
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                    </svg>
                </Link>
            </div>
            <p className='m-3 font-bold text-2xl'>Comida Preparada</p>
        </section>

        <div className="flex overflow-x-scroll font-semibold text-center justify-center">
            <Link href={'/food'}>
                <button type="button" className="text-white bg-lightBrown focus:ring-2 focus:outline-none rounded-full px-4 py-2 text-center inline-flex items-center m-2 w-24">
                    <p className='font-medium text-md text-center w-full'>Caliente</p>
                </button>
            </Link>

            <Link href={'/food'}>
                <button type="button" className="text-white bg-lightBrown focus:ring-2 focus:outline-none rounded-full px-4 py-2 text-center inline-flex items-center m-2 w-24">
                    <p className='font-medium text-md text-center w-full'>Fria</p>
                </button>
            </Link>

            <Link href={'/food'}>
                <button type="button" className="text-white bg-lightBrown focus:ring-2 focus:outline-none rounded-full px-4 py-2 text-center inline-flex items-center m-2 w-24">
                    <p className='font-medium text-md text-center w-full'>Combos</p>
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

export default Food