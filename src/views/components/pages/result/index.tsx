import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useRecoilValue } from 'recoil'
import CustomButton from '../../base/customButton'
import ErrorModal from '../../base/errorModal'
import ModalOverlay from '../../base/modalOverlay'
import LoadingAnimation from '../../domain/loadingAnimation'
import CommentBubble from '../../ui/commentBubble'
import CommentChatBubble from '../../ui/commentChatBubble'
import {
  ButtonContainer,
  ButtonWrapper,
  Container,
  ModalBox,
  ModalContentContainer,
  ModalHeaderWrapper,
  ModalTitle,
  ReadmeContainer,
  ReadmeWrapper,
  ResultListContainer,
  ResultListWrapper,
  TopLinkButtonWrapper,
} from './style'
import ReadmeRequestData from '~/interfaces/api/readme/POSTRequest'
import { ideaListState, skillSetState } from '~/stores/atoms'

const resultMessage = [
  '次のようなアイデアを提案します。',
  '気に入ったものをタップしてください。',
]

const ResultPage = () => {
  const [resultChatMessage, setResultChatMessage] = useState<string[]>([])

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [isOpenError, setIsOpenError] = useState<boolean>(false)
  const [isOpenReadme, setIsOpenReadme] = useState<boolean>(false)
  const [copiedButton, setCopiedButton] = useState<boolean>(false)
  const [resultReadme, setResultReadMe] = useState<string>('')

  const ideaList = useRecoilValue(ideaListState)
  const skillSet = useRecoilValue(skillSetState)

  useEffect(() => {
    // Recoil上からアイデア一覧データを取得
    if (ideaList.length === 0) {
      router.push('/')
    } else {
      setResultChatMessage(ideaList)
    }
  }, [])

  const router = useRouter()

  const ModalCloseButtonHandler = () => {
    setIsOpenModal(false)
    setIsOpenReadme(false)
    setCopiedButton(false)
    setResultReadMe('')
  }

  const CopyButtonHandler = async () => {
    // コピーするボタン
    await global.navigator.clipboard.writeText(resultReadme)
    setCopiedButton(true)
  }

  const TopLinkHandler = () => {
    // Topへ戻るボタン
    router.push('/')
  }

  const SelectIdeaButtonHandler = async (idea: string) => {
    setIsOpenModal(true)

    const postData: ReadmeRequestData = {
      skillSet,
      idea,
    }

    const param = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    }

    const res = await fetch('/api/readme', param)
    if (!res.ok) {
      console.error(res)
      setIsOpenError(true)
      return
    }
    const json = await res.json()
    setResultReadMe(json.text)
    setIsOpenReadme(true)
  }

  const closeErrorHandler = () => {
    setIsOpenModal(false)
    setIsOpenError(false)
  }

  return (
    <>
      {isOpenModal && (
        <ModalOverlay>
          {isOpenError ? (
            <ErrorModal
              errorMessage="生成に失敗しました。もう一度選択し直してください。"
              onClick={() => closeErrorHandler()}
            />
          ) : (
            <>
              {isOpenReadme ? (
                <>
                  <div css={ModalBox}>
                    <div css={ModalContentContainer}>
                      <div css={ModalHeaderWrapper}>
                        <h1 css={ModalTitle}>README</h1>
                      </div>
                      <div css={ReadmeContainer}>
                        <div css={ReadmeWrapper}>
                          <ReactMarkdown>{resultReadme}</ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div css={ButtonContainer}>
                    <div css={ButtonWrapper}>
                      <CustomButton onClick={() => CopyButtonHandler()}>
                        {copiedButton
                          ? 'コピーしました！'
                          : '生成したREADMEをコピーする'}
                      </CustomButton>
                    </div>
                    <div css={ButtonWrapper}>
                      <CustomButton onClick={() => ModalCloseButtonHandler()}>
                        モーダルを閉じる
                      </CustomButton>
                    </div>
                  </div>
                </>
              ) : (
                <LoadingAnimation text="README生成中" />
              )}
            </>
          )}
        </ModalOverlay>
      )}

      <div css={Container}>
        <CommentBubble text={resultMessage} />
        <div css={ResultListContainer}>
          <div css={ResultListWrapper}>
            {resultChatMessage.map((p) => (
              <CommentChatBubble
                key={p}
                text={p}
                onClick={() => SelectIdeaButtonHandler(p)}
              />
            ))}
          </div>
        </div>
        <div css={TopLinkButtonWrapper}>
          <CustomButton onClick={() => TopLinkHandler()}>
            TOPに戻る
          </CustomButton>
        </div>
      </div>
    </>
  )
}
export default ResultPage
