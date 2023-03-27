import { ReactElement } from 'react'
import { container } from './style'
import Header from '~/views/components/ui/header'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <div css={container}> {children}</div>
  </>
)
