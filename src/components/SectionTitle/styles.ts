import styled from "styled-components";
import {Text} from "../Typography/Text";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: ${(props) => props.theme.position};
  width: 100%;
  margin-bottom: ${(props) => props.theme.marginBottomDesktop};
  @media (max-width: 900px) {
    margin-bottom: ${(props) => props.theme.marginBottomMob};
    align-items: ${(props) => props.theme.alignItems || "center"};
    width: ${(props) => props.theme.containMobWidth || "90%"};
  }
`;

export const Title = styled(Text).attrs({
  sizeDesktop: 48,
  sizeMob: 32,
  weight: "semi-bold",
  lineHeightMob: 45,
  lineHeightDesktop: 50, //mock origin 40
  marginBottomDesktop: 25,
})`
  background: linear-gradient(270.11deg, #4275d1 2.13%, #46d6c8 100.59%);
  text-align: ${(props) => props.theme.titlePosition};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 500px) {
    text-align: ${(props) => props.theme.alignMob || "center"};
    max-width: ${(props) => props.theme.titleMaxWidthMob || "300px"};
  }
`;

export const Line = styled.div`
  width: 77px;
  height: 6px;
  margin-bottom: 38px;
  background: #4275d1;
  box-shadow: 0px 2px 12px -5px #46d6c8;
  border-radius: 7px;
  @media (max-width: 500px) {
    margin-bottom: 16px;
  }
`;

export const SubTitle = styled(Text).attrs({
  sizeDesktop: 26,
  weight: "regular",
  lineHeightDesktop: 33,
  color: "#ffffff",
})`
  max-width: ${(props) => props.theme.maxWidth};
  text-align: ${(props) => props.theme.alignDesktopSection};
  font-size: ${(props) => props.theme.desktopSize};
  margin-bottom: 15px;
  @media (max-width: 500px) {
    line-height: ${(props) => props.theme.lineHeightMobSub};
    font-size: ${(props) => (props.theme.mobFontSize ? props.theme.mobFontSize : "20px")};
    text-align: ${(props) => props.theme.textAlign};
    width: ${(props) => props.theme.width + "px"};
    max-width: ${(props) => (props.theme.position === "flex-start" ? "270px" : props.theme.width + "px")};
  }
`;
