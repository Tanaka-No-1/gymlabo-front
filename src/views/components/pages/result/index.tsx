import { useEffect, useState } from 'react'
import CommentBubble from '../../ui/commentBubble'
import CommentChatBubble from '../../ui/commentChatBubble'
import { Container, ResultListContainer, ResultListWrapper } from './style'

const resultMessage = [
  '次のようなアイデアを提案します。',
  '気に入ったものをタップしてください。',
]

const ResultPage = () => {
  const [resultChatMessage, setResultChatMessage] = useState<string[]>([])
  useEffect(() => {
    setResultChatMessage([
      'Buddy Finder：同じ趣味を持つ人たちを見つけられるアプリです。ReactとKotlinを使用して開発。PostgreSQLを使用してユーザー情報を管理。AWSを利用して デプロイ。',
      'Eco-Friendly Travel：地球に優しい旅を提供するアプリです。GCPを使用して検索エンジンを作成。Reactを使用してユーザーインターフェースを開発。PostgreSQLを使用してユーザー情報を管理。Azureを利用してデプロイ。',
      'Foodie Friend：ご当地グルメを共有するアプリです。Kotlinを使用して開発 。AWSを利用してデプロイ。PostgreSQLを使用してユーザー情報を管理。',
      'PetPal：ペットを飼っている人たちのためのソーシャルネットワークアプリです。Reactを使用してユーザーインターフェースを開発。GCPを使用して検索エン ジンを作成。PostgreSQLを使用してユーザー情報を管理。Azureを利用してデプロイ。',
      'Green Wallet：環境保護に貢献するためのアプリです。Kotlinを使用して開発。AWSを利用してデプロイ。PostgreSQLを使用してユーザー情報を管理。',
    ])
  }, [])

  return (
    <div css={Container}>
      <CommentBubble text={resultMessage} />
      <div css={ResultListContainer}>
        <div css={ResultListWrapper}>
          {resultChatMessage.map((p) => (
            <CommentChatBubble
              key={p}
              text={p}
              onClick={() => console.log(p)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default ResultPage
