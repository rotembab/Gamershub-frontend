import React from 'react'

function Navbar() {
  return (
    <div className='bg-secondary p-2 max-sm:p-4 flex flex-row w-full'>
        {/* Logo */}
        <span className='m-auto'>logo_dev</span>
        {/* Burger menu for mobile */}
        <div className='hidden max-sm:flex m-auto'>Burger</div>
        {/* Search bar */}
        <input type="text" className='bg-white rounded-full h-8 w-1/2 max-sm:w-34 m-auto' placeholder='Search'/>
        <div className='p-2'>X</div>
        <div className='p-2'>X</div>
        <div className='p-2'>X</div>
    </div>
  )
}

export default Navbar