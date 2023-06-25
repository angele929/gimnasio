import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="container" >
  <footer className="py-3 my-4" >
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><NavLink to="/Home" className="nav-link px-2 text-body-secondary">Home</NavLink></li>
      <li className="nav-item"><NavLink to="/Clases" className="nav-link px-2 text-body-secondary">Clases</NavLink></li>
      <li className="nav-item"><NavLink to="/Instructor" className="nav-link px-2 text-body-secondary">Instructor</NavLink></li>
      <li className="nav-item"><NavLink to="/Asociate" className="nav-link px-2 text-body-secondary">Asociate</NavLink></li>

    </ul>
    <p className="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
  </footer>
</div>
  )
}