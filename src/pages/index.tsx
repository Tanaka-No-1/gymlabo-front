import { css } from '@emotion/react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const hoge = css`
  color: red;
`

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div css={hoge}>hoge</div>
    </div>
  )
}

export default Home
