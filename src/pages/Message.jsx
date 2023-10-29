import React, { useEffect, useState } from 'react'
import { OpenAIApi, Configuration } from "openai";
import MessageBody from '../features/message/componets/messageBody/MessageBody'
import MessageInput from '../features/message/componets/messageInput/MessageInput'
import { nanoid } from '@reduxjs/toolkit';


const Message = () => {
  const [input, setInput] = useState("")
  const [messageBody, setMessageBody] = useState([{
    id: nanoid(),
    bot: "Hi, I'm your personal assitant here to keep you occupy.",
    user: "",
  }])

  return (
    <section className="msg-section">
      <MessageBody 
        input={input} 
        setInput={setInput}
        messageBody={messageBody}
        setMessageBody={setMessageBody}
      />

      <MessageInput 
        input={input} 
        setInput={setInput}  
        messageBody={messageBody}
        setMessageBody={setMessageBody}
      />
    </section>
  )
}

export default Message
