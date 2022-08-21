import React, { useEffect } from 'react'
import { Cards } from './components/Cards';
import { WindowHeader } from './components/WindowHeader';

export const About = () => {
  const h2array = ['Desarrollador Full Stack'];
    
  return (
    <div id='about' className='w-full h-full animate__animated animate__fadeIn overflow-auto grid '>
      <div className='mt-[76px] mb-[20px]'>
      <div className='container h-full m-auto'>
        <div className='w-full lg:w-2/5 py-5 text-center lg:text-start'>
          <h1 className='text-white text-4xl text-shadow'>Hola, soy Paolo Zuñiga</h1>
          <h2 className='text-teal-300 text-4xl text-shadow my-4'>Soy {h2array[0]}</h2>
          <div className='w-1/3 justify-center block'>
          </div>
        </div>
        <div className='flex flex-col justify-around lg:flex lg:flex-row items-center gap-4'>
        <div className='cards-2 w-4/6 lg:w-1/4'>
          <WindowHeader/>
        <img className='max-h-[328px] w-full border border-slate-800 border-1 backdrop-blur bg-slate-800 bg-opacity-20' 
        src="https://64.media.tumblr.com/7c1226f068c69c947ab7954b8b9ba673/tumblr_n0tztm56p81r8sahxo1_400.gifv" 
        />
        </div>
        <Cards/>
        </div>
      </div>
      </div>
    </div>
  )
}
