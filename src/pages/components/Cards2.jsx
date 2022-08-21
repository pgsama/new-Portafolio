import React from 'react'
import { WindowHeader } from './WindowHeader'
import {FcGlobe, FcTouchscreenSmartphone, FcMultipleDevices} from 'react-icons/fc';

export const Cards2 = () => {
  return (
    <div className="w-11/12 md:w-11/12 lg:w-2/3 xl:w-1/2 h-fit rounded-lg border border-slate-600 border-opacity-50 cards backdrop-blur-[2px] ">
      <WindowHeader />
      <div className="w-full h-full md:flex xl:flex">
        <div className="w-full md:w-2/5 relative">
          <div className=' bg-slate-900 opacity-30 h-full w-full absolute -z-10'></div>
          <div className="flex w-full flex-col">
            <p className=" text-slate-400 text-base text-center">Tecnologias</p>
            <br />
            <hr className="w-11/12 border border-slate-500 m-auto my-1 opacity-50" />
          </div>
          <ul className="h-1/2 w-full text-slate-200 gap-1 md:flex-col flex flex-row md:justify-start justify-around sm:text-md text-sm z-10">
            <li id='Resumen'  className="m-0.5 mx-2 cursor-pointer p-1 rounded-lg active-card">
              <FcGlobe size={20} /><p className="text-center select-none only-text" >Back-end</p>
            </li>
            <li id='Experiencia' className="m-0.5 mx-2 cursor-pointer p-1 rounded-lg ">
              <FcTouchscreenSmartphone size={20} /><p className="text-center select-none only-text" >Front-end</p>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}
