import React, { useState } from 'react'
import DataForm from '@/components/DataForm'
import Records from '@/components/Records'
import Navbar from '@/components/Navbar'

const index = () => {
  const [section, setSection] = useState(true)
  const handleClickForm = () => {
    setSection(true)
  }
  const handleClickReg = () => {
    setSection(false)
  }
  return (
    <div className="block relative w-full m-0 p-0 text-left whitespace-normal break-words min-h-screen bg-cover bg-center bg-no-repeat bg-[url('../../public/sunset.jpg')] z-10 after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:-z-10 after:bg-dark/30">
      <div className='w-full flex flex-wrap justify-between px-[10%] py-2 bg-blue-950'>
        <div className='flex flex-col justify-center items-center text-center text-blue-950 text-2xl font-bold rounded-full bg-light py-2 px-5 hover:scale-105 duration-500'>
          <p>UP</p>
          <p className='border-t-4 border-primary'>SLP</p>
        </div>
        <div className='flex justify-between items-center'>
          <a className={`px-8 text-xl hover:text-primary duration-300 text-light ${section ? 'text-primary' : ''}`} onClick={handleClickForm} >Formulario</a>
          <a className={`px-8 text-xl hover:text-primary duration-300 text-light ${section ? '' : 'text-primary'}`} onClick={handleClickReg} >Registros</a>
        </div>
      </div>
      <section className='flex m-0 py-20 px-0 justify-center items-center'>
        <div className='w-3/4'>
          {
            section ?
              <DataForm />
              :
              <Records />
          }
        </div>
      </section>
    </div>
  )
}

export default index