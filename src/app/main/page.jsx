import React from 'react'
import Menu from '../menu/page'
import Search from '../search/page'
import Drinks from '../drinks/page'

const Main = () => {
    return (
        <div className="bg-white h-screen flex flex-col">
            <div className='flex'>
                <div className="flex flex-col m-4 flex-1">
                    <p className="text-brown text-lg font-bold">Welcome</p>
                    <p className="text-brown text-sm font-medium">Enjoy your favorite food</p>
                    
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='h-7 m-7' fill='#ffc600'>
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                </svg>
            </div>
            <Search></Search>
            <Menu></Menu>
            <Drinks></Drinks>
        </div>
    )
}

export default Main