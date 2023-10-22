import React from 'react'
import "./profile-layout.css"
import { useDispatch, useSelector } from 'react-redux'
import { selectPosts } from '../../../home/reducers/postSlice'
import { FaComment, FaEdit, FaHeart, FaShare, FaTrash } from 'react-icons/fa'
import Button from '../../../../componets/Button'
import { selectAllUsers } from '../../../profile/reducers/userSlice'

const ProfileLayout = () => {
    const dispatch = useDispatch()
    const allPosts = useSelector(selectPosts)
    const allUsers = useSelector(selectAllUsers)
    const activeUser = allUsers.find(user => user.userUid === localStorage.getItem("userUid"))
    const currentUserPost = allPosts.filter(post => post.userUid === localStorage.getItem("userUid"))
    console.log(activeUser)
  return (
    <section>
       <div className="post-container">
            {currentUserPost.map(post => {
            return <div key={post.id} className="post-details">

                <div className="post-head">
                <div className="post-sub-head">

                    <div className="post-img-container">
                    <img src={activeUser.profile_img} alt="" />
                    </div>

                    <div className="name-date-container">
                    <h4 className="post-name">{post.name}</h4>
                    <div className="post-date-container">
                        <small className="post-time">{post.time}</small>
                        <small className="post-year"> Jan, 7, 2023</small>
                    </div>
                    </div>
                </div>

                <div className="edit-delete-container">
                    <Button text={<FaEdit />} />
                    <Button text={<FaTrash />} />
                </div>
                </div>

                <div className="post-content">
                <p className="post">{post.post}</p>
                {post.img && <div className="post-content-img">
                    <img src={post.img} alt="" className="content-img" />
                </div>}
                </div>

                <div className="post-interaction">
                    <div>
                    <FaHeart />
                    </div>

                    <div>
                    <FaComment />
                    </div>

                    <div>
                    <FaShare />
                    </div>
                </div>

            </div>
            })}
            
        </div>
    </section>
  )
}

export default ProfileLayout
