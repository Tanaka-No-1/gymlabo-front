import { OpenAIStream } from './openaistream'
import GenerateReadme from '~/interfaces/ai/generateReadme'

const generateReadme: GenerateReadme = async (skill, applicationContent) => {
  // 配列を空白区切りで文字列に変換
  const l = skill.language.join(' ')
  const f = skill.framework.join(' ')
  const d = skill.database.join(' ')
  const s = skill.service.join(' ')

  // ChatGPTに送信するプロンプト
  const content = `私は以下のアプリ実装を考えています。${applicationContent}。${l} ${f} ${d} ${s}の技術で開発する時、アプリ名、アプリ概要(300文字以上)、使用技術(詳細に)を出力してください。`

  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'assistant',
        content:
          'あなたはハックツハッカソン経験者です。初心者に指導するように答えてください。',
      },
      { role: 'user', content },
    ],
    temperature: 0.9,
    max_tokens: 1000,
    stream: true,
  }
  const stream = await OpenAIStream(payload)
  const decoder = new TextDecoder()
  let result = ''
  for await (const chunk of stream as any) {
    const text = decoder.decode(chunk)
    result += text
    console.log(text)
  }

  console.log(result)
  return result
}

export default generateReadme
