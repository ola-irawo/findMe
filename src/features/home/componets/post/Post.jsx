import React, { useEffect } from 'react'
import "./post.css"
import {db, collection} from"../../../index"
import { useDispatch, useSelector } from 'react-redux'
import { addPost, getPosts, selectPostById, selectPostIds, selectPosts } from '../../reducers/postSlice'

const Post = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)
    const postsId = useSelector(selectPostIds)

    // const postRef = collection
    const add = () => {
        console.log("adding post")
        dispatch(addPost({p: "I think there is pretty easy"}))
    }

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    console.log(postsId)
    
  return (
    <section className="post-section">
        <div className="post-container">
            {posts.map(post => {
              return <div key={post.id} className="post-details">
                {post.p}
              </div>
            })}
        </div>
      Post

      <button onClick={add}>Add post</button>
    </section>
  )
}

export default Post;