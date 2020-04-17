import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'

function CountryList({ selected, setSelected }) {
  const [isLoading, setLoading] = useState(true)
  const [countryList, setCountryList] = useState([])

  useEffect(() => {
    const url = 'https://covid19.mathdro.id/api/countries'
    const config = {
      url
    }

    axios(config).then(({ data }) => {
      const countryList = data.countries.map(country => ({
        value: country.name,
        label: country.name
      }))

      setCountryList(countryList)
      setLoading(false)
    })
  }, [])

  let options = [{ value: 'Global', label: 'Global' }]

  if (countryList.length) {
    options = options.concat(countryList)
  }

  const handleChange = selected => {
    setSelected(selected)
  }

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={selected}
      isLoading={isLoading}
    />
  )
}

export default CountryList
