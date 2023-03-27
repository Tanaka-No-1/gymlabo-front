import { FC, ReactElement } from 'react'
import { ModalContainer, Overlay } from './style'

type Props = {
  children: ReactElement
}

const ModalOverlay: FC<Props> = ({ children }) => {
  return (
    <div css={Overlay}>
      <div css={ModalContainer}>{children}</div>
    </div>
  )
}

export default ModalOverlay
