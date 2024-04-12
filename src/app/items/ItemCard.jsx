import React from 'react'
import Image from 'next/image'

const ItemCard = ({title, image}) => {
  return (
    <div>
        <div class="bg-gray border border-gray rounded-lg shadow-lg mr-5">
            <a href="#">
                <Image
                    src={`/img/${image}`}
                    width={130}
                    height={130}
                    alt=""
                    sizes="100vw">
                </Image>
            </a>
            <div className="p-5 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" className='h-2 w-full mb-2'>
                    <rect x="0" y="8" className='h-2 w-full' rx="2" fill="#ffc600"/>
                </svg>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-brown">{title}</h5>  
            </div>
        </div>
    </div>
  )
}

export default ItemCard