import { Palette } from './palette'

//BreakPoint
/**
 * @desc 基本 max-width ではなく min-width を使用する
 */
export const BreakPoint = {
  XSMALL: '535px',
  SMALL: '641px',
  MEDIUM: '1025px',
  LARGE: '1281px',
} as const

//角丸
export const Radius = {
  SMALL: '2px',
  MEDIUM: '4px',
  LARGE: '8px',
  ROUNDED: '50%',
} as const

//サイズ
export enum Size {
  SIZE0 = '0px',
  SIZE1 = '1px',
  SIZE2 = '2px',
  SIZE3 = '3px',
  SIZE4 = '4px',
  SIZE5 = '5px',
  SIZE6 = '6px',
  SIZE7 = '7px',
  SIZE8 = '8px',
  SIZE9 = '9px',
  SIZE10 = '10px',
  SIZE11 = '11px',
  SIZE12 = '12px',
  SIZE14 = '14px',
  SIZE15 = '15px',
  SIZE16 = '16px',
  SIZE17 = '17px',
  SIZE18 = '18px',
  SIZE20 = '20px',
  SIZE22 = '22px',
  SIZE24 = '24px',
  SIZE27 = '27px',
  SIZE28 = '28px',
  SIZE30 = '30px',
  SIZE32 = '32px',
  SIZE34 = '34px',
  SIZE35 = '35px',
  SIZE36 = '36px',
  SIZE40 = '40px',
  SIZE42 = '42px',
  SIZE44 = '44px',
  SIZE45 = '45px',
  SIZE48 = '48px',
  SIZE50 = '50px',
  SIZE56 = '56px',
  SIZE64 = '64px',
  SIZE67 = '67px',
  SIZE68 = '68px',
  SIZE72 = '72px',
  SIZE75 = '75px',
  SIZE80 = '80px',
  SIZE84 = '84px',
  SIZE86 = '86px',
  SIZE93 = '93px',
  SIZE94 = '94px',
  SIZE96 = '96px',
  SIZE100 = '100px',
  SIZE104 = '104px',
  SIZE112 = '112px',
  SIZE116 = '116px',
  SIZE128 = '128px',
  SIZE155 = '155px',
  SIZE200 = '200px',
  SIZE240 = '240px',
  SIZE272 = '272px',
  SIZE304 = '304px',
}

//z-index
export enum Z_INDEX {}

//color
/**
 * @desc ./palette からコンポーネントで直接importしない
 * @desc ここで用途ごとにカラーパレットを再定義する
 */
export const FontColors = {
  PRIMARY: {
    DEFAULT: Palette.BLACK_800,
    HOVER: Palette.BLACK_500,
  },
}
