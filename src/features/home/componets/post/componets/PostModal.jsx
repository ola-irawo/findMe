import React, { useEffect, useState } from 'react'
import { FaImage, FaTimes, FaWindowClose } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, changePostModal, getPostModal } from '../../../reducers/postSlice'
import { getCurrentUser, selectAllUsers, user } from '../../../..'
import { nanoid } from '@reduxjs/toolkit'

const PostModal = () => {
    const [post, setPost] = useState("")
    const [postImg, setPostImg] = useState(null)
    const [imgUrl, setImgUrl] = useState("")

    const dispatch = useDispatch()
    const allUsers = useSelector(selectAllUsers)
    console.log(post)

    const setCurrentUser = allUsers.find(user => user.userUid === localStorage.getItem("userUid"))
    const currentUser = useSelector(user)

    useEffect(() => {
        dispatch(getCurrentUser(setCurrentUser))
    }, [])
    const sendPost = (e) => {
        e.preventDefault()

        dispatch(addPost({
            post,
            time: "01: 50 pm",
            name: currentUser.user_name, 
            postId: nanoid(), 
            userUid: currentUser.userUid
        }))
        dispatch(changePostModal(false))
    }

    console.log(postImg)

  return (
    <div className="post-modal-container">
        <div className="post-modal-wrapper">
            <button className="close-post-modal" onClick={() => dispatch(changePostModal(false))}><FaWindowClose /></button>

            <div className="post-modal-user-details">
                <img src="" alt="" />
                <h4>James</h4>
            </div>

            <form className="post-modal-form" onSubmit={sendPost}>

                <textarea 
                    name=""
                    placeholder="Create a post"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                />
                
                <div className="post-modal-file-container">
                    <label htmlFor="file">
                        <FaImage className="post-file-icon" />
                        <input 
                        type="file" 
                        id="file" 
                        className="post-modal-file" 
                        onChange={(e) => setPostImg(e.target.files[0])}/>
                    </label>

                    <button className="post-modal-btn">Post </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PostModal
