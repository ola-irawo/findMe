import React, { useEffect, useState } from 'react'
import "./post.css"
import {db, collection, selectAllUsers, getUsers, serverTimestamp, getUser, getCurrentUser, Button} from"../../../index"
import { useDispatch, useSelector } from 'react-redux'
import { addPost, changePostModal, deletePost, getPostModal, getPosts, getWindowWidth, selectPostById, selectPostIds, selectPosts, updatePost } from '../../reducers/postSlice'
import { nanoid } from '@reduxjs/toolkit'
import { FaComment, FaCopy, FaEdit, FaHeart, FaLink, FaPlus, FaShare, FaTrash } from 'react-icons/fa'
import PostModal from './componets/PostModal'
import { useNavigate } from 'react-router-dom'

const Post = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)
    const allUsers = useSelector(selectAllUsers)
    const postsId = useSelector(selectPostIds)
    const postModal = useSelector(getPostModal)
    const currentUser = useSelector(getUser)
    const windowWidth = useSelector(getWindowWidth)

    const userUid = localStorage.getItem("userUid")
    const setCurrentUser = allUsers.find(user => user.userUid === userUid)

    useEffect(() => {
      dispatch(getCurrentUser(setCurrentUser))
    }, [])

    useEffect(() => {
      windowWidth >= 800 &&  dispatch(changePostModal(true))
    }, [])

  return (
    <section className="post-section">
      {windowWidth < 800 ? postModal && <PostModal /> : <PostModal />}
        <div className="post-container">

            {posts.map(post => {
              return <div key={post.id} className="post-details">

                <div className="post-head">
                  <div className="post-sub-head">

                    <div className="post-img-container">
                      <img src={post.profile_img} alt="" />
                    </div>

                    <div className="name-date-container">
                      <h4 className="post-name">{post.name}</h4>
                      <div className="post-date-container">
                        <small className="post-time">{post.time}</small>
                      </div>
                    </div>
                  </div>

                 {
                  userUid === post.userUid 
                    &&
                  <div className="edit-delete-container">
                    <Button text={<FaEdit />} handleEvent={() => dispatch(updatePost({id: post.id, post: "update post"}))} />
                    <Button text={<FaTrash />} handleEvent={() => dispatch(deletePost(post.id))}/>
                  </div>
                  }

                </div>

                <div className="post-content" onClick={() => navigate(`/${post.id}`)}>
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
      
        {windowWidth < 800 && <button className="post-btn" onClick={() => dispatch(changePostModal(true))}><FaPlus /></button>}
    </section>
  )
}

export default Post;