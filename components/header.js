import React from 'react'
import Link from 'next/link'
{
  /*import Logo from './logo'*/
}
import HQALogo from './hqalogo'

class Header extends React.PureComponent {
  render() {
    const { clean } = this.props

    return (
      <div>
        <header className={clean ? 'clean' : null}>
          <Link prefetch href="/">
            <a className="logo">
              <HQALogo />
            </a>
          </Link>
        </header>
        <style jsx>
          {`
            header {
              max-width: 900px;
              margin: auto;
              padding: 30px 0;
              position: relative;
            }

            header.clean {
              max-width: 100%;
              margin: 0 30px;
            }

            a.logo {
              display: block;
              width: 12em;
              height: 6em;
              position: relative;
            }

            @media screen and (max-width: 950px) {
              header {
                text-align: center;
              }

              header.clean {
                margin: 0;
              }

              .logo {
                margin-left: 20px;
              }
            }
            `}
        </style>
      </div>
    )
  }
}

export default Header
