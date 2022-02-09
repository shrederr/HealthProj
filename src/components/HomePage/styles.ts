import styled from "styled-components";
import {Text} from "../Typography/Text";

export const MainContainer = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 69%;
  margin-bottom: 192px;
  @media (max-width: 1600px) {
    width: 75%;
  }
  @media (max-width: 900px) {
    flex-direction: ${(props) => props.theme.flexDirection || "column-reverse"};
    width: 100%;
    margin-bottom: 43px;
  }
`;

export const TopContainerLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 603px;
  @media (max-width: 900px) {
    margin-right: 0;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 500px) {
    margin-bottom: 60px;
    width: 90%;
    margin-top: ${(props) => props.theme.mobMargin};
  }
`;

export const TopContainerTitle = styled(Text).attrs({
  sizeDesktop: 80,
  sizeMob: 45,
  weight: "semi-bold",
  lineHeightDesktop: 100,
  lineHeightMob: 50,
})`
  background: linear-gradient(270.11deg, #4275d1 2.13%, #46d6c8 100.59%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: capitalize;
  max-width: 510px;
  margin-bottom: 24px;
  @media (max-width: 900px) {
    width: 80%;
    margin-bottom: 14px;
    text-align: center;
  }
  @media (max-width: 500px) {
    width: 100%;
    text-transform: none;
    text-align: left;
  }
`;

export const TopLine = styled.div`
  width: 77px;
  height: 5px;
  background-color: #4274d2;
  margin-bottom: 47px;
  border-radius: 30px;
  @media (max-width: 500px) {
    margin-right: auto;
  }
`;

export const TopContainerSubtitle = styled(Text).attrs({
  sizeDesktop: 24,
  sizeMob: 25,
  color: "#EEEEEE",
  weight: "regular",
  lineHeightDesktop: 33,
  lineHeightMob: 30,
  marginBottomDesktop: 40,
})`
  margin-bottom: 24px;
  @media (max-width: 500px) {
    width: 80%;
    text-align: left;
  }
`;

export const TopText = styled(Text).attrs({
  sizeDesktop: 18,
  sizeMob: 16,
  color: "#EEEEEE",
  weight: "regular",
  lineHeightDesktop: 25,
})`
  max-width: 550px;
  margin-bottom: 24px;
  @media (max-width: 500px) {
    width: 90%;
    text-align: left;
  }
`;

export const ButtonDescription = styled(Text).attrs({
  sizeDesktop: 12,
  color: "#EEEEEE",
  weight: "regular",
  lineHeightDesktop: 20,
})`
  @media (max-width: 500px) {
    width: 100%;
    text-align: left;
  }
`;

export const FeatureImageWrapper = styled.div`
  @media (max-width: 500px) {
    margin-bottom: 40px;
    width: 90%;
  }
`;
export const FeatureImage = styled.img`
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const TopContainerImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    margin-bottom: 30px;
    width: ${(props) => props.theme.width || "90%"};
  }
`;

export const TopContainerImage = styled.img`
  width: 383px;
  @media (max-width: 900px) {
    width: ${(props) => props.theme.width || "70%"};
  }
`;

