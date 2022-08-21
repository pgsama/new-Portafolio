import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {

  const [NavBar, setNavBar] = useState(false)
  
  useEffect(() => {
    console.log(NavBar)
  } , [NavBar])

  return (

    <nav className=" px-2 sm:px-4 py-2.5 rounded shadow drop-shadow backdrop-blur absolute z-10 w-full bg-transparent animate__animated animate__fadeIn">
      <div className="container flex flex-wrap justify-between items-center mx-auto h-14">
        <NavLink className="flex items-center" to="/">
          <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" className="mr-3 h-6 sm:h-9" alt="logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">PGSAMA</span>
        </NavLink>
        <button onClick={() => setNavBar(!NavBar)} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-stale-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-300  focus:ring-gray-100">
          <svg className="w-6 h-6" aria-hidden="true" fill="#ffffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="#ffffff" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div 
        className={NavBar ? 'w-screen flex justify-center md:block md:w-auto absolute translate-y-[175px] animate__animated animate__fadeIn' : 'hidden md:block md:w-auto '}
        id="navbar-default">
          <ul className="w-11/12 flex flex-col p-4 gap-2 rounded-lg border bg-slate-800 bg-opacity-80 backdrop-blur border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
            <li>
              <NavLink to="/" className="block py-2 pr-4 pl-3 text-gray-200 rounded hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-300 md:hover:text-white  hover:text-white md:hover:bg-transparent">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="block py-2 pr-4 pl-3 text-gray-200 rounded hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-300 md:hover:text-white  hover:text-white md:hover:bg-transparent">Acerca</NavLink>
            </li>
            <li>
              <NavLink to="/skills" className="block py-2 pr-4 pl-3 text-gray-200 rounded hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-300 md:hover:text-white  hover:text-white md:hover:bg-transparent">Habilidades</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="block py-2 pr-4 pl-3 text-gray-200 rounded hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-300 md:hover:text-white  hover:text-white md:hover:bg-transparent">Projectos</NavLink>
            </li>
            <li>
              <button type="button" className="text-white bg-gradient-to-r justify-center from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 focus:ring-orange-800 shadow-lg shadow-orange-500/50 shadow-lg shadow-orange-800/80 font-medium rounded-lg text-sm px-1 py-2 text-center ">Contactame</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
