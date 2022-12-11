import React from 'react';
import Navbar from './Navbar';
import NavPage from './NavPage';
import Sidebar from './Sidebar';
import './App2.css'
function MainPage() {
  
  return (
    <>
      {/* navbar section */}
      <div>
        <Navbar/>
     
      </div>
      {/* sidebar section */}
      <div className='sidebar-container'>
        <div className='side-bar'>
          <Sidebar/>
        </div>
        <div className='nav-page'>
          <NavPage/>
        </div>
      </div>
    </>
  )
}
export default MainPage;