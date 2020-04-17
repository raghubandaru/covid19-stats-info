import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { css } from 'styled-components'
import 'styled-components/macro'

import { Card, CountryList, GlobalChart, Layout } from './components'
import { above, below } from './utilities/breakpoints'

function App() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [globalData, setGlobalData] = useState(null)
  const [selected, setSelected] = useState({
    value: 'Global',
    label: 'Global'
  })

  useEffect(() => {
    let config1, config2, url1, url2, axiosArray

    if (selected.value === 'Global') {
      url1 = 'https://covid19.mathdro.id/api'
      url2 = 'https://covid19.mathdro.id/api/daily'

      config1 = { url: url1 }
      config2 = { url: url2 }

      axiosArray = [axios(config1), axios(config2)]
    } else {
      url1 = `https://covid19.mathdro.id/api/countries/${selected.value}`

      config1 = { url: url1 }

      axiosArray = [axios(config1)]
    }

    Promise.all(axiosArray)
      .then(response => {
        setData(response[0].data)

        if (response.length === 2) {
          setGlobalData(response[1].data)
        }
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        console.log(error.response.data.error)
      })
  }, [selected.value])

  if (isLoading) {
    return 'Loading...'
  }

  return (
    <Layout>
      <p
        css={css`
          text-align: center;
          font-style: italic;
        `}
      >
        Last updated {new Date(data.lastUpdate).toDateString()}
      </p>
      <div
        css={css`
          margin-top: 4.5rem;

          ${above.lg`
            margin-top: 8rem;
          `}
        `}
      >
        <CountryList selected={selected} setSelected={setSelected} />
      </div>
      <div
        css={css`
          margin-top: 3.5rem;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          ${above.lg`
            margin-top: 6rem;
          `}

          ${below.small`
            flex-direction: column;
          `}
        `}
      >
        <Card
          title="Confirmed"
          value={data.confirmed.value}
          lastUpdate={data.lastUpdate}
        />
        <Card
          title="Recovered"
          value={data.recovered.value}
          lastUpdate={data.lastUpdate}
        />
        <Card
          title="Deaths"
          value={data.deaths.value}
          lastUpdate={data.lastUpdate}
        />
      </div>
      {selected.value === 'Global' ? (
        <GlobalChart data={globalData} />
      ) : (
        <div
          css={css`
            background: #ffffff;
            box-shadow: 0 8px 6px -6px grey;
            margin-top: 3.5rem;
            min-height: 10rem;
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            ${above.lg`
              margin-top: 6rem;
            `}
          `}
        >
          <p>
            Currently, No timeline series data is available for individual
            countries.
          </p>
        </div>
      )}
    </Layout>
  )
}

export default App
