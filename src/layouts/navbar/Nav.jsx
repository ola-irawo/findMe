import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Nav = () => {
  return (
    <>

      <header>
        <div className="brand-logo"></div>
        <nav className="nav-container" aria-label="primary navigation">
          <ul className="nav-list">
            <li className="nav-list-item">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink to={"/"}>Message</NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink to={"/"}>Logout</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

export default Nav
