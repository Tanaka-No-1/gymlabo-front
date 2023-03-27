import { css } from '@emotion/react'
import { Palette } from '~/styles/palette'

export const Container = css`
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
`

export const ResultListContainer = css`
  flex-flow: column nowrap;
  -webkit-box-pack: start;
  height: 70%;
`
export const ResultListWrapper = css`
  height: 100%;
  overflow-y: scroll;
  padding: 0 30px 0 36px;
`
