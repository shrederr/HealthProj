import styled from "styled-components";
import {Text} from "../Typography/Text";

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 5;
  width: 100%;
  margin-bottom: 147px;
  @media (max-width: 1200px) {
    display: none;
    flex-direction: column;
    margin-bottom: 61px;
    align-items: center;
  }
`;

export const DotsWrapper = styled.div`
  margin: 22px 0 10px 0;
  display: none;
  justify-content: center;
  list-style: none;

  .slick-active svg {
    fill: #46d6c8;
  }
  @media (max-width: 1200px) {
    display: flex;
  }
`;

export const DotWrapper = styled.button`
  display: none;
  margin: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 0 7px;
  @media (max-width: 1200px) {
    display: block;
  }
`;

export const CardsWrapperMob = styled.div`
  display: none;
  overflow-x: hidden;
  z-index: 10;

  & .slick-track {
    display: flex;
  }
  @media (max-width: 1200px) {
    width: 80%;
    display: block;
    margin-bottom: 61px;
    align-items: center;
  }
  @media (max-width: 450px) {
    width: 90%;
  }
`;

export const Card = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  margin-right: 45px;
  padding: 20px 17px 0px 17px;
  max-width: 393px;
  height: 786px;
  background: linear-gradient(89.71deg, rgba(227, 227, 227, 0.13) 0.3%, rgba(213, 213, 213, 0.0286) 99.79%);
  opacity: 0.76;
  box-shadow: inset 3px 2px 7px rgba(243, 243, 243, 0.05);
  border-radius: 14px;
  @media (max-width: 1200px) {
    margin-bottom: 25px; //mock
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 18px 0;
    height: 723px;
  }
`;

export const CardImg = styled.img`
  border-radius: 15px;
  width: 359px;
  max-height: 312px;
  margin-bottom: 39px;
  @media (max-width: 500px) {
    width: 91%;
  }
`;

export const CardTitle = styled(Text).attrs({
  sizeDesktop: 32,
  lineHeightDesktop: 20,
  weight: "semi-bold",
  color: "#46D6C8",
  textAlign: "center",
  marginBottomDesktop: 37,
  marginBottomMob: 32,
})`
  width: 100%;
`;

export const CardChapterWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const CardChapter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: 900px) {
    width: 83%;
  }
`;

export const CardChapterText = styled(Text).attrs({
  sizeDesktop: 18,
  weight: "regular",
  lineHeightDesktop: 26,
  color: "#E2E2E2",
  textAlign: "left",
  marginBottomDesktop: 51,
  marginBottomMob: 27,
})`
  max-width: 300px;
  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

export const Arrow = styled.img`
  width: 7px;
  height: 10px;
  margin-right: 13px;
  margin-top: 5px;
`;
