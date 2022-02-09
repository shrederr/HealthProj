import React from "react";
import {
  MainContainer,
  Container,
  TopContainerLeftSide,
  TopContainerTitle,
  TopContainerSubtitle,
  TopContainerImage,
  TopText,
  TopContainerImageContainer,
  HealthBannerTextContainer,
  HealthBannerWrapper,
  HealthImage,
  HealthText,
  HealthDoctorTitle,
  HealthDoctorWrapper,
  HealthFirstRowWrapper,
  FeatureImageWrapper,
  HealthDoctorSubTitle,
  HealthListItem,
  HealthListMarker,
  HealthListWrapper,
  MainImg,
  MainImgWrapper,
  MainImgBackground,
  Link,
  //SecondImgDesktop,
  //SecondImgMob,
  TextWrapper,
  SimpleSectionWrapper,
  SimpleTextBlock,
  BlueText,
  Line,
  TopLine,
  TopRequestButton,
  ButtonDescription,
  FeatureImage,
  NutritionSection,
  NutritionTextWrapper,
} from "./styles";
//import {SingUpComponent} from "../SignUpComponent";
import {SectionTitle} from "../SectionTitle";
import {SignUpForm} from "../SignUpForm";
import {Seo} from "../Seo/Seo";
import Mobile from "./assets/images/homepageLogo.png";
//import Mobile2 from "./assets/images/mobile2.png";
//import MobileMob from "./assets/images/mobileMob.png";
import Ball from "./assets/images/Ball.png";
import NutrioImg from "./assets/images/nutrioImg.png";
import ArrowMarker from "./assets/logoMarket.svg";
import Men from "./assets/images/Men.png";
import {FitnessCards} from "../FitnessCards";
import {FitnessArr, NatureArr, HealthArr} from "./mockData";
import {PhotoCards} from "../PhotoCards";
import {FadeIn, FadeLeft, FadeUp, FadeRight} from "../../helpers/Animations/styles";
import HealthSectionImage from "./assets/images/healthSectionImage.png";
import {
  BackGroundTopDesktop,
  EllipseLeft,
  EllipseRight,
  BackGroundTopMob,
  EllipseLeftMob,
  EllipseRightMob,
} from "../BasicPageComponent/styles";
import Ellips1 from "../Layout/assets/image/Elips1.png";
import Ellips2 from "../Layout/assets/image/Ellipse2.png";
import Ellipse3 from "../Layout/assets/image/Ellipse3.png";
import Ellipse4 from "../Layout/assets/image/Ellipse4.png";
import Ellipse5 from "../Layout/assets/image/Ellipse5.png";
import Ellipse152 from "../Layout/assets/image/Ellipse152G.png";
import Ellipse154 from "../Layout/assets/image/Ellipse154B.png";
import Ellipse175 from "../Layout/assets/image/Ellipse175G.png";
import Ellipse208 from "../Layout/assets/image/Ellipse208G.png";
import Ellipse211 from "../Layout/assets/image/Ellipse211G.png";
import Ellipse227 from "../Layout/assets/image/Ellipse227B.png";
import BGTop from "../Layout/assets/image/bgTop.png";
import BGTopMob from "../Layout/assets/image/bgTopMob.png";

