import { css } from '@emotion/react'
import { ZIndex } from '~/styles/constant'
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
  margin: 0 auto 30px auto;
  max-width: 1100px;
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

// modal
export const ModalOverlay = css`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: ${ZIndex.OVERLAY};
  background: rgba(0, 0, 0, 0.54);
`

export const ModalContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: ${ZIndex.MODAL};
`

export const LoadingText = css`
  font-size: 50px;
  font-weight: bold;
  color: ${Palette.WHITE};
  margin: 0;
`

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
