import React from 'react'
import Homepage from './pages/Homepage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sponsors from './pages/Sponsors'
import Gallery from './pages/Gallery'
import EventCategoryPage from './pages/EventCategoryPage'
import Timeline from './pages/Timeline'

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
  {
    path: '/Timeline',
    element: <Timeline />,

  },
  {
    path: '/category/:category',
    element: <EventCategoryPage />,
    
  }
  
])


const App = () => {
  return (
    <div className="w-full min-h-screen bg-bgwebsite bg-repeat bg-contain flex flex-col items-center font-ibm-plex-condensed">
      <RouterProvider router={router} />
    </div>

  )
}

export default App