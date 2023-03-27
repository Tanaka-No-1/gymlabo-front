import { css } from '@emotion/react'
import { Palette } from '~/styles/palette'

export const Container = css`
  display: flex;
  width: 80%;
  margin: 0 auto;
  height: 100%;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
`

export const TitleContainer = css`
  padding: 10px 40px 10px 60px;
  width: fit-content;
  background-color: ${Palette.GREEN.light};
  border: 1px solid ${Palette.GREEN.deep};
  border-radius: 0px 30px 30px 30px;
`

export const TitleText = css`
  font-size: 100px;
  margin: 10px;
`

export const SubTitleText = css`
  font-size: 70px;
`

export const ButtonTextWrapper = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const ButtonText = css`
  min-width: 40vw;
  margin: 0;
  font-size: 50px;
`
