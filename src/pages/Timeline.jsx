import React from 'react'
import Navbar from '../components/Navbar'

const Timeline = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-[12vw]'>
            <div className='sticky top-[1vh] z-10'>
                <Navbar />
            </div>
            <div>
                Timeline
            </div>
        </div>
    )
}

export default Timeline