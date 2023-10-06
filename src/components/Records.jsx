import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaUserAstronaut } from 'react-icons/fa'

const CardView = ({ name, age, sex, career, level, ide, date, nplace, pplace, state, address, email, phone }) => {
  return (
    <div className='bg-light w-[24%] p-5 text-center rounded-xl group hover:bg-blue-950 hover:text-light duration-500 self-stretch mb-8'>
      <div className='w-full py-4 text-center flex justify-center items-center'>
        <div className='group-hover:bg-blue-500 duration-500 bg-dark p-5 rounded-full'><FaUserAstronaut className='text-4xl text-light' /></div>
      </div>
      <p>{name}</p>
      <div className='w-full flex justify-between'>
        <p className='text-right w-[45%]'><span className='font-bold'>Edad:</span> {age}</p>
        <p className='px-1'> | </p>
        <p className='text-left w-[45%]'><span className='font-bold'>Sexo:</span> {sex}</p>
      </div>
      <div className='w-full flex justify-between'>
        <p className='text-right w-[45%]'><span className='font-bold'>Carrera:</span> {career}</p>
        <p className='px-1'> | </p>
        <p className='text-left w-[45%]'><span className='font-bold'>Semestre:</span> {level}</p>
      </div>
      <p><span className='font-bold'>Matrícula:</span> {ide}</p>
      <p><span className='font-bold'>Fecha:</span> {date}</p>
      <p><span className='font-bold'>Estado civil:</span> {state}</p>
      <p><span className='font-bold'>Dirección:</span> {address}</p>
      <p><span className='font-bold'>Correo:</span> {email}</p>
      <p><span className='font-bold'>Teléfono:</span> {phone}</p>
    </div>
  )
}

const records = () => {
  const [data, setData] = useState([])
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/students')
      setData(response.data.result)
      console.log(response.data.result)
    } catch (error) {
      console.error('Error:', error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='w-full flex flex-wrap justify-between'>
      {data.map((item, index) => (
        <CardView key={index}
          name={item.student_name}
          age={item.student_age}
          sex={item.student_sex}
          career={item.student_career}
          level={item.student_level}
          ide={item.student_ide}
          date={item.student_t_date.split('T')[0]}
          nplace={item.student_birth_data}
          pplace={item.student_provenance}
          state={item.student_state}
          address={item.student_address}
          email={item.student_email}
          phone={item.student_phone}
        />
      ))}
    </div>
  )
}

export default records