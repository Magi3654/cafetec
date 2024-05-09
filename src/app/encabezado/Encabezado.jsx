import React from 'react'
import Link from 'next/link'
import Drinks from '../drinks/page';


const Encabezado = ({title, icon, route=''}) => {
  return (
    <div className='flex flex-1 justify-between mx-1'>
        <button type="button" className="text-white bg-lightBrown focus:ring-2 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center inline-flex items-center m-3">
            {icon}
            <span className='font-semibold' style={{whiteSpace: 'nowrap'}}>{title}</span>
        </button>

        <Link href={route}>
            <button type="button" className="text-darkGray focus:outline-none font-semibold text-sm px-3 py-2.5 text-right inline-flex items-center m-4">
                Mirar más
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#6c757d" className="h-3.5 ml-2">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
            </button>
        </Link>
    </div>
  )
}

export default Encabezado