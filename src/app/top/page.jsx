import React from 'react'
import Link from 'next/link';
import ItemCard from '../items/ItemCard';
import Encabezado from '../encabezado/Encabezado';

const Top = () => {
    return (
        <div className='flex flex-col'>
            <p className='text-lg text-brown font-bold mx-4 pt-3'>Lo más vendido</p>
            <section>
                <Encabezado
                    title={'Bebidas'}
                    route={'/drinks'}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#6c757d" className="h-4 mr-2 my-2">
                    <path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"/>
                    </svg>}
                />
                <div className="flex overflow-x-scroll font-semibold text-center mx-4">
                    <ItemCard
                        title={'Café'}
                        image={'cafe.jpg'}
                        description={'Vaso de 12 oz.'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Licuado Fresa'}
                        image={'licuado.png'}
                        description={'Vaso de 12 oz.'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Coca-cola'}
                        image={'cocacola.png'}
                        description={'Botella 600 ml.'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Cappuccino'}
                        image={'capuccino.png'}
                        description={'Vaso de 12 oz.'}
                        price={'$25.00'}>
                    </ItemCard>
                    <ItemCard
                        title={'Té'}
                        image={'te.webp'}
                        description={'Vaso de 12 oz.'}
                        price={'$13.00'}>
                    </ItemCard>
                </div>
            </section>
            
            <section>
                <Encabezado
                    title={'Snacks'}
                    route={'/snacks'}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#6c757d" className="h-4 mr-2 my-2">
                    <path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6v0c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9v0c-.9-5.3-5.3-9.3-10.6-10.1c-51.5-8.2-92.8-47.1-104.5-97.4c-1.8-7.6-8-13.4-15.7-14.6c-54.6-8.7-97.7-52-106.2-106.8zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM144 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                    </svg>}
                />
                <div className="flex overflow-x-scroll font-semibold text-center mx-4">
                    <ItemCard
                        title={'Cheetos'}
                        image={'cheetos.webp'}
                        description={'160 gr.'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Chokis'}
                        image={'chokis.png'}
                        description={'76 gr.'}
                        price={'$35.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Nachos'}
                        image={'nachos.png'}
                        description={'Sencillos'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Muffin'}
                        image={'cafe.jpg'}
                        description={'1 pz.'}
                        price={'$10.00'}>
                    </ItemCard>
                </div>
            </section>

            <section>
                <Encabezado
                    title={'Comida preparada'}
                    route={'/food'}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#6c757d" className="h-4 mr-2 my-2">
                    <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/>
                    </svg>}
                />
                <div className="flex overflow-x-scroll font-semibold text-center mx-4">
                    <ItemCard
                        title={'Chilaquiles'}
                        image={'cafe.jpg'}
                        description={'1 plato'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Ensalada Pollo'}
                        image={'cafe.jpg'}
                        description={'1 plato'}
                        price={'$35.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Hamburguesa'}
                        image={'cafe.jpg'}
                        description={'1 pz.'}
                        price={'$25.00'}>
                    </ItemCard>

                    <ItemCard
                        title={'Bagel'}
                        image={'cafe.jpg'}
                        description={'1 pz.'}
                        price={'$10.00'}>
                    </ItemCard>
                </div>
            </section>
            
        </div>
    )
}

export default Top