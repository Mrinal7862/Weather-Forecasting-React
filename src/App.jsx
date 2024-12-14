import { useState } from 'react'
import './App.css'
// import {} from "./Components";
import { Outlet } from 'react-router-dom';
import {Header, SearchBar, WeatherCard} from "./Components/index.js";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Outlet/>

    </>

  )
}

export default App
