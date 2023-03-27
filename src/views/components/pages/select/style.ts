import { css } from '@emotion/react'
import { Palette } from '~/styles/palette'

export const SelectListContainer = css`
  background-color: ${Palette.YELLOW.light};
  flex-flow: column nowrap;
  -webkit-box-pack: start;
  justify-content: start;
  align-items: center;
  justify-content: center;
  height: 75%;
  padding: 30px 40px 30px 46px;
  border-radius: 30px 30px 0 30px;
  border: 2px solid ${Palette.YELLOW.deep};
  margin-bottom: 30px;
`

export const SelectListWrapper = css`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`

export const GenreContainer = css`
  display: flex;
  justify-content: space-between;
`

export const SendButtonContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
`
