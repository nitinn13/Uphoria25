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
<<<<<<< Updated upstream

    <div className="w-[100vw] min-h-screen bg-uphoria bg-no-repeat bg-cover bg-center flex flex-col items-center font-ibm-plex-condensed">



=======
    <div className="w-full min-h-screen bg-uphoria bg-no-repeat bg-cover bg-center flex flex-col items-center font-ibm-plex-condensed ">
>>>>>>> Stashed changes

      <RouterProvider router={router} />
    </div>

  )
}

export default App