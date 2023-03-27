import { FC, ReactNode } from 'react'
import { Container } from './style'

type Props = {
  onClick?: () => void
  children: ReactNode
}

const CustomButton: FC<Props> = (props) => {
  return (
    <button onClick={() => props.onClick && props.onClick?.()} css={Container}>
      {props.children}
    </button>
  )
}

export default CustomButton
