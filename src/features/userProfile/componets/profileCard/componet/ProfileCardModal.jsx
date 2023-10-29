import React, { useEffect, useState } from 'react'
import Button from '../../../../../componets/Button'
import { FaCross, FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getDownloadURL, ref, selectAllUsers, storage, uploadBytesResumable } from '../../../..'
import { updateCurrentUserProfile } from '../../../../profile/reducers/userSlice'

const ProfileCardModal = ({setProfileModal}) => {
    const allUsers = useSelector(selectAllUsers)
    const getActiveUser = allUsers.find(user => user.userUid === localStorage.getItem("userUid"))
    
    const [profileImgUrl, setProfileImgUrl] = useState("")
    const [uploadProgress, setUploadProgress] = useState(0)

    const [profileForm, setProfileForm] = useState({
        // profile_img: profileImgUrl,
        user_name: "",
        status: "",
        location: "",
        birth_date: "",
        userUid: localStorage.getItem("userUid"),
        id: getActiveUser.id
    })
    const [profileImg, setProfileImg] = useState(profileForm.profile_img)

    const acceptedFileTypes = ["image/jpeg", "image/png"]

    const uploadProfileImg = async () => {
        const profileImageRef = ref(storage, `profileImg/${profileForm.profile_img.name}`)
        const uploadTask = uploadBytesResumable(profileImageRef, profileForm.profile_img)

        uploadTask.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setUploadProgress(progress)
            console.log(uploadProgress)
        }, error => {
            console.log(error)
        }, async () => {
            const getProfileImgUrl = await getDownloadURL(uploadTask.snapshot.ref)
            setProfileForm((prevForm) => ({
                ...prevForm,
                profile_img: getProfileImgUrl,
            }));

            setProfileImgUrl(getProfileImgUrl)
            console.log(profileForm.profile_img.name)
        })
    }


    // useEffect(() => {
    //     if(!profileForm.profile_img){
    //         return;
    //     }
    //     console.log(profileForm.profile_img)
        
    //     uploadProfileImg()

    //     return () => uploadProfileImg()
    // }, [profileImg.profile_img])

    const dispatch = useDispatch()
    // console.log(getActiveUser.id)
    // console.log(profileForm.userUid)

    const handleFormInput = (e) => {
        const {name, value, files, type} = e.target
        setProfileForm(oldData => {
            return {
                ...oldData,
                [name]: type === "file" ? files[0] : value
            }
        })
    }

    const updateProfileInfo = async (e) => {
        e.preventDefault()
        dispatch(updateCurrentUserProfile(profileForm))
        console.log(profileForm)
    }

  return (
    <div className="user-profile-modal-container">
        <Button text={"X"} handleEvent={() => setProfileModal(false)} className={"close-profile-modal"}/>
        <h2>Edit Profile</h2>
      <form onSubmit={updateProfileInfo} className="user-profile-form">

        {/* <label htmlFor="file" className="profile-img-label"> */}
        {/* <Button  text={<FaPlus />} type={"button"} /> */}

        {/* <input 
            type="file"
            name="profile_img"
            id="file"
            // value={profileForm.profile_img} 
            onChange={handleFormInput}
         /> */}

        {/* </label> */}
       
       <label>
            <small>Name:</small>
            <input
                type="text"
                name="user_name"
                placeholder="User name"
                value={profileForm.user_name}
                onChange={handleFormInput}
            />
       </label>

       <label>
        <small>Status:</small>
            <textarea
                placeholder="Status"
                name="status"
                value={profileForm.status}
                onChange={handleFormInput}
            />
       </label>

       <label>
        <small>Locaton:</small>
            <input 
                type="text"
                name="location"
                placeholder="Location"
                value={profileForm.location}
                onChange={handleFormInput}
            />
       </label>

        <label htmlFor="">
            <small>Birth date:</small>
            <input 
                type="date"
                name="birth_date"
                value={profileForm.birth_date}
                onChange={handleFormInput}
            />
        </label>

        <Button text={"Update Profile"} className={"update-profile"} />
      </form>
    </div>
  )
}

export default ProfileCardModal
