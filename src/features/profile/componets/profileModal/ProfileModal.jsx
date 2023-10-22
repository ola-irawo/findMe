import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Button, addUser, selectAllUsers, getUser, getCurrentUser} from "../../../index"
import "./profile-modal.css"
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import { getUsers } from '../../reducers/userSlice'

const ProfileModal = () => {
    const [userUid, setUserUid] = useState(localStorage.getItem("userUid") || "")

    const [formData, setFormData] = useState({
        user_name: "",
        status: "",
        location: "",
        birth_date: "",
        userUid,
        joined: new Date().getFullYear()
    })
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const allUsers = useSelector(selectAllUsers)

    const setCurrentUser = allUsers.find(user => user.userUid === userUid)

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getCurrentUser(setCurrentUser))
        if(localStorage.getItem("userUid") !== null){
            return;
        }
        else{
            localStorage.setItem("userUid", nanoid())
        }
    }, [])

    const u = useSelector(getUser)
    console.log(u)

    const handleForm = (e) => {
        const {name, value} = e.target
        setFormData(oldData => {
            return {
                ...oldData,
                [name]: value
            }
        })
    }

    const formSumbit = (e) => {
        e.preventDefault()

        try{
            if(formData){
                dispatch(addUser(formData))
                setFormData("")
                navigate("/")
            }
        }
        catch(error){
            console.log(error)
        }
    }

    if(!userUid){
        navigate("/login")
    }

    if(setCurrentUser !== undefined){
        navigate("/")
    }

  return (
    <div className="profile-modal-container">

      <form onSubmit={formSumbit} className="profile-modal-form">
        <Button type={"button"} text={"x"} className={"close-profile-modal"} />

        <label htmlFor="user_name">
            <small>Name:</small>
            <input 
                type="text"
                id="user_name"
                name="user_name"
                placeholder="User Name"
                value={formData.user_name}
                onChange={handleForm}
            />
        </label>

        <label htmlFor="birth_date">
            <small>Birth date:</small>
            <input 
                type="date"
                id="birth_date"
                name="birth_date"
                placeholder="Birth date"
                value={formData.birth_date}
                onChange={handleForm}
            />
        </label>

        <label htmlFor="location">
            <small>Location:</small>
            <input 
                type="text"
                id="location"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleForm}
            />
        </label>

        <label htmlFor="status">
            <small>Status:</small>
            <input 
                type="text"
                id="status"
                name="status"
                placeholder="Status"
                value={formData.status}
                onChange={handleForm}
            />
        </label>
        
        <Button text={"Update Profile"} />
      </form>
    </div>
  )
}

export default ProfileModal
