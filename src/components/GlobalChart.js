import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import 'styled-components/macro'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { above, below } from '../utilities/breakpoints'

function GlobalChart({ data }) {
  return (
    <div
      css={css`
        background: #ffffff;
        box-shadow: 0 8px 6px -6px grey;
        margin-top: 3.5rem;
        padding: 2rem 1rem;

        ${above.lg`
          margin-top: 6rem;
        `}

        ${below.xs`
          padding: 2rem 0;
        `}
      `}
    >
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data.map(singleData => ({
            name: singleData.reportDate,
            confirmed: singleData.confirmed.total,
            deaths: singleData.deaths.total
          }))}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="confirmed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5d55fa" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#5d55fa" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="deaths" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e12d39" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#e12d39" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Area
            type="monotone"
            dataKey="confirmed"
            stroke="#5d55fa"
            fillOpacity={1}
            fill="url(#confirmed)"
          />
          <Area
            type="monotone"
            dataKey="deaths"
            stroke="#e12d39"
            fillOpacity={1}
            fill="url(#deaths)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

GlobalChart.propTypes = {
  data: PropTypes.array.isRequired
}

export default GlobalChart
