import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  languages,
  framework,
  database,
  service,
  Skill,
} from '../../../../testdata/skills'
import GenreList from '../../base/GenreList'
import CustomButton from '../../base/customButton'
import CommentBubble from '../../ui/commentBubble'
import {
  SelectListContainer,
  SelectListWrapper,
  SendButtonContainer,
} from './style'

const questionText = '使いたい技術をチェックしてください(複数選択可)'
const sendButtonText = '送信'

const SelectPage = () => {
  const [langSelected, setLangSelected] = useState<Skill[]>([])
  const [frameworkSelected, setFrameworkSelected] = useState<Skill[]>([])
  const [databaseSelected, setDatabaseSelected] = useState<Skill[]>([])
  const [serviceSelected, setServiceSelected] = useState<Skill[]>([])

  const router = useRouter()

  const sendButtonHandler = async () => {
    // リクエストを投げる
    // ローディング中モーダルを表示
    // リクエスト成功：Recoilにデータを保存後/resultに遷移
    // リクエスト失敗：モーダルにエラーと表示、ボタンを押してモーダルを閉じて再選択

    console.log({
      languages: langSelected.map((item) => item.name),
      framework: frameworkSelected.map((item) => item.name),
      database: databaseSelected.map((item) => item.name),
      service: serviceSelected.map((item) => item.name),
    })
    router.push('/result')
  }

  return (
    <>
      <CommentBubble text={questionText}></CommentBubble>
      <div css={SelectListContainer}>
        <div css={SelectListWrapper}>
          <GenreList
            skills={languages}
            genreName={'言語'}
            selected={langSelected}
            setSelected={setLangSelected}
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
