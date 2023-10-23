import React, { useState } from 'react'
import "./filter-result.css"
import { useSelector } from 'react-redux'
import { selectPosts } from '../../../home/reducers/postSlice'
import { useNavigate } from 'react-router-dom'
import { FaComment, FaHeart, FaShare } from 'react-icons/fa'

const FilterResult = () => {
  const [filter, setFilter] = useState("")
  const navigate = useNavigate()

  const allPosts = useSelector(selectPosts)

  const filteredPosts = allPosts.filter(post =>
    post &&  post.post && post?.post.toLowerCase().includes(filter.toLowerCase())
  ); 
  console.log(filteredPosts)

  return (
    <div className="filter-result-container">
       <div className="filter-input-container">
        <input 
          type="text" 
          placeholder="search"  
          className="filter-input" 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div>
      {filter 
        ? filteredPosts.map(post => {
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
           
          })
          :
          <center> Search for items</center>
        }
      </div>
    </div>
  )
}

export default FilterResult
