import React from 'react'
import Uphoriatext from '../components/Uphoriatext'
import Navbar from '../components/Navbar'
import Desc from '../components/Desc'

const Homepage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[10vw] mt-[5vh] mb-[20vh]'>
        <Navbar/>
        <Uphoriatext />
        <Desc/>
    </div>
  )
}

export default Homepage