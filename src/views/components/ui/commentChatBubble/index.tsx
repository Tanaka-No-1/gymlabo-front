import { Bubble, CommentText } from './style'

type Props = {
  text: string
  onClick?: () => void
}

const CommentChatBubble = ({ text, onClick }: Props) => {
  return (
    <button css={Bubble} onClick={onClick ?? (() => {})}>
      <p css={CommentText}>{text}</p>
    </button>
  )
}

export default CommentChatBubble
