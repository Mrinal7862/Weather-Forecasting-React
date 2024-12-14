import React from 'react';
import { Link } from 'react-router-dom'


export default function SearchBar() {
  return (
    <>
      <div className="flex bg-blue-500 h-screen items-center flex-col">
        <div className="font-bold">
          <h1 className="md:text-[50px] text-[20px]">Welcome to Maxter's Forecast</h1>
        </div>
        <Link to='/weather' className=''>
            <div className="h-60 w-full  hover:w-80 md:h-60 md:w-80 bg-cover bg-center rounded-md md:hover:h-80 md:hover:w-96 hover:cursor-pointer hover:transition-all hover:duration-100 flex p-5  items-center justify-center" 
                style={{ backgroundImage: "url('https://img.freepik.com/free-vector/set-weather-forecast-app-realistic-icons-with-various-clouds-sun-moon-disks_1441-2643.jpg?t=st=1732561058~exp=1732564658~hmac=56718ff3a0c603113cda29d7f233c95d06e0c1add5919208d730015e2f9b12f3&w=1060')" }}>
                    <h1 className="w-full md:text-[23px] rounded-md p-3 bg-slate-600  font-bold text-center text-white flex items-center justify-center">Take me to the forecast</h1>
            </div>
        </Link>
      </div>
    </>
  );
}
