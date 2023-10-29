import React, { useEffect, useState } from 'react'
import { FaBirthdayCake, FaCalendar, FaEdit, FaMapMarker } from 'react-icons/fa'
import "./profile-card.css"
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser, selectAllUsers, getUser, Button } from '../../..'
import ProfileCardModal from './componet/ProfileCardModal'

const ProfileCard = () => {
    const [profileModal, setProfileModal] = useState(false)

    const dispatch = useDispatch()
    const currentUser = useSelector(getUser)
    const allUsers = useSelector(selectAllUsers)

    const getActiveUser = allUsers.find(user => user.userUid === localStorage.getItem("userUid"))
    console.log(getActiveUser)

    useEffect(() => {
        dispatch(getCurrentUser(getActiveUser))
    }, [])

  return (
    <section className="profile-card-section">
        {profileModal && <ProfileCardModal setProfileModal={setProfileModal} />}
      <div className="profile-card-container">
        <div className="profile-card-img-container">
            <img src={getActiveUser.profile_img} alt="" className="profile-card-img" />
            <Button text={<FaEdit /> } handleEvent={() => setProfileModal(true)}/>
        </div>

        <div className="profile-card-details">
            <h4 className="profile-name">{getActiveUser.user_name}</h4>
            <p className="profile-status">{getActiveUser.status}</p>

            <div className="profile-about">
                <small><FaMapMarker /> {getActiveUser.location}</small>
                <small> <FaBirthdayCake /> {getActiveUser.birth_date}</small>
                <small><FaCalendar /> {getActiveUser.joined}</small>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileCard
