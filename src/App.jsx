import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {


   const [location,SetLocation] =useState('');
   const [weather,SetWeather] =useState({});
   const [error,SetError] =useState(false);
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=19cf8a76d0f17347e5eda531bdd11e79`

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      SetWeather(response.data)
      SetError(false)
    } catch (error) {
      console.log(error);
        SetError(true)
        console.log(Object.keys(weather).length)
    }
  };

  return (
    <><div className=" m-1 border-solid border-2 border-sky-500 rounded bg-black h-56 min-h-full flex items-center justify-center flex-col gap-4">
       <h1 className="text-4xl font-bold underline  text-sky-500"> Weather app</h1>
  <div className="flex items-center justify-center gap-4"><label htmlFor="input" className='text-blue-800 font-bold' >Search weather location:</label>
  <input type="text"  onChange={(e)=>SetLocation(e.target.value)} placeholder='enter a city..'/></div>
  <button className='bg-sky-500 p-1 rounded text-white font-bold hover:scale-105' onClick={fetchData}>Search</button>
  </div>
<div className="m-1 border-solid border-2 border-sky-500 rounded bg-black text-zinc-100  min-h-56 min-h-full flex items-center justify-center flex-col gap-4">
<h1 className='text-3xl'>{weather.name}</h1>
<div className='underline underline-offset-4'>{weather.main?<p>Temeprature: {weather.main.temp}f</p>:null}</div>
<div className='underline underline-offset-4'>{weather.main?<p>Maximum temperature: {weather.main.temp_max}f</p>:null}</div>
<div className='underline underline-offset-4'>{weather.main?<p>Minimum temeprature: {weather.main.temp_min}f</p>:null}</div>
<div className='underline underline-offset-4'>{weather.main?<p>Feels like: {weather.main.feels_like}f</p>:null}</div>
<div className='underline underline-offset-4'>{weather.wind?<p>Wind: {weather.wind.speed}mph</p>:null}</div>
  </div>

    </>
  )
}

export default App
