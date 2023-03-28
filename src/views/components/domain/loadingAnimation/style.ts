import { css } from '@emotion/react'

export const ScreenWrapper = css`
  width: 500px;
  height: 500px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 30px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

export const Screen = css`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: #fff;
  border: 1px solid #000;
`
export const PencilCover = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  border-radius: 50%;
  background-color: #fff;
`

export const Txt = css`
  font-size: large;
`

export const Pencil = css`
  animation: shake 0.5s infinite;

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    10% {
      transform: translateX(-10px) rotate(-5deg);
    }
    20% {
      transform: translateX(10px) rotate(5deg);
    }
    30% {
      transform: translateX(-10px) rotate(-5deg);
    }
    40% {
      transform: translateX(10px) rotate(5deg);
    }
    50% {
      transform: translateX(-10px) rotate(-5deg);
    }
    60% {
      transform: translateX(10px) rotate(5deg);
    }
    70% {
      transform: translateX(-10px) rotate(-5deg);
    }
    80% {
      transform: translateX(10px) rotate(5deg);
    }
    90% {
      transform: translateX(-10px) rotate(-5deg);
    }
    100% {
      transform: translateX(0);
    }
  }
`
