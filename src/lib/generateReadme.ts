import { OpenAIStream } from './openaistream'
import GenerateReadme from '~/interfaces/ai/generateReadme'

/**
 * ChatGPTにリクエストを送信し、アプリのREADME,mdを生成する関数
 * @param skill
 * @param applicationContent
 * @returns
 */
const generateReadme: GenerateReadme = async (skill, applicationContent) => {
  // 配列を空白区切りで文字列に変換
  const l = skill.language.join(' ')
  const f = skill.framework.join(' ')
  const d = skill.database.join(' ')
  const s = skill.service.join(' ')

  // ChatGPTに送信するプロンプト
  const content = `私は以下のアプリ実装を考えています。
  ${applicationContent}。
  
  ${l} ${f} ${d} ${s}の技術を用いて開発が進められるように1000文字程度のREADMEを生成してください

アプリ名
アプリ概要(100文字以上)
使用技術(詳細に)
シーケンス図(mermaidを用いて)
使用技術のインストール方法(初心者にも分かりやすく段階を踏んで)
アプリの使い方`

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
    result += decoder.decode(chunk)
  }

  return result
}

export default generateReadme
