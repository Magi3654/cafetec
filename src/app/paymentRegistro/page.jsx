
import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className="p-2 w-full">
        <section className='w-full'>
            <Link href="/carrito">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='flex-none h-6 mt-4 mx-2' fill='#000'>
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                </svg>
            </Link>
            <p className='m-3 font-bold text-2xl'>Agregar tarjeta</p>
        </section>

        <section className='pt-3 mx-3 my-2'>
            <div className="flex flex-col bg-gray border border-gray rounded-md p-2 shadow">
                <p className='mx-3 text-md font-medium'>Número de Tarjeta</p>
                <input className="shadow appearance-none border rounded py-2 px-3 m-2 text-gray leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="0000 0000 0000 0000"/>
            </div>
            
            <div className="flex mt-2">
                <div className="flex flex-col bg-gray border border-gray rounded-md p-2 mr-2 shadow">
                    <p className='mx-3 text-md font-medium'>Fecha de vencimiento</p>
                    <input className="shadow border rounded py-2 px-3 m-2 w-2/3 text-gray" type="text" placeholder="MM/AA"/>
                </div>

                <div className="flex flex-col bg-gray border border-gray rounded-md p-2 shadow">
                    <p className='mx-3 text-md font-medium'>Código de seguridad</p>
                    <input className="shadow border rounded py-2 px-3 m-2 w-2/3 text-gray" type="text" placeholder="CVV"/>
                </div>
            </div>

            <div className="flex flex-col mt-2 bg-gray border border-gray rounded-md p-2 shadow">
                <p className='mx-3 text-md font-medium'>Apodo</p>
                <input className="shadow appearance-none border rounded py-2 px-3 m-2 text-gray leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="e.j Mi tarjeta"/>
            </div>
        </section>

        <div className='fixed bottom-0 left-0 w-full p-2'>
            <button className="w-full mx-auto my-3 p-3 bg-yellow text-white text-center text-lg font-bold rounded">Agregar tarjeta</button>
        </div>
    </div>
  )
}

export default page