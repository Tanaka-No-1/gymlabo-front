import { css } from '@emotion/react'
import { Palette } from '~/styles/palette'

export const Bubble = css`
  display: flex;
  padding: 10px 60px 10px 60px;
  width: 100%;
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
  font-size: 30px;
  color: ${Palette.BLACK};
  margin: 0;
`
