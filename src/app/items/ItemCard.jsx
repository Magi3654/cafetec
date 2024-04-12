import React from 'react'
import Image from 'next/image'

const ItemCard = ({title, image, description, price}) => {
  return (
    <div className='m-3'>
        <div class="bg-babyYellow border border-gray rounded-lg shadow-lg w-36">
            <a href="#">
                <Image
                    src={`/img/${image}`}
                    width={120}
                    height={120}
                    alt=""
                    sizes="100vw"
                    className='m-2 text-center justify-center'>
                </Image>
            </a>
            <div className="p-3 text-left flex flex-col">
                <p className="text-md font-bold text-brown">{title}</p>
                <p className="text-sm text-brown font-light">{description}</p>
                
                <div className='flex mt-3'>
                    <p className="flex flex-1 text-md font-bold text-brown">{price}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#c06722' className='h-6'>
                        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                    </svg>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default ItemCard