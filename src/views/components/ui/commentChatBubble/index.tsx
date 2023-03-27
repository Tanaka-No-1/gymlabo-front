import { Bubble, CommentText } from './style'

type Props = {
  text: string | string[]
}

const CommentChatBubble = ({ text }: Props) => {
  return (
    <div css={Bubble}>
      {typeof text === 'string' ? (
        <p css={CommentText}>{text}</p>
      ) : (
        text.map((p) => {
          return (
            <p css={CommentText} key={p}>
              {p}
            </p>
          )
        })
      )}
    </div>
  )
}

export default CommentChatBubble
