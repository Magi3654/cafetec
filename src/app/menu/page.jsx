import React from 'react'
import Link from 'next/link';

const Menu = () => {
    return (
        <div className="flex overflow-x-scroll font-semibold text-center mx-4">
            <Link href={'#'}>
                <p className='text-sm text-brown m-2'>Bebidas</p>
            </Link>

            <Link href={'#'}>
                <p className='text-sm text-brown  m-2'>Snacks</p>
            </Link>
            
            <Link href={'#'}>
                <p className='text-sm text-brown  m-2'>Comida preparada</p>
            </Link>
            
            <Link href={'#'}>
                <p className='text-sm text-brown  m-2'>Otros</p>
            </Link>
            
        </div>
    )
}

export default Menu