import React from 'react'
import logo192 from '../img/logo192.png'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <NavLink to="/">
        <img src={logo192} height="100" alt='no encontrada' />
       </NavLink>
       <div className='collapse navbar-collapse' id='navbarCollapse'>
        <div className='navbar-nav ms-auto'>
          <h4><NavLink to="/Instructor" className='nav-item nav-link text-center' style={{color: "skyblue"}} >Instructor</NavLink></h4>
          <h4><NavLink to="/Clases" className='nav-item nav-link text-center' style={{color: "skyblue"}} >Clases</NavLink ></h4>
          <h4><NavLink to="/Asociate" className='nav-item nav-link text-center' style={{color: "skyblue"}}>Asociate</NavLink ></h4>
          
        </div>
       </div>

        </div>
      </nav>
   </>
  )
}
