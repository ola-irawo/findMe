import React, { useEffect } from 'react'
import "./post.css"
import {db, collection, selectAllUsers, getUsers, serverTimestamp, user, getCurrentUser, Button} from"../../../index"
import { useDispatch, useSelector } from 'react-redux'
import { addPost, changePostModal, getPostModal, getPosts, selectPostById, selectPostIds, selectPosts } from '../../reducers/postSlice'
import { nanoid } from '@reduxjs/toolkit'
import { FaComment, FaCopy, FaEdit, FaHeart, FaLink, FaPlus, FaShare, FaTrash } from 'react-icons/fa'
import PostModal from './componets/PostModal'

const Post = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)
    const allUsers = useSelector(selectAllUsers)
    const postsId = useSelector(selectPostIds)

    const setCurrentUser = allUsers.find(user => user.userUid === localStorage.getItem("userUid"))

    const currentUser = useSelector(user)
    // const user = allUsers.find(user => user.hankoUid === localStorage.getItem("hanko"))
    // console.log(user)

    useEffect(() => {
      dispatch(getCurrentUser(setCurrentUser))
    }, [])
    console.log(setCurrentUser)
    console.log(currentUser)

    const add = () => {
        console.log("adding post")
        dispatch(addPost({
          post: "I love cooking", 
          time: "08: 50 pm",
          name: currentUser.user_name, 
          postId: nanoid(), 
          userUid: currentUser.userUid
        }))
    }

    const postModal = useSelector(getPostModal)
    
  return (
    <section className="post-section">
      {postModal && <PostModal />}
        <div className="post-container">

            {posts.map(post => {
              return <div key={post.id} className="post-details">

                <div className="post-head">
                  <div className="post-sub-head">

                    <div className="post-img-container">
                      <img src={"https://firebasestorage.googleapis.com/v0/b/fir-login-33c28.appspot.com/o/profile%2FA93EC91F-58DC-417B-A0BC-2ED82FD9CB9E.jpeg?alt=media&token=e51960b3-8efd-445c-8ad5-51a108c20555"} alt="" />
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
                    {/* <img src={"https://firebasestorage.googleapis.com/v0/b/fir-login-33c28.appspot.com/o/profile%2FA93EC91F-58DC-417B-A0BC-2ED82FD9CB9E.jpeg?alt=media&token=e51960b3-8efd-445c-8ad5-51a108c20555"} alt="" className="content-img" /> */}
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
      
        <button className="post-btn" onClick={() => dispatch(changePostModal(true))}><FaPlus /></button>
    </section>
  )
}

export default Post;