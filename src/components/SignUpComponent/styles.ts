import styled from "styled-components";
import {Text} from "../Typography/Text";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 49px 32px 39px 43px;
  align-items: flex-start;
  justify-content: space-between;
  width: calc(100% - 92px);
  background: linear-gradient(89.71deg, rgba(227, 227, 227, 0.13) 0.3%, rgba(213, 213, 213, 0.0286) 99.79%);
  box-shadow: inset 3px 2px 7px rgba(243, 243, 243, 0.05);
  border-radius: 14px;
  @media (max-width: 500px) {
    display: ${(props) => (props.theme.disappear ? "none" : "flex")};
    width: 70%;
    padding: 5%;
    padding-bottom: 40px;
    flex-direction: column;
  }
`;

export const ContainerText = styled(Text).attrs({
  sizeMob: 20,
  sizeDesktop: 22,
  weight: "semi-bold",
  lineHeightDesktop: 33,
  lineHeightMob: 26.5,
  color: "#46D6C8;",
})`
  max-width: 250px;
  @media (max-width: 450px) {
    text-align: center;
    margin-bottom: 16px;
    max-width: 242px;
  }
`;

export const SignUpButton = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4275d1;
  color: #ffffff;
  font-family: Montserrat, sans-serif;
  border-radius: 7px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  width: 247px;
  border: none;
  height: 80px;
`;
