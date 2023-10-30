import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const userUid = localStorage.getItem("userUid")
  return (userUid ? <Outlet /> : <Navigate to={"/login"} />)
}

export default ProtectedRoute
