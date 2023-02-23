import { useState } from 'react'
import React  from 'react'

function Navbar() {
    const [menu,setMenu] = useState(false);

  return (
    <div className='bg-secondary p-2 max-sm:p-4 flex flex-row w-full m-auto'>
        {/* Logo */}
        <img className='m-auto p-1 w-12' alt='GamersHub Logo' src={require('../DevLogo.png')}/>
        {/* Burger menu for mobile */}
        <img onClick={()=>{setMenu(!menu)}} className='hidden max-sm:flex m-auto p-1 w-10 h-10' alt='Menu' src={require('../MenuIcon.png')}/>
        {/* Burger Menu */}
        <div className={`${menu?"":"hidden"} sm:hidden absolute w-3/4 bg-white left-0 top-1 h-5/6`}>
          This is menu
          {/* Close Button */}
          <img className='w-9 h-9 absolute right-1 top-1' onClick={()=>{setMenu(!menu)}} src={require('../CloseIcon.png')} alt="Close"/>
        </div>
        {/* Search bar */}
        <input type="text" className='bg-white rounded-full h-8 w-1/2 max-sm:w-34 m-auto pl-2' placeholder='Search'/>

        <img className='p-2 w-11 h-11' alt='Wishlist' src={require('../HeartLogo.png')}/>
        <img className='p-2 w-11 h-11' alt='Cart' src={require('../CartLogo.png')}/>
        <img className='p-2 w-11 h-11' alt='My Account' src={require('../AccountLogo.png')}/>
    </div>
  )
}

export default Navbar