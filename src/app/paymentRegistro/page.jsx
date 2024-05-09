'use client'

import React, { useState } from 'react'
import Link from 'next/link'

function page() {
    const [isVisible, setIsVisible] = useState(false);
    const [selected, setSelected] = useState('Seleccionar país');
    const [numeroTarjeta, setNumeroTarjeta] = useState('');
    const [fechaVencimiento, setFechaVencimiento] = useState('');
    const [cvv, setCvv] = useState('');
    const [propietario, setPropietario] = useState('');

    const lista = () => {
        setIsVisible(!isVisible);
    }

    const opcion = (country) => {
        setSelected(country);
        setIsVisible(false);
    }

    const agregar = () => {
        if (numeroTarjeta.trim() === '' || fechaVencimiento.trim() === '' || cvv.trim() === '' || propietario.trim() === '' || selected === 'Seleccionar país') {
            alert('Por favor, complete todos los campos.');
        }
        
        else {
            // Aquí puedes agregar la lógica para guardar la tarjeta o mostrar un mensaje de éxito
            alert('La tarjeta se guardó correctamente.');
        }
    }

  return (
    <div className="p-2 w-full">
        <section className='w-full'>
            <Link href="/" onClick={() => window.history.back()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='flex-none h-6 mt-4 mx-2' fill='#000'>
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                </svg>
            </Link>
            <p className='m-3 font-bold text-2xl'>Agregar tarjeta</p>
        </section>

        <section className='pt-3 mx-3 my-2'>
            <div className="flex flex-col bg-gray border border-gray rounded-md p-2 shadow">
                <p className='mx-3 text-md font-medium'>Número de Tarjeta</p>
                <input className="shadow appearance-none border border-gray rounded py-2 px-3 m-2 text-darkGray leading-tight focus:outline-none focus:shadow-outline" id="numeroTarjeta" type="text" placeholder="0000 0000 0000 0000" value={numeroTarjeta} onChange={(e) => setNumeroTarjeta(e.target.value)} />
            </div>
            
            <div className="flex mt-2">
                <div className="flex flex-col bg-gray border border-gray rounded-md p-2 mr-2 shadow">
                    <p className='mx-3 text-md font-medium'>Fecha de vencimiento</p>
                    <input className="shadow border border-gray rounded py-2 px-3 m-2 w-2/3 text-darkGray" type="text" placeholder="MM/AA" value={fechaVencimiento} onChange={(e) => setFechaVencimiento(e.target.value)}/>
                </div>

                <div className="flex flex-col bg-gray border border-gray rounded-md p-2 shadow">
                    <p className='mx-3 text-md font-medium'>Código de seguridad</p>
                    <input className="shadow border border-gray rounded py-2 px-3 m-2 w-2/3 text-darkGray" type="text" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)}/>
                </div>
            </div>

            <div className="flex flex-col mt-2 bg-gray border border-gray rounded-md p-2 shadow">
                <p className='mx-3 text-md font-medium'>Pais</p>
                <div class="relative inline-block text-left">
                    <div className='p-2'>
                        <button type="button" className="inline-flex w-full rounded-md border border-gray bg-white shadow-sm px-4 py-2 text-md text-darkGray" id="country-selector" onClick={lista} aria-haspopup="listbox" aria-expanded={isVisible ? 'true' : 'false'} aria-labelledby="country-selector-label">
                        <p className='flex-none'>{selected}</p>
                        <div className="flex flex-1 text-right justify-end">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-4 mt-1' fill='#6c757d'>
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                            </svg>
                        </div>
                        </button>
                    </div>

                    {isVisible && (
                        <div className="origin-top-right absolute border border-gray right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-semiGray" id="country-selector-list" role="listbox" aria-activedescendant="country-0" tabindex="-1" aria-labelledby="country-selector">
                            <div class="py-1" role="option" id="country-0" onClick={() => opcion("Estados Unidos")}>
                                <p class="text-darkGray block px-4 py-2 text-md">Estados Unidos</p>
                            </div>
                            <div class="py-1" role="option" id="country-1" onClick={() => opcion("Canadá")}>
                                <p class="text-darkGray block px-4 py-2 text-md">Canadá</p>
                            </div>
                            <div class="py-1" role="option" id="country-2">
                                <p class="text-darkGray block px-4 py-2 text-md" onClick={() => opcion("México")}>México</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col mt-2 bg-gray border border-gray rounded-md p-2 shadow">
                <p className='mx-3 text-md font-medium'>Nombre del Propietario</p>
                <input className="shadow appearance-none border border-gray rounded py-2 px-3 m-2 text-darkGray leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="e.j Mayra Mendez" value={propietario} onChange={(e) => setPropietario(e.target.value)}/>
            </div>
        </section>

        <div className='fixed bottom-0 left-0 w-full p-2'>
            <button className="shadow w-full mx-auto my-3 p-3 bg-yellow text-white text-center text-lg font-bold rounded" id='agregar' onClick={agregar}>Agregar tarjeta</button>
        </div>
    </div>
  )
}

export default page