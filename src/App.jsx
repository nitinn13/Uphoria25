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
<<<<<<< HEAD
    <div className="w-[100vw] min-h-screen bg-uphoria bg-no-repeat bg-cover bg-center flex flex-col items-center font-ibm-plex-condensed">
=======
    <div className="w-screen min-h-screen bg-uphoria bg-no-repeat bg-cover bg-center flex flex-col items-center font-ibm-plex-condensed">
>>>>>>> 3b7a2b125ac876aeaf9d448a5ab4fdfc77908eba

      <RouterProvider router={router} />
    </div>

  )
}

export default App