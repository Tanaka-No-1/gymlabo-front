import { useEffect, useState } from 'react'
import CommentBubble from '../../ui/commentBubble'
import CommentChatBubble from '../../ui/commentChatBubble'
import { Container, ResultListContainer, ResultListWrapper } from './style'

const resultMessage = [
  '次のようなアイデアを提案します。',
  '気に入ったものをタップしてください。',
]

type Props = {
  idea: string[]
  resultChatMessage: string[]
}

const ResultPage = () => {
  const [resultChatMessage, setResultChatMessage] = useState<string[]>([])
  useEffect(() => {
    setResultChatMessage([
      'ポストイットボード：ポストイットボードは、チームメンバーとアイデアを共有するためのプラットフォームです。ユーザーは自分のアイデアをポストイットに書き込み、他の人と共有することができます。',
      '日記アプリ：日記アプリは、ユーザーが毎日の出来事を記録するためのツールです。ユーザーはテキスト、写真、音声などを含めて日記を書くことができます。',
      '学習記録アプリ：学習時間や理解度を記録し、可視化することで、学習の進捗を管理できます。',
    ])
  }, [])

  return (
    <div css={Container}>
      <CommentBubble text={resultMessage} />
      <div css={ResultListContainer}>
        <div css={ResultListWrapper}>
          {resultChatMessage.map((p, index) => (
            <CommentChatBubble key={index} text={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default ResultPage
