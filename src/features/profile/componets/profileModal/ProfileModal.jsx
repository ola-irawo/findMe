import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {Button, addUser} from "../../../index"
import "./profile-modal.css"

const ProfileModal = () => {
    const [formData, setFormData] = useState({
        user_name: "",
        status: "",
        location: "",
        birth_date: "",
    })
    const dispatch = useDispatch()
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
        dispatch(addUser(formData))
    }

  return (
    <div className="profile-modal-container">

      <form onSubmit={formSumbit} className="profile-modal-form">
        <Button type={"button"} text={"x"} className={"close-profile-modal"} />

        <label htmlFor="">
            <small>Name:</small>
            <input 
                type="text"
                name="user_name"
                placeholder="User Name"
                value={formData.user_name}
                onChange={handleForm}
            />
        </label>

        <label htmlFor="">
            <small>Birth date:</small>
            <input 
                type="date"
                name="birth_date"
                placeholder="Birth date"
                value={formData.birth_date}
                onChange={handleForm}
            />
        </label>

        <label htmlFor="">
            <small>Location:</small>
            <input 
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleForm}
            />
        </label>

        <label htmlFor="">
            <small>Status:</small>
            <input 
                type="text"
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
