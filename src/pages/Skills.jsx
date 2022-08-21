import React from 'react'
import { Cards2 } from './components/Cards2'
import { WindowHeader } from './components/WindowHeader'

export const Skills = () => {
  return (
    <div id='skills' className='w-full h-full animate__animated animate__fadeIn overflow-auto grid '>
      <div className='mt-[76px] mb-[20px]'>
        <div className='container h-full m-auto'>
          <div className='w-full  py-5 text-center '> 
          {/* //lg:w-2/5 lg:text-start */}
            <h1 className='text-white text-4xl text-shadow'>Mis habilidades</h1>
            <h2 className='text-teal-300 text-4xl text-shadow my-4'>y conocimientos</h2>
            <div className='w-1/3 justify-center block'>
            </div>
          </div>
          <div className='flex flex-col justify-around lg:flex lg:flex-row items-center gap-4'>
            <Cards2/>
          </div>
        </div>
      </div>
    </div>
  )
}
