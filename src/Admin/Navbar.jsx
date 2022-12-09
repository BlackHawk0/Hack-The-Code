import React from 'react';
import {FaBars} from 'react-icons/fa';
function Navbar() {
  return (
    <>
      <div className='nav-bar'>
        <div className='menu-bars'>
          <FaBars/>
        </div>
        <div>
          <p className='title-admin'>T.M</p>
        </div>
      </div>
    </>
  )
}
export default Navbar;
