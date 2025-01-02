import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ErrorPage from "./Pages/Errorpage.jsx";
import {SearchBar, WeatherCard} from "./Components"
import Description from './Pages/Description.jsx'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[  {
            path: '/home',
            element:<SearchBar/>
        },{
            path: '/weather',
            element: <WeatherCard/>

        },{
          path: '/Description',
          element: <Description/>
        }],
        errorElement: <ErrorPage/>
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
