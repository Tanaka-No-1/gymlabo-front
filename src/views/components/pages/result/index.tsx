import CommentBubble from '../../ui/commentBubble'

const resultMessage = [
  '次のようなアイデアを提案します。',
  '気に入ったものをタップしてください。',
]

const ResultPage = () => {
  return (
    <div>
      <CommentBubble text={resultMessage} />
    </div>
  )
}
export default ResultPage
