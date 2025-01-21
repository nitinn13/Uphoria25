import React from 'react'
import Homepage from './pages/Homepage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sponsors from './pages/Sponsors'
import Gallery from './pages/Gallery'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,

  },
  {
    path: '/Sponsors',
    element: <Sponsors />,

  },
  {
    path: '/Gallery',
    element: <Gallery />,

  },
  
])


const App = () => {
  return (

    <div className="w-full min-h-screen bg-uphoria bg-repeat bg-cover bg-screen flex flex-col items-center font-ibm-plex-condensed">
      <RouterProvider router={router} />
    </div>

  )
}

export default App