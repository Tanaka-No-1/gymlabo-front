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
import ModalOverlay from '../../base/modalOverlay'
import CommentBubble from '../../ui/commentBubble'
import {
  ErrorText,
  LoadingText,
  ModalBox,
  SelectListContainer,
  SelectListWrapper,
  SendButtonContainer,
} from './style'
import { ideaListState } from '~/stores/atoms'

const questionText = '使いたい技術をチェックしてください(複数選択可)'
const sendButtonText = '送信'

const SelectPage = () => {
  const [langSelected, setLangSelected] = useState<Skill[]>([])
  const [frameworkSelected, setFrameworkSelected] = useState<Skill[]>([])
  const [databaseSelected, setDatabaseSelected] = useState<Skill[]>([])
  const [serviceSelected, setServiceSelected] = useState<Skill[]>([])

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [isOpenError, setIsOpenError] = useState<boolean>(false)

  const [, setIdeaList] = useRecoilState(ideaListState)

  const router = useRouter()

  // 待機検証用
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  const sendButtonHandler = async () => {
    // ローディング中モーダルを表示
    setIsOpenModal(true)

    // リクエストを投げる
    console.log({
      languages: langSelected.map((item) => item.name),
      framework: frameworkSelected.map((item) => item.name),
      database: databaseSelected.map((item) => item.name),
      service: serviceSelected.map((item) => item.name),
    })
    await sleep(5000)

    // 成功
    // リクエスト成功：Recoilにデータを保存後/resultに遷移

    const dummyFetchedData = [
      'Buddy Finder：同じ趣味を持つ人たちを見つけられるアプリです。ReactとKotlinを使用して開発。PostgreSQLを使用してユーザー情報を管理。AWSを利用して デプロイ。',
      'Eco-Friendly Travel：地球に優しい旅を提供するアプリです。GCPを使用して検索エンジンを作成。Reactを使用してユーザーインターフェースを開発。PostgreSQLを使用してユーザー情報を管理。Azureを利用してデプロイ。',
      'Foodie Friend：ご当地グルメを共有するアプリです。Kotlinを使用して開発 。AWSを利用してデプロイ。PostgreSQLを使用してユーザー情報を管理。',
      'PetPal：ペットを飼っている人たちのためのソーシャルネットワークアプリです。Reactを使用してユーザーインターフェースを開発。GCPを使用して検索エン ジンを作成。PostgreSQLを使用してユーザー情報を管理。Azureを利用してデプロイ。',
      'Green Wallet：環境保護に貢献するためのアプリです。Kotlinを使用して開発。AWSを利用してデプロイ。PostgreSQLを使用してユーザー情報を管理。',
    ]
    setIdeaList(dummyFetchedData)
    router.push('/result')

    //失敗
    setIsOpenError(true)

    // リクエスト成功：Recoilにデータを保存後/resultに遷移
    // リクエスト失敗：モーダルにエラーと表示、ボタンを押してモーダルを閉じて再選択
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
            <div css={ModalBox}>
              <div css={ErrorText}>
                <p>生成に失敗しました。もう一度選択し直してください。</p>
              </div>
              <div>
                <CustomButton onClick={() => closeModalHandler()}>
                  再選択
                </CustomButton>
              </div>
            </div>
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
