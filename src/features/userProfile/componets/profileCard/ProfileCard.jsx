import React, { useEffect } from 'react'
import { FaBirthdayCake, FaCalendar, FaMapMarker } from 'react-icons/fa'
import "./profile-card.css"
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser, selectAllUsers, user } from '../../..'
import ProfileCardModal from './componet/ProfileCardModal'

const ProfileCard = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(user)
    const allUsers = useSelector(selectAllUsers)

    const getActiveUser = allUsers.find(user => user.userUid === localStorage.getItem("userUid"))
    // console.log(getActiveUser)

    useEffect(() => {
        dispatch(getCurrentUser(getActiveUser))
    }, [])

  return (
    <section className="profile-card-section">
        {/* <ProfileCardModal /> */}
      <div className="profile-card-container">
        <div className="profile-card-img-container" style={{background: `url(${getActiveUser.profile_img})`}}>
            <img src={getActiveUser.profile_img} alt="" className="profile-card-img" />
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
