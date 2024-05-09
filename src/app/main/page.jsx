import React from 'react'
import Menu from '../menu/page'
import Search from '../search/page'
import Top from '../top/page'
import Dropdown from '../dropdown/Dropdown'

const Main = () => {
    return (
        <div className="bg-white flex flex-col">
            <div className='flex-none'>
                <Dropdown/>
            </div>
            <Search></Search>
            <Top></Top>
        </div>
    )
}

export default Main