export const HomePage: React.FC = () => {
  return (
    <>
      <Seo description={""} image={""} title={"Ventrickle"} />
      <BackGroundTopDesktop src={BGTop} />
      <BackGroundTopMob src={BGTopMob} />
      <EllipseLeft src={Ellips1} theme={{top: "30px", left: "145px"}} />
      <EllipseRight src={Ellips2} theme={{top: "400px", right: "574px"}} />
      <EllipseRight src={Ellipse3} theme={{top: "814px", right: "13px"}} />
      <EllipseLeft src={Ellipse4} theme={{top: "1814px", left: "145px"}} />
      <EllipseRight src={Ellipse5} theme={{top: "3424px", right: "13px"}} />
      <EllipseLeft src={Ellips1} theme={{top: "4693px", left: "235px"}} />
      <EllipseRight src={Ellips2} theme={{top: "5214px", right: "100px"}} />
      <EllipseLeftMob src={Ellipse152} theme={{top: "30px", left: "30px"}} />
      <EllipseRightMob src={Ellipse154} theme={{top: "463px", right: "3px"}} />
      <EllipseRightMob src={Ellipse208} theme={{top: "1050px", right: "34px"}} />
      <EllipseLeftMob src={Ellipse208} theme={{top: "1538px", left: "45px"}} />
      <EllipseLeftMob src={Ellipse208} theme={{top: "2000px", left: "0"}} />
      <EllipseRightMob src={Ellipse227} theme={{top: "5400px", right: "0"}} />
      <EllipseRightMob src={Ellipse208} theme={{top: "4250px", right: "0"}} />
      <EllipseLeftMob src={Ellipse208} theme={{top: "5900px", left: "0"}} />
      <EllipseRightMob src={Ellipse208} theme={{top: "6750px", right: "0"}} />
      <EllipseLeftMob src={Ellipse175} theme={{top: "7508px", left: "0"}} />
      <EllipseRightMob src={Ellipse227} theme={{top: "8154px", right: "0"}} />
      <EllipseLeftMob src={Ellipse211} theme={{top: "9100px", left: "0"}} />
      <MainContainer>
        <Container style={{marginTop: "83px"}} theme={{flexDirection: "column"}}>
          <TopContainerLeftSide>
            <FadeUp animatePreScroll={true}>
              <TopContainerTitle>Optimise your health.</TopContainerTitle>
              <TopContainerSubtitle>Look better. Get stronger. Feel terrific.</TopContainerSubtitle>
              <TopText>
                Data driven insights directly from restaurants, healthcare professionals and from performance oriented
                coaches - at your fingertips.
              </TopText>
              <TopLine />
            </FadeUp>
            <Link href={"mailto:info@ventrickle.com?subject=sign up inquiry"}>
              <TopRequestButton type={"button"} value={"Request Access"} />
            </Link>
            <ButtonDescription>Assemble your team. Try us for free.</ButtonDescription>
          </TopContainerLeftSide>
          <TopContainerImageContainer>
            <FadeRight animatePreScroll={true}>
              <TopContainerImage src={Mobile} theme={{width: "100%"}} />
            </FadeRight>
          </TopContainerImageContainer>
        </Container>
        <SectionTitle title={"Features"} subTitlePosition={"center"} marginBottomDesktop={"50px"} mobWidth={280} />
        <Container theme={{flexDirection: "column"}}>
          <FeatureImageWrapper>
            <FadeLeft>
              <FeatureImage src={HealthSectionImage} alt={"Men"} />
            </FadeLeft>
          </FeatureImageWrapper>
          <TextWrapper theme={{mobWidth: "90%", alignItems: "flex-start"}}>
            <SimpleTextBlock theme={{marginBottom: "20px", weight: "medium", widthMob: "100%", sizeDesktop: 24}}>
              The climb towards better health is best done with all-star support.
            </SimpleTextBlock>
            <SimpleTextBlock
              theme={{
                marginBottom: "34px",
                lineHeightDesktop: 30,
                sizeDesktop: 24,
                sizeMob: 16,
                lineHeightMob: 22,
                widthMob: "100%",
                weight: "light",
              }}>
              Health in your pocket.
            </SimpleTextBlock>
            <SimpleTextBlock
              theme={{
                marginBottom: "34px",
                lineHeightDesktop: 30,
                sizeDesktop: 24,
                sizeMob: 16,
                lineHeightMob: 22,
                widthMob: "100%",
                weight: "light",
              }}>
              Getting and staying in shape while maintaining good health is hard.
            </SimpleTextBlock>
            <SimpleTextBlock
              theme={{
                lineHeightDesktop: 55,
                sizeDesktop: 24,
                weight: "medium",
                widthMob: "100%",
                sizeMob: 16,
                lineHeightMob: 22,
              }}>
              We get it. We feel the same way.
            </SimpleTextBlock>
            <SimpleTextBlock
              theme={{
                marginBottom: "34px",
                lineHeightDesktop: 55,
                sizeDesktop: 24,
                weight: "medium",
                sizeMob: 16,
                lineHeightMob: 22,
                widthMob: "100%",
              }}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              This is a team sport, and you're the captain.
            </SimpleTextBlock>
          </TextWrapper>
        </Container>
        <SectionTitle
          title={"Nutrition"}
          subTitlePosition={"center"}
          line={false}
          marginBottomDesktop={"50px"}
          mobWidth={280}
        />
        <FadeIn>
          <NutritionSection>
            <TopContainerImageContainer theme={{width: "100%"}}>
              <TopContainerImage src={NutrioImg} theme={{width: "100%"}} />
            </TopContainerImageContainer>
            <NutritionTextWrapper>
              <SimpleTextBlock theme={{marginBottom: "20px", widthMob: "100%", weight: "medium"}}>
                Trying to create a calorie deficit? Finding it hard to stay on top of your nutrition?
              </SimpleTextBlock>
              <SimpleTextBlock
                theme={{marginBottom: "20px", sizeMob: 16, lineHeightMob: 25, widthMob: "100%", weight: "medium"}}>
                <BlueText>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Well of course it is - it's like shopping at a store, with no idea what the prices are.
                </BlueText>
              </SimpleTextBlock>
              <SimpleTextBlock theme={{widthMob: "100%", sizeMob: 14, lineHeightMob: 20, weight: "light"}}>
                Get access to restaurant quality food without compromising on your health and fitness goals. Get
                insights coming directly from the chefs themselves, married with performance and data driven
                optimisation from our team of doctors and coaches.
              </SimpleTextBlock>
            </NutritionTextWrapper>
          </NutritionSection>
        </FadeIn>
        <Container>
          <PhotoCards data={NatureArr} textWidth={"100%"} />
        </Container>
        <SectionTitle
          title={"Fitness"}
          subTitlePosition={"center"}
          line={false}
          marginBottomDesktop={"50px"}
          mobWidth={280}
        />
        <Container>
          <FitnessCards data={FitnessArr} />
        </Container>
        <SectionTitle
          title={"Health"}
          subTitlePosition={"center"}
          line={false}
          marginBottomDesktop={"50px"}
          mobWidth={280}
        />
        <Container>
          <PhotoCards data={HealthArr} />
        </Container>
        <HealthFirstRowWrapper>
          <FadeIn>
            <HealthBannerWrapper>
              <HealthBannerTextContainer>
                The balloon is a visual indicator of your calories.
                <HealthText>
                  It will get bigger with more calorie consumption and smaller with more burned calories.
                </HealthText>
              </HealthBannerTextContainer>
              <HealthImage src={Ball} alt="Ball" />
            </HealthBannerWrapper>
          </FadeIn>
          <HealthDoctorWrapper>
            <HealthDoctorTitle>Trusted by doctors. Backed by science.</HealthDoctorTitle>
            <Line />
            <HealthDoctorSubTitle>Not data driven? No problem. We’ve got you covered.</HealthDoctorSubTitle>
            <HealthListWrapper>
              <HealthListItem>
                <HealthListMarker src={ArrowMarker} alt={"arrow-marker"} />
                <div>We understand that not everyone likes figures and spreadsheets.</div>
              </HealthListItem>
              <HealthListItem>
                <HealthListMarker src={ArrowMarker} alt={"arrow-marker"} />
                <div>If you’re a little more artistic and creative, let the numbers work in the background.</div>
              </HealthListItem>
              <HealthListItem>
                <HealthListMarker src={ArrowMarker} alt={"arrow-marker"} />
                <div>
                  We’ll let you know if you’re staying healthy - it just may look a little less like what you’re used
                  to.
                </div>
              </HealthListItem>
            </HealthListWrapper>
          </HealthDoctorWrapper>
        </HealthFirstRowWrapper>
        <SectionTitle title={"Our Mission"} mobWidth={310} marginBottomMob={"30px"} marginBottomDesktop={"30px"} />
        <SimpleSectionWrapper>
          <FadeLeft>
            <MainImgWrapper>
              <MainImg src={Men} alt={"Men"} />
              <MainImgBackground />
            </MainImgWrapper>
          </FadeLeft>
          <TextWrapper>
            <SimpleTextBlock theme={{marginBottom: "20px", widthMob: "90%", weight: "medium"}}>
              Never give up the press for better health.
            </SimpleTextBlock>
            <SimpleTextBlock
              theme={{marginBottom: "24px", widthMob: "90%", sizeMob: 16, lineHeightMob: 22, weight: "light"}}>
              Cardiovascular disease and metabolic health is a major cause of mortality and morbidity in most nations
              today. Most of you either suffer from, or know someone with heart disease or complications that have
              arisen as a result of diabetes, metabolic syndrome or one of its associated pitfalls.
            </SimpleTextBlock>
            <SimpleTextBlock theme={{marginBottom: "20px", widthMob: "90%", weight: "medium"}}>
              We get it. We do too.
            </SimpleTextBlock>
            <SimpleTextBlock theme={{marginBottom: "40px", widthMob: "90%", lineHeight: 22, weight: "light"}}>
              A lot of our users are younger, without any medical conditions, who strive to become the best physical
              versions of themselves - optimising performance and keeping disease at bay.
            </SimpleTextBlock>
            <SimpleTextBlock
              theme={{marginBottom: "40px", widthMob: "90%", sizeMob: 16, lineHeightMob: 40, weight: "medium"}}>
              <BlueText>This is the product we wish we had.</BlueText>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <BlueText>And now it's all yours. </BlueText>
            </SimpleTextBlock>
          </TextWrapper>
        </SimpleSectionWrapper>
        <SectionTitle
          title={"Request Access Now"}
          marginBottomDesktop={"47px"}
          containMobWidth={"100%"}
          titleMaxWidthMob={"100%"}
        />
        <FadeIn>
          <SignUpForm
            text={"Discover a world of metabolic flexibility, with insights delivered tailor-made and straight to you."}
            link={true}
            linkValue={"mailto:info@ventrickle.com?subject=sign up inquiry"}
          />
        </FadeIn>
      </MainContainer>
    </>
  );
};
