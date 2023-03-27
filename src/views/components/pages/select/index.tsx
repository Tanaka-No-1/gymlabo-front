import CommentBubble from '../../ui/commentBubble'

const questionText = '使いたい技術をチェックしてください(複数選択可)'
const SelectPage = () => {
  return (
    <div>
      <CommentBubble text={questionText}></CommentBubble>
    </div>
  )
}

export default SelectPage
