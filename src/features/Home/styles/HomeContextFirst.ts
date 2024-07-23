import styled from 'styled-components'
import { device } from '../../../styles/Devices'

export const HomeContextFirst = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media ${device.laptop} { 
    width: 100%;
    height: 100%;
  }

  @media ${device.laptopL} {
    width: 55%;
    height: 100%;
  }
`
