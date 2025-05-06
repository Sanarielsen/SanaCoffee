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
  display: grid;
  align-items: center;
  justify-content: center;

  grid-template-columns: 1fr;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;

    padding-top: 0;
    padding-bottom: 0;

    height: 64px;
  }
`;

export const PanelContainer = styled.div`
  margin: 16px 0;

  @media ${device.tablet} {
    margin: 32px 0;
  }
`;

export const SubtitlesSection = styled.div`
  padding-bottom: 16px;
  width: 100%;

  @media ${device.tablet} {
    padding-bottom: 0;
    width: 50%;
  }
`;

export const TitleSection = styled.h1`
  text-align: center;

  @media ${device.laptopL} {
    text-align: left;
  }
`;
