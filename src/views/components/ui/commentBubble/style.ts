import { css } from '@emotion/react'
import { Palette } from '~/styles/palette'

export const Bubble = css`
  padding: 10px 40px 10px 60px;
  width: fit-content;
  background-color: ${Palette.GREEN.light};
  border: 1px solid ${Palette.GREEN.deep};
  border-radius: 0px 30px 30px 30px;
  margin-bottom: 20px;
`

export const CommentText = css`
  font-size: 24px;
  margin: 0;
`
