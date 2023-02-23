import { useState } from 'react'
import React  from 'react'
import Logo from '../DevLogo.svg'
import Menu from '../MenuIcon.svg'
import Close from '../CloseIcon.svg'
import Heart from '../HeartIcon.svg'
import Cart from '../CartIcon.svg'
import Account from '../AccountIcon.svg'
function Navbar() {
    const [menu,setMenu] = useState(false);

  return (
      <div className='bg-secondary p-2 max-sm:p-4 flex flex-row w-full m-auto'>
          {/* Logo */}
          <img className=' m-r-auto p-1 w-12' alt='GamersHub Logo' src={Logo}/>
          {/* Burger menu for mobile */}
          <img onClick={()=>{setMenu(!menu)}} className='hidden max-sm:flex m-auto p-1 w-10 h-10' alt='Menu' src={Menu}/>
          {/* Burger Menu */}
          <div className={`${menu?"":"hidden"} sm:hidden absolute w-3/4 bg-third border border-l-0 border-fourth left-0 top-1 h-5/6`}>
            This is menu
            {/* Close Button */}
            <img className='w-9 h-9 absolute right-1 top-1' onClick={()=>{setMenu(!menu)}} src={Close} alt="Close"/>
          </div>
          {/* Search bar */}
          <input type="text" className='bg-white rounded-full h-8 w-1/2 max-sm:w-34 m-auto pl-2' placeholder='Search'/>

          <img className='p-2 w-11 h-11' alt='Wishlist' src={Heart}/>
          <img className='p-2 w-11 h-11' alt='Cart' src={Cart}/>
          <img className='p-2 w-11 h-11' alt='My Account' src={Account}/>
      </div>
  )
}

export default Navbar