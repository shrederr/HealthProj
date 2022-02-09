import styled from "styled-components";
import {Text} from "../Typography/Text";

export const TopBannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-bottom: 125px;
  margin-top: 83px;
  @media (max-width: 1600px) {
    width: 75%;
  }
  @media (max-width: 900px) {
    justify-content: center;
  }
  @media (max-width: 1400px) {
    justify-content: center;
    align-items: center;
    width: 90%;
    flex-direction: column;
  }
`;

export const TopBannerLeftSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  @media (max-width: 600px) {
    //mock
    align-items: center;
    > div:nth-child(2) {
      text-align: center !important;
    }
    margin-bottom: 60px;
    width: 100%;
  }
`;

export const TopBannerTitle = styled(Text).attrs({
  sizeDesktop: 80,
  sizeMob: 45,
  lineHeightMob: 55,
  weight: "semi-bold",
  lineHeightDesktop: 100,
})`
  background: linear-gradient(268.93deg, #4274d3 8.32%, #46d6c8 91.56%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: capitalize;
  margin-bottom: 30px;
  @media (max-width: 900px) {
    width: 100%;
    text-transform: none;
    margin-bottom: 14px;
    text-align: left;
  }
`;

export const TopImgWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 648px;
  height: 532px;
  position: relative;
  @media (max-width: 1700px) {
    width: 500px;
    height: 400px;
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 480px;
    margin-bottom: 62px;
  }
  @media (max-width: 500px) {
    height: 70vw;
  }
`;

export const TopImg = styled.img`
  width: 100%;
  height: 499px;
  border-radius: 20px;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  @media (max-width: 1700px) {
    height: 400px;
  }
  @media (max-width: 900px) {
    left: 5%;
    width: 90%;
    height: 480px;
  }
  @media (max-width: 500px) {
    left: 5%;
    width: 90%;
    max-width: 350px;
    height: 70vw;
  }
`;

export const TopImgBackground = styled.div`
  position: absolute;
  border-radius: 20px;
  width: 100%;
  height: 499px;
  top: 15px;
  left: -39px;
  background-image: linear-gradient(77.64deg, #46d6c8 4.17%, #4275d1 92.17%);
  @media (max-width: 1700px) {
    height: 408px;
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 480px;
  }
  @media (max-width: 500px) {
    left: 0;
    top: 30px;
    width: 79%;
    max-width: 265px;
    height: 70vw;
  }

  :before {
    position: absolute;
    content: "";
    top: 4px;
    border-radius: 20px;
    left: 4px;
    background-color: #0e1018;
    width: calc(100% - 8px);
    height: 491px;
    @media (max-width: 1700px) {
      height: 400px;
    }
    @media (max-width: 900px) {
      width: calc(100% - 8px);
      height: 472px;
    }
    @media (max-width: 500px) {
      width: calc(100% - 8px);
      max-width: 265px;
      height: calc(70vw - 8px);
    }
  }
`;

export const SecondSectionLeftSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 650px;
  @media (max-width: 700px) {
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`;

export const LongImgWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 470px;
  height: 592px;
  position: relative;
  @media (max-width: 1700px) {
    width: 400px;
    height: 550px;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 62px;
    height: 100vw;
  }
`;

export const LongImg = styled.img`
  width: 100%;
  height: 592px;
  position: absolute;
  z-index: 2;
  border-radius: 20px;
  top: 0;
  left: 0;
  @media (max-width: 500px) {
    left: 10%;
    width: 80%;
    max-width: 350px;
    height: 90vw;
  }
`;

export const LongImgBackground = styled.div`
  position: absolute;
  border-radius: 20px;
  width: 100%;
  height: 592px;
  top: 15px;
  left: -39px;
  background-image: linear-gradient(77.64deg, #46d6c8 4.17%, #4275d1 92.17%);
  @media (max-width: 500px) {
    left: 5%;
    top: 30px;
    width: 80%;
    max-width: 265px;
    height: 90vw;
  }
  :before {
    position: absolute;
    content: "";
    top: 4px;
    border-radius: 20px;
    left: 4px;
    background-color: #0e1018;
    width: calc(100% - 8px);
    height: 584px;
    @media (max-width: 500px) {
      width: calc(100% - 8px);
      max-width: 265px;
      height: calc(90vw - 8px);
    }
  }
`;

export const PartnerButton = styled.input`
  align-items: center;
  justify-content: center;
  background: #4275d1;
  color: #ffffff;
  cursor: pointer;
  font-family: Montserrat, sans-serif;
  border-radius: 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin-right: auto;
  text-align: center;
  margin-bottom: 10px;
  border: none;
  height: 80px;
  @media (max-width: 500px) {
    margin-right: auto;
  }
`;
