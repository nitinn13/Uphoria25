import React from 'react'
import Navbar from '../components/Navbar'
import Timelinecomp from '../components/Timelinecomp'

const Timeline = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-[2vw]'>
            <div className='sticky top-[1vh] z-10'>
                <Navbar />
            </div >
            
            <Timelinecomp />
        </div>
    )
}

export default Timeline