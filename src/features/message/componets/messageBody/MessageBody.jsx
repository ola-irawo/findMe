import React from 'react'
import "./message-body.css"

const MessageBody = ({messageBody}) => {
    console.log(process.env.REACT_APP_OPENAI_API_KEY)
    console.log(messageBody)
    
  return (
    <div className="msg-body-container">
      {messageBody.map(msg => {
        return <div className="msg-body-container" key={msg.id}>
          { msg.user && <div className="user-msg-container">
              {msg.user}
            </div>}

            <div className="ai-msg-container">
              {msg.bot}
            </div>
        </div>
      })}
    </div>
  )
}

export default MessageBody
