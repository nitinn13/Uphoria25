import React from 'react'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <div className="w-full h-screen bg-uphoria bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
      <div className='flex flex-col items-center justify-center'>
        <Homepage />
      </div>
      {/* <Homepage /> */}
    </div>
    
  )
}

export default App