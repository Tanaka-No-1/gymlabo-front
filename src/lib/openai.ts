import { Configuration, OpenAIApi } from 'openai'

// OpenAIにリクエストを送信するクライアント
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
export const openai = new OpenAIApi(configuration)
