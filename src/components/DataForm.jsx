import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FaCar, FaChild, FaClock, FaEnvelope, FaHeart, FaHome, FaIdCard, FaLocationArrow, FaPhoneAlt, FaSortNumericUpAlt, FaUniversity, FaUser, FaVenusMars } from 'react-icons/fa'

const QuestionLayout = ({ type = 'text', text = '', placeholder = '', pattern = null, event = null, icon: Icon, className = '', tite = '', options = [], name }) => {
  return (
    <div className={`relative my-3 m-0 ${className}`}>
      <h1 className='text-light text-xl mb-3'>{text}</h1>
      <div className='relative w-full'>
        <span className='inline-block absolute left-2 top-4 text-lg z-10 text-primary'><Icon /></span>
        {
          type !== 'select' ?
            <input type={type} className='w-full p-3 text-lg rounded-sm outline-none border border-orange pl-8' placeholder={placeholder} pattern={pattern} title={tite} required onChange={(e) => event(name, e.target.value)} />
            :
            <select className='w-full p-3 text-lg rounded-sm outline-none border border-orange pl-8' onChange={(e) => event(name, e.target.value)}>
              {options.map((option, index) => (
                <option value={option} key={index}>{option}</option>
              ))}
            </select>
        }
      </div>
    </div>
  )
}

const form = () => {
  let initialData = {
    name: '',
    age: '',
    sex: 'Masculino',
    career: 'ITI',
    level: '',
    ide: '',
    date: '',
    fplace: '',
    fprov: '',
    state: 'Soltero',
    address: '',
    email: '',
    phone: '',
  }
  const [responses, setResponses] = useState(initialData)
  const router = useRouter()
  const handleDataChange = (name, value) => {
    setResponses((prevData) => ({ ...prevData, [name]: name === 'type' ? questionTypeMap[value] : name === 'section' ?  sectionsMap[value] : value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const newRecord = async () => {
      try {
        const response = await axios.post('/api/students', {responses})
        //const res = await axios.get('/api/students')
        console.log(response)
        if(response.status === 200){
          console.log('Success!!!')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
    newRecord()
  }
  const cleanForm = () =>{
    router.reload()
  }
  useEffect(() =>{
    console.log(responses)
  },[responses])
  return (
    <form onSubmit={handleSubmit} className='flex flex-wrap justify-between bg-blue-950/50 backdrop-blur-lg px-16 py-12 rounded-md'>
      <h1 className='w-full text-light text-5xl font-bold text-center mt-8 mb-14 hover:text-primary hover:-translate-y-1 duration-300'>Datos personales</h1>
      <QuestionLayout text='Nombre del Estudiante' icon={FaUser} className='w-[49%]' name='name'
        event={(name, value) => handleDataChange(name, value)} />
      <QuestionLayout text='Edad' icon={FaChild} className='w-[24%]' type='number' name='age'
        event={(name, value) => handleDataChange(name, value)}/>
      <QuestionLayout text='Sexo' icon={FaVenusMars} className='w-[24%]' type='select' options={['Masculino', 'Femenino']} name='sex'
        event={(name, value) => handleDataChange(name, value)}/>
      <QuestionLayout text='Carrera' icon={FaCar} className='w-[24%]' type='select' options={['ITI', 'ITEM', 'ISTI', 'ITMA', 'LMI', 'LAG']} name='career'
        event={(name, value) => handleDataChange(name, value)}/>
      <QuestionLayout text='Semestre' icon={FaSortNumericUpAlt} className='w-[24%]' type='number' name='level'
        event={(name, value) => handleDataChange(name, value)}/>
      <QuestionLayout text='Matrícula' icon={FaIdCard} className='w-[24%]' type='number' name='ide'
        event={(name, value) => handleDataChange(name, value)}/>
      <QuestionLayout text='Fecha' icon={FaClock} className='w-[24%]' type='date' name='date'
        event={(name, value) => handleDataChange(name, value)}/>
      <QuestionLayout text='Fecha y lugar de nacimiento' icon={FaUniversity} className='w-full' name='fplace'
        event={(name, value) => handleDataChange(name, value)}/>
      <QuestionLayout text='Lugar de Procedencia' icon={FaLocationArrow} className='w-[49%]' name='fprov'
        event={(name, value) => handleDataChange(name, value)}/>
      <QuestionLayout text='Estado Civil' icon={FaHeart} className='w-[49%]' type='select' options={['Soltero', 'Casado']} name='state'
        event={(name, value) => handleDataChange(name, value)}/>
      <QuestionLayout text='Domicilio Particular (calle, número y colonia)' icon={FaHome} className='w-full' name='address'
        event={(name, value) => handleDataChange(name, value)}/>
      <QuestionLayout text='Correo Electrónico' icon={FaEnvelope} className='w-[49%]' placeholder='example@upslp.edu.mx' name='email'
        event={(name, value) => handleDataChange(name, value)}/>
      <QuestionLayout text='Teléfonos' icon={FaPhoneAlt} className='w-[49%]' type='number' placeholder='44422226666' name='phone'
        event={(name, value) => handleDataChange(name, value)}/>
      <div className='w-full flex items-center justify-center'>
        <button type="button" className='w-1/4 h-11 bg-light rounded-sm text-dark hover:bg-red-600 hover:text-light duration-300 my-14 mx-3' onClick={cleanForm}>Limpiar</button>
        <button type="submit" className='w-1/4  h-11 bg-light rounded-sm text-dark hover:bg-primary hover:text-light duration-300 my-14 mx-3'>Guardar</button>
      </div>
    </form>
  )
}

export default form