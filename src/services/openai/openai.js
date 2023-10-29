import { OpenAIApi, Configuration } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  })
);
// const sendMsgToOpenAI = async () => {
//     const res =  openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: "hello",
//         temperature: 0.7,
//         max_tokens: 100
//     })

//     console.log(res.data.choices[0].text)
// }
// text-davinci-003
// gpt-3.5-turbo

// messages: [{ role: "user", content: "how are you?" }],

const url = "https://api.openai.com/v1/completions";

export const sendMsgToOpenAI = async (msg) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer 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`,
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
    console.log(data.choices[0].text);
  } catch (error) {
    console.log(error);
  }
};
