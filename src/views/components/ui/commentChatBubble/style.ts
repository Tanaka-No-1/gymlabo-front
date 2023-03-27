import { css } from '@emotion/react'
import { Palette } from '~/styles/palette'

export const Bubble = css`
  padding: 10px 40px 10px 60px;
  width: fit-content;
  background-color: ${Palette.WHITE};
  border: 1px solid ${Palette.BLACK};
  border-radius: 30px;
  margin-bottom: 20px;
  &:hover {
    transform: translateY(-5px);
    border: 1px solid ${Palette.YELLOW.deep};
    background-color: ${Palette.YELLOW.light};
  }
`

export const CommentText = css`
  font-size: 24px;
  margin: 0;
`
