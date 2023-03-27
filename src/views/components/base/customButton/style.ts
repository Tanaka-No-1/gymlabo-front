import { css } from '@emotion/react'
import { Palette } from '~/styles/palette'

export const Container = css`
  padding: 10px 30px 10px 30px;
  width: fit-content;
  min-width: 300px;
  background-color: ${Palette.YELLOW.main};
  display: flex;
  justify-content: center;
  border-radius: 30px;
  border: 2px solid ${Palette.WHITE};
  color: ${Palette.BLACK};
  font-size: 24px;
  font-weight: bold;

  transition: 0.3s;
  &:hover {
    background-color: white;
    color: ${Palette.YELLOW.deep};
    border: 2px solid ${Palette.YELLOW.deep};
  }
`
