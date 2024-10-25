import styled from 'styled-components';

export const PanelProducts = styled.div`
  margin: 16px 0;
  margin-bottom: 32px;

  width: 256px;
  height: 310px;
  border-radius: 6px 36px;

  background-color: #f3f2f2;

  position: relative; /* Establishes a positioning context for its children */
`;

export const SectionDescription = styled.p`
  font-family: 'Roboto', normal;
  font-size: 14px;
  text-align: center;
  line-height: 130%;
  font-optical-sizing: auto;
  color: #8d8686;
`;

export const SectionImage = styled.div`
  display: flex;
  justify-content: center;

  position: relative;
  top: -48px;
`;

export const SectionItem = styled.div`
  margin: 24px;

  position: relative;
  top: -24px;
`;

export const SectionItemBadge = styled.div`
  display: flex;
  justify-content: center;

  position: relative;
  top: -24px;
`;

export const SectionTitle = styled.h4`
  font-family: 'Baloo 2', sans-serif;
  font-size: 20px;
  font-weight: 800;
  font-style: bold;
  text-align: center;
  line-height: 130%;
  font-optical-sizing: auto;
`;
