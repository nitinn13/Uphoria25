import React from 'react'
import Navbar from '../components/Navbar'
import Accomcomp from '../components/Accomcomp'

const Accommodation = () => {
  return (
    <div className='flex flex-col items-center justify-center '>
      <div className='sticky top-[1vh] z-10'>
        <Navbar />
      </div>
      <Accomcomp/>
    </div>
  )
}

export default Accommodation