'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import ItemCompra from '../itemCompra/ItemCompra'

function Carrito() {
    
  return (
    <div className='p-2 w-full'>
        <section className='flex w-full'>
            <Link href="/main">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='flex-none h-6 mt-4 mx-2' fill='#6c757d'>
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                </svg>
            </Link>
            <p className='flex-none m-3 font-bold text-2xl'>Carrito</p>
            <p className='flex-1 m-3 font-light text-lg text-right'>Order#0000</p>
        </section>
        
        <section className='flex flex-col border-t-2 border-darkGray'>
            <ItemCompra
                title={'Café'}
                image={'cafe.jpg'}
                description={'Vaso de 12 oz.'}
                price={'$25.00'}>
            </ItemCompra>
        </section>

        <section className='fixed bottom-0 left-0 bg-gray border border-gray rounded-md p-3 mx-3 my-3'>
            <p className='m-3 font-bold text-2xl'>Pago</p>

            <div className="flex flex-col">
                <p className='mx-3 text-md font-medium'>Numero de Tarjeta</p>
                <input className="shadow appearance-none border rounded py-2 px-3 m-2 text-gray leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="0000 0000 0000 0000"/>
            </div>
            
            <div className="flex mt-2">
                <div className="flex flex-col">
                    <p className='mx-3 text-md font-medium'>Fecha de vencimiento</p>
                    <input className="shadow border rounded py-2 px-3 m-2 w-2/3 text-gray" type="text" placeholder="MM/AA"/>
                </div>

                <div className="flex flex-col">
                    <p className='mx-3 text-md font-medium'>Codigo de seguridad</p>
                    <input className="shadow border rounded py-2 px-3 m-2 w-2/3 text-gray" type="text" placeholder="CVV"/>
                </div>
            </div>
            
            <div className="flex m-3 pt-6 px-2 text-2xl border-t-2 border-semiGray">
                <p className='py-2 font-bold flex-none'>Total</p>
                <p className='py-2 flex-1 text-right'>$0.00</p>
            </div>

            <button className="shadow bg-yellow text-white text-xl font-bold py-3 px-4 mt-2 rounded w-full">Pagar</button>
        
        </section>

        
    </div>
  )
}

export default Carrito