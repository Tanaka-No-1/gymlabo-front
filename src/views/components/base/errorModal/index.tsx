import { FC } from 'react'
import CustomButton from '../customButton'
import { ErrorText, ModalBox } from './style'

type Props = {
  errorMessage: string
  onClick?: () => void
}

const ErrorModal: FC<Props> = ({ errorMessage, onClick }) => {
  return (
    <div css={ModalBox}>
      <div css={ErrorText}>
        <p>{errorMessage}</p>
      </div>
      <div>
        <CustomButton onClick={onClick ?? (() => {})}>再選択</CustomButton>
      </div>
    </div>
  )
}

export default ErrorModal
