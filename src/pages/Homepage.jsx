import React from 'react'
import Uphoriatext from '../components/Uphoriatext'
import Navbar from '../components/Navbar'
import Desc from '../components/Desc'

const Homepage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[10vw]  mb-[20vh]'>
      <div className='sticky top-[1vh] z-10'>
        <Navbar />
      </div>

      <Uphoriatext />
      <Desc />
    </div>
  )
}

export default Homepage