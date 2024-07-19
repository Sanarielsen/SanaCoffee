import styled from 'styled-components'
import { device } from '../../../styles/Devices'

export const HomeContextSecond = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media ${device.laptop} { 
    width: 100%;
    height: 100%;
  }

  @media ${device.laptopL} {
    width: 50%;
    height: 100%;
  }
`