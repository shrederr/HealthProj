import styled from "styled-components";
import {Text} from "../Typography/Text";

export const TopTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 78px 0 59px 0;
  background: linear-gradient(89.71deg, rgba(227, 227, 227, 0.15) 0.3%, rgba(213, 213, 213, 0.033) 99.79%);
  box-shadow: inset 3px 2px 7px rgba(243, 243, 243, 0.05);
  margin-bottom: 118px;
`;

export const TopTitleText = styled(Text).attrs({
  sizeDesktop: 48,
  lineHeightDesktop: 55, //mock
  weight: "semi-bold",
})`
  background: linear-gradient(268.93deg, #4274d3 8.32%, #46d6c8 91.56%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 61%;
  @media (max-width: 900px) {
    width: 90%; //mock
  }
`;

export const Title = styled(Text).attrs({
  sizeDesktop: 36,
  lineHeightDesktop: 30,
  weight: "semi-bold",
})`
  width: 100%;
  text-transform: capitalize;
  background: linear-gradient(268.93deg, #4274d3 8.32%, #46d6c8 91.56%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 40px;
`;

export const SimpleText = styled(Text).attrs({
  sizeDesktop: 18,
  lineHeightDesktop: 28,
  weight: "regular",
  color: "#D1DBDB",
})`
  width: 100%;
  margin-bottom: 20px;
`;

export const SimpleLink = styled.a`
  text-decoration: none;
  list-style: none;
  color: #46d6c8;
`;

export const Paragraph = styled(Text).attrs({
  sizeDesktop: 18,
  lineHeightDesktop: 30,
  weight: "regular",
  color: "#F6F6F6",
})`
  width: calc(100% - 104px);
  padding: 45px 57px 33px 47px;
  margin-bottom: 52px;
  background: linear-gradient(89.71deg, rgba(227, 227, 227, 0.15) 0.3%, rgba(213, 213, 213, 0.033) 99.79%);
  box-shadow: inset 3px 2px 7px rgba(243, 243, 243, 0.05);
  border-radius: 15px;
  @media (max-width: 900px) {
    padding: 45px 5% 33px 5%; //mock mob
  }
`;
