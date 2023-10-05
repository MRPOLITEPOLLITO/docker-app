import React, { useState } from 'react'
import DataForm from '@/components/DataForm'
import Records from '@/components/Records'

const index = () => {
  const [section, setSection] = useState(true)
  const handleClick = () => {
    setSection(!section)
  }
  return (
    <div className="block relative w-full m-0 p-0 text-left whitespace-normal break-words min-h-screen bg-cover bg-center bg-no-repeat bg-[url('../../public/sunset.jpg')] z-10 after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:-z-10 after:bg-dark/30">
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