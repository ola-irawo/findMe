import React, { useEffect, useState } from 'react'
import { FaImage, FaTimes, FaWindowClose } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, changePostModal, getPostModal } from '../../../reducers/postSlice'
import { getCurrentUser, getDownloadURL, ref, selectAllUsers, storage, uploadBytesResumable, getUser } from '../../../..'
import { nanoid } from '@reduxjs/toolkit'
import { getCurrentTime } from '../../../../../componets/getCurrentTime'

const PostModal = () => {
    const [post, setPost] = useState("")
    const [postImg, setPostImg] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [uploadProgress, setUploadProgress] = useState(0)

    const dispatch = useDispatch()
    const allUsers = useSelector(selectAllUsers)
    console.log(post)
    const userUid = localStorage.getItem("userUid")

    const setCurrentUser = allUsers.find(user => user.userUid === userUid)
    const currentUser = useSelector(getUser)

    useEffect(() => {
        dispatch(getCurrentUser(setCurrentUser))
    }, [])

    const sendPost = (e) => {
        e.preventDefault()

        dispatch(addPost({
            post,
            time: getCurrentTime(),
            name: currentUser.user_name, 
            postId: nanoid(), 
            userUid: currentUser.userUid,
            img: imgUrl
        }))
        dispatch(changePostModal(false))
    }

    const postImgRef = ref(storage, `postImg/${postImg.name}`)
    const acceptedFileTypes = ["image/jpeg", "image/png"]

    const getImgUrl =  async () => {
        if(!postImg){
            return;
        }

        if(postImg && acceptedFileTypes.includes(postImg.type)){
            const uploadTask = uploadBytesResumable(postImgRef, (postImg))

            uploadTask.on("state_changed", (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setUploadProgress(progress)
            }, (error) => {
                console.log(error)
            }, async () => {
                const getImgUrl = await getDownloadURL(uploadTask.snapshot.ref)
                setImgUrl(getImgUrl)
            })
        }
        else{
            alert("Please only jpeg and png files are accepted")
            return;
            // set error state
        }
    }

    console.log(postImg.name)

    useEffect(() => {
        if(!postImg ){
            return;
        }    
        getImgUrl()

        return () => getImgUrl()
      }, [postImg])

    //   const f = [imgUrl, postImg, uploadProgress >= 100].every(Boolean)
    //   console.log(f)

  return (
    <div className="post-modal-container">
        <div className="post-modal-wrapper">
            {
            postImg && uploadProgress < 100 && 
            <div className="profile-progress">
                <div className="progress" style={{width: `${uploadProgress}%`}}>
                </div>
                <p>Getting Image... {parseInt(uploadProgress)}%</p>
            </div>
            }
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
                    <label htmlFor="hide-file">
                        <FaImage className="post-file-icon" />
                        <input 
                        type="file" 
                        id="hide-file" 
                        className="post-modal-file" 
                        onChange={(e) => setPostImg(e.target.files[0])}/>
                        {/* <small>{postImg.name.slice(0, 7)}</small> */}
                    </label>

                    <button className="post-modal-btn">Post </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PostModal
