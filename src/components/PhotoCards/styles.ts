import styled from "styled-components";
import {Text} from "../Typography/Text";

export const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
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
  width: 352px;
  border-radius: 20px;
  margin-bottom: 10px;
  align-items: center;
  @media (max-width: 1200px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 500px) {
    width: calc(90% - 20px);
    padding: 20px 10px;
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 30px;
  box-shadow: inset 1px 1px 6px 2px hsl(0deg 0% 100% / 8%);
  display: flex;
  justify-content: center;
  max-width: 352px;
  border-radius: 20px;
  align-items: center;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 352px;
  height: 294px;
  border-radius: 20px;
  @media (max-width: 400px) {
    width: 100%;
    height: 70vw;
  }
`;

export const TextWrapper = styled.div`
  width: ${(props) => props.theme.width || "90%"};
  text-align: center;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
