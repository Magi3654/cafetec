import React from 'react'
import Menu from '../menu/page'
import Search from '../search/page'
import Drinks from '../top/page'
import Dropdown from '../dropdown/Dropdown'
import Link from 'next/link'

const Main = () => {
    return (
        <div className="bg-white flex flex-col">
            <div className='flex-none'>
                <Dropdown/>
            </div>
            <Search></Search>
            <Menu></Menu>
            <Drinks></Drinks>
        </div>
    )
}

export default Main