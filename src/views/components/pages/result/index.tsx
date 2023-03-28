import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import CustomButton from '../../base/customButton'
import ErrorModal from '../../base/errorModal'
import ModalOverlay from '../../base/modalOverlay'
import CommentBubble from '../../ui/commentBubble'
import CommentChatBubble from '../../ui/commentChatBubble'
import {
  ButtonContainer,
  ButtonWrapper,
  Container,
  LoadingText,
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
import { ideaListState } from '~/stores/atoms'

const resultMessage = [
  '次のようなアイデアを提案します。',
  '気に入ったものをタップしてください。',
]

const dummyReadme = `アプリ名

ポストイットボード

アプリ概要

チームメンバーとアイデアを共有するためのプラットフォーム。ユーザーは自分のアイデアをポストイットに書き込み、他の人と共有することができます。

使用技術

Next.js：Reactベースのサーバーサイドレンダリングフレームワーク
React：ユーザーインターフェイスの構築のためのJavaScriptライブラリ
Firebase：データベースおよび認証のためのクラウドプラットフォーム

シーケンス図

mermaid
Copy code
sequenceDiagram
  participant User
  participant Board
  participant Firebase

  User->>Board: アイデアをポストイットに書き込む
  Board->>Firebase: ポストイットをデータベースに保存
  Firebase->>Board: ポストイットの保存状況を返す
  Board->>User: ポストイットの保存状況を表示

使用技術のインストール方法

Node.jsをインストールします。
Firebaseを利用するため、Googleアカウントが必要です。Googleアカウントを持っていない場合は、先にGoogleアカウントを作成してください。
Firebaseコンソールからプロジェクトを作成し、プロジェクトの設定でWebアプリを追加してFirebaseの設定情報を取得します。
コマンドラインからプロジェクトをクローンします。
bash
Copy code
git clone https://github.com/<user>/<repo>.git
プロジェクトのルートディレクトリに移動し、npmパッケージをインストールします。
bash
Copy code
cd <repo>
npm install
Firebaseの設定情報を.env.localファイルに追加します。
makefile
Copy code
NEXT_PUBLIC_API_KEY=<API_KEY>
NEXT_PUBLIC_AUTH_DOMAIN=<AUTH_DOMAIN>
NEXT_PUBLIC_PROJECT_ID=<PROJECT_ID>
NEXT_PUBLIC_STORAGE_BUCKET=<STORAGE_BUCKET>
NEXT_PUBLIC_MESSAGING_SENDER_ID=<MESSAGING_SENDER_ID>
NEXT_PUBLIC_APP_ID=<APP_ID>
開発用サーバーを起動します。
arduino
Copy code
npm run dev

アプリの使い方

ポストイットボードのページにアクセスします。
ユーザー名を入力してログインします。
ポストイットにアイデアを書き込んで投稿します。
投稿されたポストイットは、他のユーザーにも表示されます。他のユーザーの投稿も閲覧できます。
ログアウトする場合は、ページ右上のログアウトボタンをクリックします。`

const ResultPage = () => {
  const [resultChatMessage, setResultChatMessage] = useState<string[]>([])

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [isOpenError, setIsOpenError] = useState<boolean>(false)
  const [isOpenReadme, setIsOpenReadme] = useState<boolean>(false)
  const [copiedButton, setCopiedButton] = useState<boolean>(false)
  const [selectedIdea, setSelectedIdea] = useState<string>('')
  const [resultReadme, setResultReadMe] = useState<string>('')

  const ideaList = useRecoilValue(ideaListState)

  useEffect(() => {
    // Recoil上からアイデア一覧データを取得
    if (ideaList.length === 0) {
      router.push('/')
    } else {
      setResultChatMessage(ideaList)
    }
  }, [ideaList])

  const router = useRouter()

  const ModalCloseButtonHandler = () => {
    setIsOpenModal(false)
    setIsOpenReadme(false)
    setCopiedButton(false)
    setSelectedIdea('')
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

  // 待機検証用
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  const SelectIdeaButtonHandler = async (idea: string) => {
    setSelectedIdea(idea)
    // モーダルを表示(ローディング中)
    setIsOpenModal(true)

    // リクエストを投げる
    console.log(selectedIdea)
    await sleep(5000)

    // リクエスト成功：モーダルを取得データに変更
    // setResultReadMe(dummyReadme)
    // setIsOpenReadme(true)

    // リクエスト失敗：モーダル上でエラー表示・ボタンを押して再度選択
    setIsOpenError(true)
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
                        <div css={ReadmeWrapper}>{dummyReadme}</div>
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
                <p css={LoadingText}>生成中（アニメーションいれたい）</p>
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
