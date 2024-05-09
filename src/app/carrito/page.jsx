'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import ItemCompra from '../itemCompra/ItemCompra'

function Carrito() {
    // Calcula la altura disponible para el section que contiene los ItemCompra
    const windowHeight = window.innerHeight;
    const bottomSectionHeight = 460; // Establece la altura del section que contiene bottom-0, ajusta según necesites
    const itemCompraSectionHeight = windowHeight - bottomSectionHeight;
    
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
        
        <section className='flex flex-col overflow-auto border-t-2 border-darkGray' style={{height: `${itemCompraSectionHeight}px`}}>
            <ItemCompra
                title={'Café'}
                image={'cafe.jpg'}
                price={'$25.00'}>
            </ItemCompra>

            <ItemCompra
                title={'Café'}
                image={'cafe.jpg'}
                price={'$25.00'}>
            </ItemCompra>

            <ItemCompra
                title={'Café'}
                image={'cafe.jpg'}
                price={'$25.00'}>
            </ItemCompra>

            <ItemCompra
                title={'Café'}
                image={'cafe.jpg'}
                price={'$25.00'}>
            </ItemCompra>

            <ItemCompra
                title={'Café'}
                image={'cafe.jpg'}
                price={'$25.00'}>
            </ItemCompra>

            <ItemCompra
                title={'Café'}
                image={'cafe.jpg'}
                price={'$25.00'}>
            </ItemCompra>

            <ItemCompra
                title={'Café'}
                image={'cafe.jpg'}
                price={'$25.00'}>
            </ItemCompra>
        </section>

        <div className="fixed bottom-0 left-0 w-full">
            <section className='bg-gray border border-gray rounded-md p-3 mx-3 my-3'>
                <p className='my-3 font-bold text-2xl'>Pago</p>
                    
                <div className="flex py-2 justify-center" id='tarjetaSeleccionada'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='h-5 mr-2 my-2'>
                        <path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"/>
                    </svg>
                    <label htmlFor="default-radio-1" className="text-md text-left font-normal py-2 w-full">Banco 0000 (Nombre)</label>
                    
                    <Link href={'/payment'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='h-5 mx-3 my-2'>
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                        </svg>
                    </Link>
                </div>

                <Link href={'/payment'}>
                    <div className="flex py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-4 mr-2 my-1'>
                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                        </svg>
                        <button className="flex-1 text-md font-semibold text-left">Agregar tarjeta</button>
                    </div>
                </Link>    
                
                    
                <div className="flex m-3 pt-6 px-2 text-2xl border-t-2 border-semiGray">
                    <p className='py-2 font-bold flex-none'>Total</p>
                    <p className='py-2 flex-1 text-right'>$0.00</p>
                </div>

                <button className="shadow bg-yellow text-white text-xl font-bold py-3 px-4 mt-2 rounded w-full">Pagar</button>
            </section>
        </div>
        
    </div>
  )
}

export default Carrito