import styled from "styled-components";
import {Text} from "../Typography/Text";

export const FormWrapper = styled.div`
  display: flex;
  padding: 81px 0 112px 0;
  width: 69%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: linear-gradient(89.71deg, rgba(227, 227, 227, 0.15) 0.3%, rgba(213, 213, 213, 0.033) 99.79%);
  box-shadow: inset 3px 2px 7px rgba(243, 243, 243, 0.05);
  border-radius: 15px;
  margin-bottom: 116px;
  @media (max-width: 1600px) {
    width: 65%;
    padding: 81px 5% 112px 5%;
  }
  @media (max-width: 900px) {
    padding: 53px 0 43px 0;
  }
  @media (max-width: 600px) {
    width: calc(100% - 54px);
    padding: 27px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1240px) {
    align-items: center;
    flex-direction: column-reverse;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FormLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 118px;
  @media (max-width: 1240px) {
    margin-right: 0;
  }
`;

export const FormInputWrapper = styled.label`
  display: flex;
  flex-direction: row;
  width: 478px;
  align-items: center;
  height: 67px;
  padding: 18px 27px;
  border: 1px solid #9e9fa2;
  box-sizing: border-box;
  border-radius: 9px;
  margin-bottom: 35px;
  @media (max-width: 1240px) {
    width: 100%;
    padding: 10px 20px;
    height: 48px;
  }
  &:hover {
    border-color: #57c5bc;
  }
`;

export const Icon = styled.div`
  width: 33px;
  height: 30px;
  margin-right: 23px;
`;

export const FormInput = styled.input`
  font-family: Montserrat, sans-serif;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  border: none;
  padding: 0;
  color: #9e9fa2;
  background: none;
  &:focus {
    outline: none;
  }
`;

export const FormButton = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4275d1;
  color: #ffffff;
  text-transform: capitalize;
  font-family: Montserrat, sans-serif;
  border-radius: 7px;
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  width: 250px;
  border: none;
  height: 65px;
  @media (max-width: 600px) {
    width: 137px;
    height: 46px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  list-style: none;
  cursor: pointer;
`;

export const FormRightSide = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 400px;
  @media (max-width: 1240px) {
    margin-bottom: 42px;
  }
  align-items: flex-start;
  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const Line = styled.div`
  height: 40px;
  width: 5px;
  margin-right: 18px;
  background: #46d6c8;
  @media (max-width: 600px) {
    margin-right: 10px;
  }
`;

export const FormText = styled(Text).attrs({
  sizeDesktop: 22,
  sizeMob: 18,
  weight: "light",
  lineHeightMob: 26,
  lineHeightDesktop: 38,
  color: "#FCFFFF",
})`
  white-space: break-spaces;
  width: 100%;
`;
