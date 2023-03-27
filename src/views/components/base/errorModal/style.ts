import { css } from '@emotion/react'
import { Palette } from '~/styles/palette'

export const ModalBox = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${Palette.WHITE};
  min-height: 30%;
  width: 80%;
  border-radius: 30px;
  padding: 20px;
`

export const ErrorText = css`
  font-size: 30px;
  font-weight: bold;
`
