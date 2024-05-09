import React from 'react'

function Carrito() {
  return (
    <div className='p-2'>
        <section className='flex flex-1 w-full'>
            <p className='m-3 font-bold text-2xl'>Carrito</p>
            <p className='m-3 font-light text-lg'>Order#0000</p>
        </section>
        
        <section className='flex flex-col border-t-2 border-darkGray'>
            <div className='flex'>
                <p className='m-3 font-semibold text-lg text-darkGray'>Total</p>
                <p className='m-3 font-bold text-lg'>$0.00 </p>
            </div>

            <div className='flex w-full'>
                <p className='m-3 font-semibold text-lg text-darkGray'>Total</p>
                <p className='m-3 font-bold text-lg'>$0.00 </p>
            </div>
        </section>

        <section className='flex'>
            <button>Pagar</button>
        </section>
    </div>
  )
}

export default Carrito