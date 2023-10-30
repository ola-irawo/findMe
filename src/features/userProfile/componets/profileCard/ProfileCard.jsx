import React, { useEffect, useMemo, useState } from 'react'
import { FaBirthdayCake, FaCalendar, FaEdit, FaMapMarker } from 'react-icons/fa'
import "./profile-card.css"
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser, selectAllUsers, getUser, Button, onSnapshot, collection, db, getDocs, getUsers } from '../../..'
import ProfileCardModal from './componet/ProfileCardModal'

const ProfileCard = () => {
    const [profileModal, setProfileModal] = useState(false)

    alert("welcome")

    const dispatch = useDispatch()
    // const currentUser = useSelector(getUser)
    const allUsers = useSelector(selectAllUsers)
    const userUid = localStorage.getItem("userUid")

    const getActiveUser = allUsers.find(user => user.userUid === localStorage.getItem("userUid"))

    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    // console.log(currentUser)

    const userRef = collection(db, "users")
    const [u, setU] = useState({})

    const gU = async () => {
      const userDoc = getDocs(userRef)

      const querySnapshot = await getDocs(userRef);
      const data = [];
  
      // setU(querySnapshot.docs.map((doc) => {
      //   return { ...doc.data(), id: doc.id }
      // }))
      // setU(data)
      onSnapshot(userRef, (snapshot) => {
        setU(snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        }));
      });
    }

    // console.log(u.find(user => user.userUid === userUid))
    console.log("tst")

    const a = allUsers.find(user => user.userUid === userUid)
    useEffect(() => {
      gU()
    }, [])

    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(getActiveUser))
        dispatch(getCurrentUser(getActiveUser))
    }, [])


  return (
    <section className="profile-card-section">
        {profileModal && <ProfileCardModal setProfileModal={setProfileModal} />}
      <div className="profile-card-container">
        <div className="profile-card-img-container">
            <img src={a.profile_img} alt="" className="profile-card-img" />
            <Button text={<FaEdit /> } handleEvent={() => setProfileModal(true)} className={"open-profile-modal"}/>
        </div>

        <div className="profile-card-details">
            <h4 className="profile-name">{a.user_name}</h4>
            <p className="profile-status">{a.status}</p>

            <div className="profile-about">
                <small><FaMapMarker /> {a.location}</small>
                <small> <FaBirthdayCake /> {a.birth_date}</small>
                <small><FaCalendar /> {a.joined}</small>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileCard
