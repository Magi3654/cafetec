import React from 'react'
import ItemCard from '../items/ItemCard';
import Encabezado from '../encabezado/Encabezado';
import Dropdown from '../dropdown/Dropdown';

function Drinks() {
  return (
    <div className='flex flex-col'>
       <div className='ml-4 mt-4'>
                
        <section>
            <Dropdown/>
            <p className='text-lg text-brown font-bold mx-4 pt-3'>Bebidas</p>
            <Encabezado
                title={'Bebidas'}
                route={'/drinks'}
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#6c757d" className="h-4 mr-2 my-2">
                <path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"/>
                </svg>}
            />
            <div className=" overflow-y-scroll font-semibold text-center mr-4" class="image-container">
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
            </div>
        </section>
    
    </div> 
   
    
</div>
  )
}

export default Drinks