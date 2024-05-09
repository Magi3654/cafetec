'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const ItemCompra = ({title, image, price}) => {
    const [cantidad, setCantidad] = useState(1);

    const incremento = () => {
        setCantidad(Cantidad => Cantidad + 1);
    }

    const decremento = () => {
        if(cantidad > 0){
            setCantidad(Cantidad => Cantidad - 1);
        }
    };

    return (
      <div className='flex m-3'>
          <div className="flex border border-gray rounded-lg shadow-lg w-full">
                <Image
                    src={`/img/${image}`}
                    width={120}
                    height={120}
                    alt=""
                    sizes=" (max-height:60px)100vw"
                    className='m-2 text-center justify-center'>
                </Image>
                <div className="flex flex-col m-2 w-full">
                    <p className='text-xl font-semibold mt-2'>{title}</p>
                    <div className="flex my-2">

                        <p className='flex-none text-lg font-medium justify-center text-lightBrown text-center py-2'>{price}</p>
                        
                        <form className="flex-1 flex justify-end mx-2">
                            <div className="relative flex items-center max-w-[8rem]">
                                <button type="button" onClick={decremento} id="decrement-button" data-input-counter-decrement="quantity-input" className={`bg-${cantidad <= 0 ? 'gray' : 'lightBrown'} border border-gray rounded-l-lg p-3 h-9 focus:ring-2 focus:outline-none`}>
                                    <svg className={`w-3 h-3 text-${cantidad <= 0 ? 'black' : 'white'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                    </svg>
                                </button>

                                <input type="text" value={cantidad} id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-white border-x-0 border-gray h-9 text-center text-darkGray text-md block w-full py-2.5" placeholder="1" required />
                                
                                <button type="button" onClick={incremento} id="increment-button" data-input-counter-increment="quantity-input" className="bg-lightBrown border border-gray rounded-e-lg p-3 h-9 focus:ring-2 focus:outline-none">
                                    <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
                
          </div>
      </div>
    )
  }

export default ItemCompra