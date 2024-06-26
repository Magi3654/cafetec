'use client'
import React, {useState}from 'react'
import Link from 'next/link'

const  Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">

      <button className="dropbtn" onClick={toggleDropdown}>
        <svg xmlns="http://www.w3.org/2000/svg" className='h-6' viewBox="0 0 448 512" fill='#ffc600'>
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        </svg>
      </button>

      {isOpen && (
        <div className="dropdown-content">
          <a href='/main'>Inicio</a>
          <a href="/payment">Tarjetas</a>
          <a href="/paymentRegistro">Registro de tarjeta</a>
        </div>
      )}

      <div>
        <Link href="/carrito">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='h-7 mt-7 mr-7' fill='#ffc600'>
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
            </svg>
        </Link>
      </div>
    </div>
  )
}

export default Dropdown