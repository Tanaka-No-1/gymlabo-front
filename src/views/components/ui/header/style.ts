import { css } from '@emotion/react'
import { Palette } from '~/styles/palette'
export const Container = css`
  height: 72px;
  background-color: ${Palette.GREEN.deep};
`

export const AppName = css`
  margin: 0;
  height: 100%;
  padding: 10px 0 10px 30px;
  color: ${Palette.WHITE};
  font-size: 40px;
  &:hover {
    color: ${Palette.GREEN.light};
  }
`
