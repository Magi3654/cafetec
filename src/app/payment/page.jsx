import React from 'react'

function page() {
  return (
    <section className='fixed bottom-0 left-0 bg-gray border border-gray rounded-md p-3 mx-3 my-2'>
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
            
            <button className="shadow bg-yellow text-white text-xl font-bold py-3 px-4 mt-2 rounded w-full">Agregar tarjeta</button>

            <div className="flex m-3 pt-6 px-2 text-2xl border-t-2 border-semiGray">
                <p className='py-2 font-bold flex-none'>Total</p>
                <p className='py-2 flex-1 text-right'>$0.00</p>
            </div>

            <button className="shadow bg-yellow text-white text-xl font-bold py-3 px-4 mt-2 rounded w-full">Pagar</button>
        </section>
  )
}

export default page