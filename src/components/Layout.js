import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import 'styled-components/macro'

import Container from './Container'
import { above } from '../utilities/breakpoints'

function Layout({ children }) {
  return (
    <div
      css={css`
        ${above.lg`
        margin-top: 5rem;
      `}
      `}
    >
      <Container>
        <header
          css={css`
            text-align: center;
          `}
        >
          <h1>COVID-19</h1>
        </header>
        <main>{children}</main>
      </Container>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
