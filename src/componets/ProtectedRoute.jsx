import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const hankoId = localStorage.getItem("hanko")
  return (hankoId ? <Outlet /> : <Navigate to={"/login"} />)
}

export default ProtectedRoute
