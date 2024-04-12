import React from 'react'
import Link from 'next/link';
import ItemCard from '../items/ItemCard';
import Image from 'next/image';

const Drinks = () => {
    return (
        <div className='flex flex-col'>
            <section>
                <button type="button" className="text-brown bg-babyBrown focus:ring-2 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center inline-flex items-center m-3">
                    <span className='font-semibold' style={{whiteSpace: 'nowrap'}}>Bebidas Calientes</span>
                </button>

                <div className="flex overflow-x-scroll font-semibold text-center mx-4">
                    <ItemCard
                        title={'Cafe'}
                        image={'cafe.jpg'}>
                    </ItemCard>

                    <ItemCard
                        title={'Te'}
                        image={'te.webp'}>
                    </ItemCard>

                    <div class="bg-gray border border-gray rounded-lg shadow-lg mr-5">
                        <a href="#">
                            <Image
                                src={'/img/te.webp'}
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
                            <h5 className="mb-2 text-lg font-bold tracking-tight text-brown">Te</h5>  
                        </div>
                    </div>
                </div>

            </section>
            
            <section>
                <div className="flex overflow-x-scroll font-semibold text-center mx-4">
                    <button type="button" className="text-brown bg-babyBrown focus:ring-2 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center inline-flex items-center m-3">
                        <span className='font-semibold' style={{whiteSpace: 'nowrap'}}>Bebidas Frias</span>
                    </button>
                </div>
            </section>
            
        </div>
    )
}

export default Drinks