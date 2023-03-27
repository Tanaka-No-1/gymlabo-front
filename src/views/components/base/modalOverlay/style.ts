import { css } from '@emotion/react'
import { ZIndex } from '~/styles/constant'

export const Overlay = css`
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
