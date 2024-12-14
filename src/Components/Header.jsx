import {React, useState} from 'react';
import { Link } from 'react-router-dom'

function Header() {
  const [active, setActive] = useState(false)

  const toggle = () =>{
    setActive(!active) //false
    console.log("tapped")
  }
  
  return (
    // creating the nav bar
    
    <>

      <div className="flex items-center bg-purple-700">
          <div onClick={toggle} className="flex flex-col space-y-1 p-4 justify-between hover:cursor-pointer md:hidden">
              <span className="block w-6 h-1 bg-white"></span>
              <span className="block w-6 h-1 bg-white"></span>
              <span className="block w-6 h-1 bg-white"></span>

          </div>

          <div className='md:hidden  text-center w-full text-lg font-bold text-white'>
            <h1>Weather App</h1>
          </div>

        {/* {toggle && } */}
        <ul 
        className={`fixed top-0 left-0 w-full h-full bg-purple-700 text-white font-bold py-10 text-lg gap-x-3 flex flex-col items-start justify-start transition-transform duration-500 ease-in-out md:static md:flex-row md:items-center md:justify-center md:gap-3 ${
        active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'} md:opacity-100 md:pointer-events-auto md:translate-x-0`}>

          
          <Link to="/home" className='flex md:hover:bg-white md:hover:text-purple-700 rounded-md  items-center justify-center gap-x-3 md:text-center md:hover:font-bold md:hover:transition-all md:hover:duration-200 md:hover:ease-in-out'>

            <li 
            onClick={toggle} 
            className={`my-3 w-full bg-gradient-to-r from-indigo-300 px-10   via-purple-400 to-violet-500 flex md:bg-none rounded-md rounded-l-none items-center justify-between`}>
              Home 
            </li>
          </Link>

          <Link to="/weather" className='flex md:hover:bg-white md:hover:text-purple-700 rounded-md  items-center justify-center gap-x-3 md:text-center md:hover:font-bold md:hover:transition-all md:hover:duration-200 md:hover:ease-in-out'>
            <li 
            onClick={toggle} 
            className={`my-3 bg-gradient-to-r from-indigo-300 px-10  items-center justify-between rounded-md rounded-l-none via-purple-400 to-violet-500 flex md:bg-none`}>
              Weather
            </li>
          </Link>
          
          <Link to="/Description" className='flex md:hover:bg-white md:hover:text-purple-700 rounded-md  items-center justify-center gap-x-3 md:text-center md:hover:font-bold md:hover:transition-all md:hover:duration-200 md:hover:ease-in-out'>
            <li
            onClick={toggle} 
            className={`my-3 bg-gradient-to-r from-indigo-300 px-10  items-center justify-between rounded-md rounded-l-none via-purple-400 to-violet-500 flex md:bg-none`}>
                Description
            </li>
          </Link>
            <li className={`bg-red-500 text-white items-center text-center p-5 rounded-md w-full flex justify-between md:hidden`} onClick={toggle}>
              Close
            </li>
          {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
          
        </ul>
      </div>
    </>
  )
}

export default Header
