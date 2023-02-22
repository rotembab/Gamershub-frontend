import React from 'react'




function Navbar() {
  return (
    <div className='bg-secondary p-2 max-sm:p-4 flex flex-row w-full m-auto'>
        {/* Logo */}
        <img className='m-auto p-1 w-12' src={require('../DevLogo.png')}/>
        {/* Burger menu for mobile */}
        <img className='hidden max-sm:flex m-auto p-1 w-10 h-10' src={require('../MenuIcon.png')}/>
        {/* Burger Menu */}
        <div className='hidden absolute w-3/4 bg-white left-0 top-1 h-5/6'>This is menu</div>
        {/* Search bar */}
        <input type="text" className='bg-white rounded-full h-8 w-1/2 max-sm:w-34 m-auto pl-2' placeholder='Search'/>

        <img className='p-2 w-11 h-11' src={require('../HeartLogo.png')}/>
        <img className='p-2 w-11 h-11' src={require('../CartLogo.png')}/>
        <img className='p-2 w-11 h-11' src={require('../AccountLogo.png')}/>
    </div>
  )
}

export default Navbar