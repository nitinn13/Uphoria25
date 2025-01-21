import React from 'react'
import Uphoriatext from '../components/Uphoriatext'
import Navbar from '../components/Navbar'
import Desc from '../components/Desc'
import Categories from '../components/Categories'
import Dates from '../components/Dates'
import Contact from '../components/Contact'
import PrizePool from '../components/PrizePool'

const Homepage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[12vw]' >
      <div className='sticky top-[1vh] z-10'>
        <Navbar />
      </div>

      <Uphoriatext />
      <Desc />
      <PrizePool />
      <Dates/>
      <Categories/>
      <Contact/>
    </div>
  )
}

export default Homepage