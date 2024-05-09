'use client'
import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className="p-2 w-full">
        <section className='w-full'>
            <Link href="/" onClick={() => window.history.back()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='flex-none h-6 mt-4 mx-2' fill='#000'>
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                </svg>
            </Link>
            <p className='m-3 font-bold text-2xl'>Tarjetas registradas</p>
        </section>

        <div className="flex mx-4 py-2 justify-center" id='tarjetaSeleccionada'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='h-5 mr-2 my-2'>
                <path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"/>
            </svg>
            <label htmlFor="default-radio-1" className="text-md text-left font-normal py-2 w-full">Banco 0000 (Nombre)</label>

            <Link href={'/payment'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-5 mr-2 my-2' fill='#c06722'>
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg>
            </Link>
        </div>

        <Link href={'/paymentRegistro'}>
            <div className="flex py-2 mx-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-4 mr-2 my-1' fill='#c06722'>
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
                <button className="flex-1 text-md font-semibold text-left text-lightBrown">Agregar tarjeta</button>
            </div>
        </Link>  


    </div>
    
  )
}

export default page