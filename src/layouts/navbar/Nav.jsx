import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./nav.css"
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getWindowWidth, setWindowWidth } from '../../features/home/reducers/postSlice';
import { getUser } from '../../features';
import Logout from '../../pages/Logout';


const Nav = () => {
  const dispatch = useDispatch()
  const windowWidth = useSelector(getWindowWidth)
  const currentUser = useSelector(getUser)

  useEffect(() => {
    const handleWindowResize = () => {
      dispatch(setWindowWidth(window.innerWidth))
      // console.log(window.innerWidth)
    }

    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)

  }, [dispatch])

  return (
    <header className="header-container">
      <div className="brand-logo">

          {/* <img src={"currentUser.profile_img"} className="user-profile-img" alt={"currentUser.user_name"} /> */}

        <div className="brand-container">
          <div>
            <span></span>
            <span></span>
          </div>
          <h2>FindMe</h2>
        </div>

        <div className="logout-container">
          <Logout />
          <small>Logout</small>
        </div>
      </div>

      <nav className="nav-container" aria-label="primary navigation">
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink to={"/"}><AiOutlineHome /> {windowWidth >= 800 &&  "Home"}</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to={"/search"}><AiOutlineSearch /> {windowWidth >= 800 && "Search"}</NavLink>
          </li>
          {/* <li className="nav-list-item">
            <NavLink to={"/user-profile"}><AiOutlineUser /> {windowWidth >= 800 && "Profile"}</NavLink>
          </li> */}
          <li className="nav-list-item">
            <NavLink to={"/message"}><AiOutlineMessage /> {windowWidth >= 800 && "Message"}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
