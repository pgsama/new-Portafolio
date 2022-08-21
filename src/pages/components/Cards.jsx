
import {FcGlobe, FcBriefcase, FcMultipleDevices} from 'react-icons/fc';
import { CardsHelper } from '../helpers/CardsHelper';
import { Resumen } from './Resumen';
import { WindowHeader } from './WindowHeader';
import { Estudios } from './Estudios';
import { Experiencia } from './Experiencia';

export const Cards = () => {

  const helper = CardsHelper();
  
  return (
 <>
      <div className="w-11/12 md:w-11/12 lg:w-2/3 xl:w-1/2 h-fit rounded-lg border border-slate-600 border-opacity-50 cards backdrop-blur-[2px]">
        <WindowHeader/>
        <div className="w-full h-full md:flex xl:flex">
          <div className="w-full md:w-2/5 relative">
            <div className=' bg-slate-900 opacity-30 h-full w-full absolute -z-10'></div>
            <div className="flex w-full flex-col">
                <p className=" text-slate-300 text-base text-center">Sobre mi</p>
                <br />
                <hr className="w-11/12 border border-slate-500 m-auto my-1 opacity-50" />
            </div>
            <ul className="h-1/2 w-full text-slate-200 gap-1 md:flex-col flex flex-row md:justify-start justify-around sm:text-sm text-xs z-10">
              <li id='Resumen' ref={helper?.resumen} className="m-0.5 mx-2 cursor-pointer p-1 rounded-lg active-card" onClick={helper.setActive}>
                <FcGlobe size={20} /><p className="text-center select-none only-text" onClick={null}>Resumen</p>
              </li>
              <li id='Experiencia' ref={helper?.experiencia} className="m-0.5 mx-2 cursor-pointer p-1 rounded-lg " onClick={helper.setActive}>
                <FcBriefcase size={20}/><p className="text-center select-none only-text" onClick={null}>Experiencia Laboral</p>
              </li>
              <li id='Estudios' ref={helper?.estudios} className="m-0.5 mx-2 cursor-pointer p-1 rounded-lg" onClick={helper.setActive}>
                <FcMultipleDevices size={20}/> <p className="text-center select-none only-text " onClick={null}>Estudios</p></li>
            </ul>
          </div>
          <div className=" w-full min-h-[300px] text-xs bg-slate-800 ">
            {helper?.Resumen ? <Resumen/> : null}
            {helper?.Experiencia ? <Experiencia/> : null}
            {helper?.Estudios ? <Estudios/> : null}
          </div>
        </div>
      </div>
      </>
  );
};
