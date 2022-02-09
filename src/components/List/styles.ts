import styled from "styled-components";
import {Text} from "../Typography/Text";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 58px;
  margin-top: 20px;
`;

export const ListItem = styled(Text).attrs({
  sizeDesktop: 22,
  lineHeightDesktop: 40,
  sizeMob: 20,
  lineHeightMob: 22,
  weight: "light",
  color: "#F6F6F6",
})`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 20px; //mock
`;

export const ListMarker = styled(Text).attrs({
  sizeDesktop: 28,
  lineHeightDesktop: 40,
  weight: "semi-bold",
  color: "#4ADDCB",
})`
  display: flex;
  align-items: center;
  margin-top: 8px;
  justify-content: center;
  width: 25px;
  min-width: 25px;
  border-radius: 50%;
  height: 25px;
  margin-right: 18px;
  //background: #133c3e; for number
`;

export const ListTextWrapper = styled.div`
  padding: 0;
  margin: 0;
  @media (max-width: 500px) {
    max-width: 83%;
  }
`;
