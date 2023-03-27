import { useRouter } from 'next/router'
import CustomButton from '../../base/customButton'
import {
  ButtonText,
  ButtonTextWrapper,
  Container,
  SubTitleText,
  TitleContainer,
  TitleText,
} from './styles'

const appName = 'GAKU'
const appSubTitle = '〜Generate Aイデア is 苦〜'

const TopPage = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/select')
  }

  return (
    <>
      <div css={Container}>
        <div css={TitleContainer}>
          <h1 css={TitleText}>{appName}</h1>
          <h2 css={SubTitleText}>{appSubTitle}</h2>
        </div>
        <div css={ButtonTextWrapper}>
          <CustomButton onClick={handleClick}>
            <p css={ButtonText}>START</p>
          </CustomButton>
        </div>
      </div>
    </>
  )
}

export default TopPage
