import styled from 'styled-components';

export const Panel = styled.div`

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 10000;
`;

export const Container = styled.div`
  
  min-width: 600px;
  border-radius: 8px;
  background-color: #fff;
`;

export const Header = styled.div`

  position: relative;

  display: flex;
  justify-content: space-around;

  border-bottom: 2px solid #ccc;

  width: 100%;  
`;

export const TitleSection = styled.div`

  padding: 16px;
  text-align: center;
`;

export const CloseSection = styled.div`

  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export const Body = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  height: 120px;

  border-bottom: 2px solid #ccc;
`;

export const Footer = styled.div`

  display: flex;
`;

