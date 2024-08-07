import { ColorType } from "@globalTypes/ColorType";
import { hasNeedBlackTextColor } from "src/utils/hasNeedBlackTextColor";
import styled from "styled-components";

export const ButtonIconContainer = styled.div<{ color: ColorType }>`
  display: flex;
  align-items: center;

  padding-right: 8px;
  
  background-color: ${(props) => props.color};
  cursor: pointer;
  border-radius: 6px;
`;

export const IconSectionWithoutTitle = styled.div`

  padding: 8px 8px 8px 12px;
  margin-top: 4px;
`;

export const IconSection = styled.div`

  margin-top: 4px;
  padding-left: 8px;
`;

export const IconTitle = styled.span<{ color: ColorType }>`
  padding-left: 8px;
  font-size: 12px;
  color: ${(props) => hasNeedBlackTextColor.includes(props.color) ? "#574F4D" : "white"};
`;
