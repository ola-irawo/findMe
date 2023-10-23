import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./nav.css"
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaSignOutAlt } from 'react-icons/fa';


const Nav = () => {
  return (
    <header className="header-container">
      <div className="brand-logo">
        <div>
          <h1>o</h1>
        </div>

        <div>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>

        <div>
          <h2><FaSignOutAlt /></h2>
        </div>
      </div>

      <nav className="nav-container" aria-label="primary navigation">
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink to={"/"}><AiOutlineHome /></NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to={"/search"}><AiOutlineSearch /></NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to={"/user-profile"}><AiOutlineUser /></NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to={"/message"}><AiOutlineMessage /></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
