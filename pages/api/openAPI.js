import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
console.log(
  "🚀 ~ file: openAPI.js:6 ~ process.env.OPENAI_API_KEY",
  process.env.OPENAI_API_KEY
);

const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.tags),
    temperature: 0.6,
    max_tokens: 2048,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(pictureTags) {
  return `Suggest description for a picture with following caracteristics. ${pictureTags.map(
    (tag) => tag + ", "
  )}`;
}
