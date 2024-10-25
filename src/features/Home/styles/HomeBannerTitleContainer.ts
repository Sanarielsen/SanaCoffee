import { device } from '@globalStyles/Devices';
import styled from 'styled-components';

export const DescriptionSection = styled.p`
  font-size: 20px;
  color: #403937;

  text-align: center;

  @media ${device.laptopL} {
    text-align: left;
  }
`;

export const PanelAreaSubtitles = styled.div`
  display: flex;
  justify-content: space-around;

  margin: 24px 0;
  fontsize: 16px;
`;

export const PanelContainer = styled.div`
  margin: 40px 0;
`;

export const SubtitlesSection = styled.div`
  width: 50%;
`;

export const TitleSection = styled.h1`
  text-align: center;

  @media ${device.laptopL} {
    text-align: left;
  }
`;
