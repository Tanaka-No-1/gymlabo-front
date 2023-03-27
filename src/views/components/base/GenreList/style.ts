import { css } from '@emotion/react'
import { Palette } from '~/styles/palette'

export const GenreContainer = css`
  display: flex;
  padding: 20px 0;
  border-bottom: 4px solid ${Palette.YELLOW.deep};
  &:last-child {
    border-bottom: none;
  }
`

export const GenreNameTextWrapper = css`
  min-width: 20%;
  padding-left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: ${Palette.YELLOW.deep};
`

export const SkillsContainer = css`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`

export const SkillContainer = css`
  display: flex;
  gap: 5px;
  min-width: 150px;
  padding: 5px;
  margin-right: 20px;
`
