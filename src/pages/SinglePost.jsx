import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { selectPosts } from '../features/home/reducers/postSlice'
import { FaComment, FaEdit, FaHeart, FaShare, FaTrash } from 'react-icons/fa'
import { Button } from '../features'

const SinglePost = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const allPosts = useSelector(selectPosts)
    const post = allPosts.find(post => post.id === id)

    return (
    <section>
       <div key={post.id} className="post-details">
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
                <FaShare/>
                </div>
            </div>

        </div>
    </section>
  )
}

export default SinglePost
