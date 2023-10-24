import React, { useEffect, useState } from 'react'
import { sM } from '../services/openai/openai'
import { Button } from '../features'
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const Message = () => {
  openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello ChatGPT" }],
  }).then(res => {
    console.log(res)
  });



  const [input, setInput] = useState("")
  

  // const handleSend = async () => {
  //   const resFromOpenAi = await sendMsgToOpenAi(input)
  //   console.log(resFromOpenAi)
  // }

  return (
    <section>
      Message

      <input
        type="text"
        placeholder="Enter message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <Button 
        text={"Send"}
        // handleEvent={handleSend}
      />
    </section>
  )
}

export default Message
