import React, { useRef } from 'react'
import "./message-input.css"
import Button from '../../../../componets/Button'
import { FaTelegramPlane } from 'react-icons/fa'
import { nanoid } from '@reduxjs/toolkit'

const MessageInput = ({input, setInput, setMessageBody}) => {

    const url = "https://api.openai.com/v1/completions";
    const scroll = useRef()

    const sendMsgToOpenAI = async (e, msg) => {
        e.preventDefault()
        const options = {
            method: "POST",
            headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            model: "text-davinci-003",
            prompt: msg,
            max_tokens: 100,
            temperature: 0.7,
            }),
        };

        try {
            const res = await fetch(url, options);
            const data = await res.json();
            setMessageBody(oldValue => {
                return [
                    ...oldValue,
                    {
                        id: nanoid(),
                        bot: data.choices[0].text,
                    user: input
                    }
                ]
            })
            setInput("")
            scroll.current.scrollIntoView({behaviour: "smooth"})
        } catch (error) {
            console.log(error);
        }
    };
    
  return (
    <form className="msg-container">
        <textarea
            placeholder="Enter your message"
            className="msg-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />

        <Button text={<FaTelegramPlane />} handleEvent={(e) => sendMsgToOpenAI(e, input)} />
        <span ref={scroll}></span>
    </form>
  )
}

export default MessageInput
