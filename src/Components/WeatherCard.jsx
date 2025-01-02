import {React, useState, useEffect} from 'react';
import {Triangle} from 'react-loader-spinner'
import axios from 'axios';
    
export  default function WeatherCard(){
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")
    const [error, setError] = useState("");

    const Api_key = "1f823cbf5c7b0a1ecf17cc6ec26e1443";

    const fetchWeather = async () => {
        try {
            const response = await  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`);
            setWeather(response.data)
            setError("")
            console.log(response)
        } catch (error) {
            setWeather(null)
            setError("City not found. Please try again.")
        }
    }
    const weatherIcon= (icon)=>{
        return `https://openweathermap.org/img/wn/${icon}@2x.png`
    }

    // useEffect(()=>fetchWeather(), [city])

    const onKeyDown = (event)=>{
        if(event.key == 'Enter'){
            fetchWeather()
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        fetchWeather();
    }
    return (
        <>

            <div className='h-screen w-full bg-blue-300 flex items-center flex-col gap-y-4 justify-center '>
                <form onSubmit={handleSubmit}>

                    <input 
                    type="text" 
                    placeholder='Search...'
                    value={city}
                    onKeyDown={onKeyDown}
                    onChange={(e)=>setCity(e.target.value)}
                    className='p-2 rounded-md border'
                    />
                    <button 
                        className='  px-4 gap-x-5 py-2 bg-violet-800 text-white rounded-md hover:bg-violet-700 transition'
                    >
                    Search    
                    </button>  
                </form>
                {/* Weather Card */}
                {weather ?(
                    <div className="card bg-violet-950 text-white h-52 w-80 gap-5 rounded-md font-bold text-sm  flex flex-wrap  items-center justify-center flex-col">
                        <h2>{weather.name}</h2>
                        <img 
                        src={weatherIcon(weather.weather[0].icon)}
                        alt='weather'
                        className='w-20 mb-4 h-20'
                        /> 
                        <p>Temperature: {weather.main.temp}°C</p>
                        <p>Description: {weather.weather[0].description}</p>
                        <p>Feels like : {weather.main.feels_like}°C</p>
                        <p>Humidity : {weather.main.humidity}%</p>
                        <p>Pressure : {weather.main.pressure}pa</p>
                        <p>Wind Speed : {weather.wind.speed}m/s</p>
                    </div>

                    ): (<Triangle 
                        visible={true}
                        height="50"
                        width="1000"
                        color="#ff0000"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass=""/>)} 
                </div>
        </>
    )
}