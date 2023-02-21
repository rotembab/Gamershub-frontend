import React from 'react'

function Navbar() {
  return (
    <div className='bg-secondary p-2 max-sm:p-4 flex flex-row w-full m-auto'>
        {/* Logo */}
        <span className='m-auto p-1'>logo_dev</span>
        {/* Burger menu for mobile */}
        <div className='hidden max-sm:flex m-auto p-1'>Burger</div>
        {/* Burger Menu */}
        <div className='hidden absolute w-3/4 bg-white left-0 top-1 h-5/6'>This is menu</div>
        {/* Search bar */}
        <input type="text" className='bg-white rounded-full h-8 w-1/2 max-sm:w-34 m-auto' placeholder='Search'/>
        <div className='p-2'>X</div>
        <div className='p-2'>X</div>
        <div className='p-2'>X</div>
    </div>
  )
}

export default Navbar