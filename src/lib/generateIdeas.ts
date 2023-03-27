import { Configuration, OpenAIApi } from 'openai'
import GenerateIdeas from '~/interfaces/ai/generateIdeas'

const generateIdeas: GenerateIdeas = async (skill) => {
  const l = skill.language.join(' ')
  const f = skill.framework.join(' ')
  const d = skill.database.join(' ')
  const s = skill.service.join(' ')

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  const content = `${l} ${f} ${d} ${s}の技術を使用。
      これらを用いてハッカソンで作成するアプリを3つ以下のjson形式で出力してください。文字列は全て日本語で、各アプリの概要は15文字以内の日本語で記述する。
      type string["アプリタイトル：アプリ概要",]`

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content,
      },
    ],
  })

  const message = completion.data.choices[0].message?.content
  if (message == undefined || message.charAt(0)!= '[' || message.charAt(message.length - 1)!= ']') {
    throw new Error('generateIdeas message is undefined or not array')
  }
  const array = message
    .replace('[', '')
    .replace(/\n/g, '')
    .replace(/ /g, '')
    .replace(/"/g, '')
    .replace(']', '')
    .split(',')

  return array
}

export default generateIdeas
