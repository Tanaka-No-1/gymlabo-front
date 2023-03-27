import CustomButton from '../../base/customButton'
import CommentBubble from '../../ui/commentBubble'

const questionText = '使いたい技術をチェックしてください(複数選択可)'
const sendButtonText = '送信'

const SelectPage = () => {
  return (
    <div>
      <CommentBubble text={questionText}></CommentBubble>
      <CustomButton onClick={() => console.log('送信')}>
        {sendButtonText}
      </CustomButton>
    </div>
  )
}

export default SelectPage
