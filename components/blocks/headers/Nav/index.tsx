import * as React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

interface NavProps {
  loadHash?: any
  onClick?: any
  router?: any
}

class Nav extends React.Component<NavProps> {
  render() {
    return (
      <nav className='header-menu open'>
        <Link href={'/about'}>
          <a className='header-menu-link'>О компании</a>
        </Link>
        <Link href={'/property'}>
          <a className='header-menu-link'>Недвижимость</a>
        </Link>
        <Link href={'/about'}>
          <a className='header-menu-link'>Юр услуги</a>
        </Link>
        <Link href={'/contacts'}>
          <a className='header-menu-link'>Контакты</a>
        </Link>
      </nav>
    )
  }
}

export default withRouter(Nav)
