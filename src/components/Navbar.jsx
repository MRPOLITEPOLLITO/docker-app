import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex flex-wrap justify-between px-[10%] py-2 bg-blue-950'>
        <div className='flex flex-col justify-center items-center text-center text-blue-950 text-2xl font-bold rounded-full bg-light py-2 px-5'>
            <p>UP</p>
            <p className='border-t-4 border-primary'>SLP</p>
        </div>
        <div className='flex justify-between items-center'>
            <a className={`px-8 text-xl hover:text-primary duration-300 text-light`}>Formulario</a>
            <a className={`px-8 text-xl hover:text-primary duration-300 text-light`}>Registros</a>
        </div>
    </div>
  )
}

export default Navbar