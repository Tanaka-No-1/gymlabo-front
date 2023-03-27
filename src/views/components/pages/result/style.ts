import { css } from '@emotion/react'
import { ZIndex } from '~/styles/constant'
import { Palette } from '~/styles/palette'

export const Container = css`
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
`

export const ResultListContainer = css`
  flex-flow: column nowrap;
  -webkit-box-pack: start;
  height: 70%;
  margin-bottom: 20px;
`
export const ResultListWrapper = css`
  height: 100%;
  overflow-y: scroll;
  padding: 10px 30px 10px 36px;
`

export const TopLinkButtonWrapper = css`
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
export const ModalBox = css`
  background-color: ${Palette.WHITE};
  height: 60%;
  width: 80%;
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 20px;
`

export const ModalContentContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const ModalTitle = css`
  margin: 0%;
  padding-left: 30px;
`

export const ModalHeaderWrapper = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const CloseButton = css`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: gray;
  border: none;
  &:hover {
    background-color: red;
  }
`

export const ReadmeContainer = css`
  width: 100%;
  height: 100%;
  flex-flow: column nowrap;
  -webkit-box-pack: start;
`

export const ReadmeWrapper = css`
  height: 90%;
  overflow-y: scroll;
  padding: 10px 30px 10px 36px;
  font-size: 20px;
`

export const ButtonContainer = css`
  display: flex;
  justify-content: space-around;
  width: 80%;
`

export const ButtonWrapper = css`
  width: 45%;
  display: flex;
  justify-content: center;
`
