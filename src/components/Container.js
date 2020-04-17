import styled from 'styled-components'

import { below } from '../utilities/breakpoints'

export default styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 3rem;

  ${below.med`
    margin-left: 2rem;
    margin-right: 2rem; 
  `}

  ${below.small`
    margin-left: 1rem;
    margin-right: 1rem; 
  `}
`
