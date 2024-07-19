import styled from 'styled-components'
import { device } from '../../../styles/Devices'

export const HomeContextFirst = styled.div`

  @media ${device.laptop} { 
    width: 100%;
    height: 100%;
  }

  @media ${device.laptopL} {
    width: 50%;
    height: 100%;
  }
`
