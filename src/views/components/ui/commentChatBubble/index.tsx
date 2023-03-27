import { Bubble, CommentText } from './style'

type Props = {
  text: string
}

const CommentChatBubble = ({ text }: Props) => {
  return (
    <div css={Bubble}>
      <p css={CommentText}>{text}</p>
    </div>
  )
}

export default CommentChatBubble
