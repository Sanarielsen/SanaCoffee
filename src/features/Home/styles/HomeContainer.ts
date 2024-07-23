import styled from 'styled-components'
import { device } from '../../../styles/Devices'

export const HomeContainer = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  

  @media ${device.laptopL} {
    flex-direction: row;
  }

  width: 100%;
  height: 380px;
`