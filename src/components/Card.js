import React from 'react'
import Countup from 'react-countup'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import 'styled-components/macro'

import { below } from '../utilities/breakpoints'

function Card({ title, value }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #ffffff;
        padding: 3rem 5rem;
        box-shadow: 0 8px 6px -6px grey;

        ${
          title === 'Confirmed' &&
          css`
            border-top: 5px solid #5d55fa;
          `
        }

        ${
          title === 'Recovered' &&
          css`
            border-top: 5px solid #27ab83;
          `
        }

        ${
          title === 'Deaths' &&
          css`
            border-top: 5px solid #e12d39;
          `
        }

        ${below.small`
          margin-bottom: 2rem;
        `}

        ${below.xs`
          padding: 2rem;
        `}

      `}
    >
      <p>{title}</p>
      <h2>
        <Countup end={value} />
      </h2>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.oneOf(['Confirmed', 'Deaths', 'Recovered']).isRequired,
  value: PropTypes.number.isRequired
}

export default Card
