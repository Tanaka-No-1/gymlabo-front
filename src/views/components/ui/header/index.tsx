import Link from 'next/link'
import { AppName, Container } from './style'

const Header = () => {
  return (
    <div css={Container}>
      <Link href="/">
        <h1 css={AppName}>GAKU</h1>
      </Link>
    </div>
  )
}

export default Header
