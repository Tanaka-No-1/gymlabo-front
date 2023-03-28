import { useRouter } from 'next/router'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import {
  languages,
  framework,
  database,
  service,
  Skill,
} from '../../../../testdata/skills'
import GenreList from '../../base/GenreList'
import CustomButton from '../../base/customButton'
import ErrorModal from '../../base/errorModal'
import ModalOverlay from '../../base/modalOverlay'
import CommentBubble from '../../ui/commentBubble'
import {
  LoadingText,
  SelectListContainer,
  SelectListWrapper,
  SendButtonContainer,
} from './style'
import SkillPostRequestData from '~/interfaces/api/skill/POSTRequest'
import { ideaListState, skillSetState } from '~/stores/atoms'

const questionText = '使いたい技術をチェックしてください(複数選択可)'
const sendButtonText = '送信'

const SelectPage = () => {
  const [languageSelected, setLanguageSelected] = useState<Skill[]>([])
  const [frameworkSelected, setFrameworkSelected] = useState<Skill[]>([])
  const [databaseSelected, setDatabaseSelected] = useState<Skill[]>([])
  const [serviceSelected, setServiceSelected] = useState<Skill[]>([])

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [isOpenError, setIsOpenError] = useState<boolean>(false)

  const [, setIdeaList] = useRecoilState(ideaListState)
  const [, setSkillSet] = useRecoilState(skillSetState)

  const router = useRouter()

  const sendButtonHandler = async () => {
    setIsOpenModal(true)

    const postData: SkillPostRequestData = {
      skillSet: {
        language: languageSelected.map((item) => item.name),
        framework: frameworkSelected.map((item) => item.name),
        database: databaseSelected.map((item) => item.name),
        service: serviceSelected.map((item) => item.name),
      },
    }

    const param = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    }

    const res = await fetch('/api/skill', param)
    if (!res.ok) {
      console.error(res)
      setIsOpenError(true)
      return
    }
    const json = await res.json()
    setIdeaList(json.ideas)
    setSkillSet(postData.skillSet)
    router.push('/result')
  }

  const closeModalHandler = () => {
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
              onClick={() => closeModalHandler()}
            />
          ) : (
            <p css={LoadingText}>生成中（アニメーションいれたい）</p>
          )}
        </ModalOverlay>
      )}

      <CommentBubble text={questionText}></CommentBubble>
      <div css={SelectListContainer}>
        <div css={SelectListWrapper}>
          <GenreList
            skills={languages}
            genreName={'言語'}
            selected={languageSelected}
            setSelected={setLanguageSelected}
          />
          <GenreList
            skills={framework}
            genreName={'フレームワーク'}
            selected={frameworkSelected}
            setSelected={setFrameworkSelected}
          />
          <GenreList
            skills={database}
            genreName={'データベース'}
            selected={databaseSelected}
            setSelected={setDatabaseSelected}
          />
          <GenreList
            skills={service}
            genreName={'サービス'}
            selected={serviceSelected}
            setSelected={setServiceSelected}
          />
        </div>
      </div>
      <div css={SendButtonContainer}>
        <CustomButton onClick={() => sendButtonHandler()}>
          {sendButtonText}
        </CustomButton>
      </div>
    </>
  )
}

export default SelectPage
