import React from 'react'

const Navbar = () => {
  return (
    <div className='border-2 border-white rounded-3xl text-white hover:border-gray-400'>
        <ul className='flex flex-row justify-around items-center gap-9 mx-5 my-2 '>
            
            <li className='hover:text-gray-300'><a href="#">Events</a></li>
            <li className='hover:text-gray-300'><a href="#">Timeline</a></li>
            <li className='hover:text-gray-300'><a href="#">About</a></li>
            <li className='hover:text-gray-300'><a href="#">Contact</a></li>
            <li className='hover:text-gray-300'><a href="#">Gallary</a></li>
        </ul>
        
    </div>
  )
}

export default Navbar