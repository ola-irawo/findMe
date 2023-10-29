import React from 'react'

const LikeComponet = ({postId, userUid}) => {

    const l = () => {
        console.log({postId, userUid})
    }
  return (
    <div onClick={l}>
      Like
    </div>
  )
}

export default LikeComponet