export const TopRequestButton = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #4275d1;
  color: #ffffff;
  font-family: Montserrat, sans-serif;
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 29px;
  text-align: center;
  margin-bottom: 10px;
  width: 237px;
  border: none;
  height: 52px;
  @media (max-width: 500px) {
    width: 200px;
    margin-right: auto;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  list-style: none;
  @media (max-width: 500px) {
    display: flex;
    width: 100%;
    align-items: flex-start;
  }
`;

export const SecondLogoMob = styled.img`
  display: none;
  position: absolute;
  width: 194px;
  height: 269px;
  top: 30px;
  left: 23%;
  @media (max-width: 900px) {
    display: block;
  }
`;

export const SecondLogoDesk = styled.img`
  position: absolute;
  width: 384px;
  height: 533.44px;
  top: -235px;
  left: 78px;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const HealthBannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 42px 64px 35px 38px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(89.71deg, rgba(227, 227, 227, 0.13) 0.3%, rgba(213, 213, 213, 0.0286) 99.79%);
  opacity: 1;
  box-shadow: inset 3px 2px 7px rgba(243, 243, 243, 0.05);
  border-radius: 14px;
  max-width: 557px;
  margin-right: auto;
  @media (max-width: 600px) {
    margin-right: 0;
    padding: 20px 5% 20px 5%;
    margin-bottom: 29px;
    width: 80%;
  }
`;

export const HealthBannerTextContainer = styled(Text).attrs({
  sizeDesktop: 28,
  sizeMob: 14,
  lineHeightDesktop: 40,
  lineHeightMob: 20,
  weight: "semi-bold",
  color: "#46D6C8",
})`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  align-items: center;
  margin-right: 23px;
  justify-content: center;
  padding: 25px 32px;
  background: linear-gradient(89.71deg, rgba(227, 227, 227, 0.13) 0.3%, rgba(213, 213, 213, 0.0286) 99.79%);
  border-radius: 14px;
  opacity: 1;
  @media (max-width: 600px) {
    width: 260px;
    padding: 24px 5px 32px 5px;
  }
`;

export const HealthText = styled(Text).attrs({
  sizeDesktop: 24,
  lineHeightDesktop: 34,
  lineHeightMob: 20,
  sizeMob: 14,
  weight: "semi-bold",
  color: "#DFDFDF",
})``;

export const HealthImage = styled.img`
  max-width: 352px;
  @media (max-width: 600px) {
    width: 150px;
    height: 200px;
  }
`;

export const HealthFirstRowWrapper = styled.div`
  display: flex;
  flex-flow: row;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 151px;
  @media (max-width: 1600px) {
    width: 75%;
  }
  @media (max-width: 1400px) {
    margin-bottom: 66px;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const HealthDoctorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 595px;
`;

export const HealthDoctorTitle = styled(Text).attrs({
  sizeDesktop: 36,
  lineHeightDesktop: 50,
  weight: "semi-bold",
  color: "#DFDFDF",
  textTransform: "capitalize",
})`
  width: 100%;
  background: linear-gradient(268.93deg, #4274d3 8.32%, #46d6c8 91.56%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 29px;
  @media (max-width: 1200px) {
    width: 90%;
    max-width: 400px;
    text-align: center;
  }
`;

export const Line = styled.div`
  display: none;
  width: 77px;
  height: 6px;
  margin-bottom: 38px;
  background: #4275d1;
  box-shadow: 0px 2px 12px -5px #46d6c8;
  border-radius: 7px;
  @media (max-width: 500px) {
    display: block;
    margin-bottom: 31px;
  }
`;

export const HealthDoctorSubTitle = styled(Text).attrs({
  sizeDesktop: 22,
  sizeMob: 20,
  lineHeightDesktop: 33,
  weight: "regular",
  color: "#FFFFFF",
})`
  width: 100%;
  margin-bottom: 42px;
  @media (max-width: 1200px) {
    max-width: 318px;
    text-align: center;
  }
`;

export const HealthListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const HealthListItem = styled(Text).attrs({
  sizeDesktop: 18,
  lineHeightDesktop: 26,
  weight: "regular",
  color: "#E2E2E2",
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 29px;
  @media (max-width: 500px) {
    align-items: flex-start;
  }
  & > div {
    @media (max-width: 500px) {
      max-width: 260px;
    }
  }
`;

export const HealthListMarker = styled.img`
  width: 27px;
  height: 27px;
  margin-right: 18px;
`;

export const MainImgWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 470px;
  height: 499px;
  margin-right: 25px;
  position: relative;
  @media (max-width: 1600px) {
    width: 400px;
    height: 450px;
  }
  @media (max-width: 1400px) {
    margin-bottom: 62px;
  }
  @media (max-width: 600px) {
    margin-right: 0;
    width: 90%;
    height: 380px;
  }
  @media (max-width: 400px) {
    height: 90vw;
  }
`;

export const MainImg = styled.img`
  width: 100%;
  height: 499px;
  position: absolute;
  border-radius: 20px;
  z-index: 2;
  top: 0;
  left: 0;
  @media (max-width: 1600px) {
    width: 400px;
    height: 450px;
  }
  @media (max-width: 600px) {
    width: 90%;
    height: 380px;
  }
  @media (max-width: 400px) {
    left: 5%;
    width: 79%;
    max-width: 265px;
    height: 75vw;
  }
`;

export const MainImgBackground = styled.div`
  position: absolute;
  top: 28px;
  width: 100%;
  height: 499px;
  left: 17px;
  border-radius: 20px;
  background-image: linear-gradient(77.64deg, #46d6c8 4.17%, #4275d1 92.17%);
  @media (max-width: 1600px) {
    height: 458px;
  }
  @media (max-width: 600px) {
    width: 90%;
    height: 380px;
  }
  @media (max-width: 400px) {
    left: 10%;
    top: 21px;
    width: 79%;
    max-width: 265px;
    height: 75vw;
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
    @media (max-width: 1600px) {
      height: 450px;
    }
    @media (max-width: 600px) {
      width: calc(100% - 8px);
      height: 372px;
    }
    @media (max-width: 400px) {
      width: calc(100% - 8px);
      max-width: 265px;
      height: calc(75vw - 8px);
    }
  }
`;

export const SecondImgDesktop = styled.img`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const SecondImgMob = styled.img`
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
`;

export const SimpleSectionWrapper = styled.div`
  display: flex;
  flex-flow: row;
  width: 70%;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 151px;
  @media (max-width: 1600px) {
    width: 75%;
  }
  @media (max-width: 1400px) {
    margin-bottom: 66px;
    flex-direction: ${(props) => (props.theme.revert ? "column-reverse" : "column")};
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const SimpleTextBlock = styled(Text).attrs((props) => ({
  sizeDesktop: props.theme.sizeDesktop || 26,
  sizeMob: props.theme.sizeMob || 18,
  lineHeightDesktop: props.theme.lineHeightDesktop || 40,
  lineHeightMob: props.theme.lineHeightMob || 26,
  weight: props.theme.weight || "regular",
  color: "#FCFFFF",
}))`
  text-align: left;
  width: 100%;
  @media (max-width: 500px) {
    max-width: ${(props) => props.theme.widthMob || "270px"};
  }
  margin-bottom: ${(props) => props.theme.marginBottom};
`;

export const BlueText = styled(Text).attrs({
  color: "#46D6C8",
})`
  width: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  justify-content: left;
  align-items: center;
  @media (max-width: 500px) {
    margin-bottom: 53px;
    align-items: ${(props) => props.theme.alignItems || "center"};
    width: ${(props) => props.theme.mobWidth || "100%"};
  }
`;

export const NutritionSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: calc(70% - 94px);
  padding: 44px 50px 44px 44px;
  background: linear-gradient(89.71deg, rgba(227, 227, 227, 0.13) 0.3%, rgba(213, 213, 213, 0.0286) 99.79%);
  box-shadow: inset 3px 2px 7px rgba(243, 243, 243, 0.05);
  border-radius: 14px;
  margin-bottom: 150px;
  @media (max-width: 1600px) {
    width: calc(75% - 94px);
  }
  @media (max-width: 1250px) {
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 500px) {
    padding: 30px 20px 30px 30px;
    margin-bottom: 100px;
    width: calc(90% - 50px);
  }
`;

export const Bold = styled.div`
  font-weight: 700;
`;

export const NutritionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  justify-content: left;
  align-items: center;
  @media (max-width: 1700px) {
    max-width: 500px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
