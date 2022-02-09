import styled from "styled-components";
import {Text} from "../Typography/Text";

export const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const Card = styled(Text).attrs({
  sizeDesktop: 18,
  sizeMob: 14,
  lineHeightMob: 22,
  lineHeightDesktop: 28,
  weight: "regular",
  color: "#FFFFFF",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(89.71deg, rgba(227, 227, 227, 0.13) 0.3%, rgba(213, 213, 213, 0.0286) 99.79%);
  box-shadow: inset 3px 2px 7px rgb(243 243 243 / 5%);
  border-radius: 14px;
  width: 320px;
  padding: 25px 0;
  margin-bottom: 40px;
  max-height: 347px;
  min-height: 252px;
  max-width: 352px;
  @media (max-width: 1200px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 600px) {
    width: 90%;
    min-height: 226px;
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 30px;
  box-shadow: inset 1px 1px 6px 2px hsl(0deg 0% 100% / 8%);
  width: 100px;
  display: flex;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  height: 118px;
`;

export const TextWrapper = styled.div`
  width: 86%;
  text-align: center;
  @media (max-width: 500px) {
    width: 85%;
  }
`;
