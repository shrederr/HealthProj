import React from "react";
import {
  MainContainer,
  MainImg,
  MainImgBackground,
  MainImgWrapper,
  SimpleSectionWrapper,
  SimpleTextBlock,
  Link,
  TopLine,
  TextWrapper,
} from "../HomePage/styles";
import {
  TopImgWrapper,
  TopBannerLeftSideWrapper,
  TopImgBackground,
  TopBannerWrapper,
  TopBannerTitle,
  TopImg,
  LongImg,
  LongImgBackground,
  LongImgWrapper,
  SecondSectionLeftSideWrapper,
  PartnerButton,
} from "./styles";
import {SectionTitle} from "../SectionTitle";
import PartnerOne from "./assets/images/partnerLogo.png";
//import Men from "../HomePage/assets/images/Men.png";
import {List} from "../List";
import {ThirdTermsList, FourTermsList} from "../TermsPage/mockData";
import {FadeIn, FadeLeft, FadeRight, FadeUp} from "../../helpers/Animations/styles";
//import PartnerTwo from "./assets/images/partner2.png";
import {Seo} from "../Seo/Seo";
import {SignUpButton} from "../SignUpComponent/styles";
import MenPlus from "./assets/images/menWithPluse.png";
import Puzzle from "./assets/images/puzzle.png";
import GirlGym from "./assets/images/Girl4.png";
import {SignUpForm} from "../SignUpForm";
import {
  BackGroundTopDesktop,
  BackGroundTopMob,
  EllipseLeft,
  EllipseLeftMob,
  EllipseRight,
  EllipseRightMob,
} from "../BasicPageComponent/styles";
import Ellips1 from "../Layout/assets/image/Elips1.png";
import Ellips2 from "../Layout/assets/image/Ellipse2.png";
import Ellipse3 from "../Layout/assets/image/Ellipse3.png";
import Ellipse4 from "../Layout/assets/image/Ellipse4.png";
import Ellipse5 from "../Layout/assets/image/Ellipse5.png";
import BGTop from "../Layout/assets/image/bgTop.png";
import Ellipse152 from "../Layout/assets/image/Ellipse152G.png";
import Ellipse154 from "../Layout/assets/image/Ellipse154B.png";
import Ellipse208 from "../Layout/assets/image/Ellipse208G.png";
import BGTopMob from "../Layout/assets/image/bgTopMob.png";

export const PartnersPage: React.FC = () => {
  return (
    <>
      <Seo description={""} image={""} title={"Ventrickle"} />
      <BackGroundTopDesktop src={BGTop} />
      <BackGroundTopMob src={BGTopMob} />
      <EllipseLeft src={Ellips1} theme={{top: "30px", left: "145px"}} />
      <EllipseRight src={Ellips2} theme={{top: "400px", right: "574px"}} />
      <EllipseRight src={Ellipse3} theme={{top: "814px", right: "13px"}} />
      <EllipseLeft src={Ellipse4} theme={{top: "1814px", left: "145px"}} />
      <EllipseRight src={Ellipse5} theme={{top: "3424px", left: "13px"}} />
      <EllipseLeftMob src={Ellipse152} theme={{top: "30px", left: "30px"}} />
      <EllipseRightMob src={Ellipse154} theme={{top: "463px", right: "3px"}} />
      <EllipseLeftMob src={Ellipse208} theme={{top: "910px", left: "0"}} />
      <EllipseRightMob src={Ellipse208} theme={{top: "1170px", right: "0"}} />
      <EllipseLeftMob src={Ellipse208} theme={{top: "1670px", left: "0"}} />
      <EllipseRightMob src={Ellipse208} theme={{top: "2170px", right: "0"}} />
      <EllipseLeftMob src={Ellipse208} theme={{top: "2700px", left: "0"}} />
      <EllipseRightMob src={Ellipse208} theme={{top: "3100px", right: "0"}} />
      <MainContainer>
        <TopBannerWrapper>
          <TopBannerLeftSideWrapper>
            <FadeUp animatePreScroll={true}>
              <TopBannerTitle>Grow your business.</TopBannerTitle>
              <SimpleTextBlock theme={{marginBottom: "24px", sizeMob: 25, lineHeightMob: 30, widthMob: "90%"}}>
                Optimise your reach in an increasingly health-conscious market
              </SimpleTextBlock>
              <TopLine />
            </FadeUp>
            <Link href={"mailto:info@ventrickle.com?subject=subject from Partners Page"}>
              <SignUpButton type="button" value="Get in Touch" />
            </Link>
          </TopBannerLeftSideWrapper>
          <FadeRight animatePreScroll={true}>
            <TopImgWrapper>
              <TopImg src={PartnerOne} />
              <TopImgBackground />
            </TopImgWrapper>
          </FadeRight>
        </TopBannerWrapper>
        <SectionTitle
          title={"Partners"}
          sectionMaxWidth={"550px"}
          subtitle={["The climb towards better health is best done with all-star support."]}
          alignDesktopSection={"center"}
          marginBottomDesktop={"66px"}
        />
        <SimpleSectionWrapper>
          <FadeLeft>
            <MainImgWrapper>
              <MainImg src={Puzzle} alt={"Men"} />
              <MainImgBackground />
            </MainImgWrapper>
          </FadeLeft>
          <TextWrapper theme={{mobWidth: "90%", alignItems: "flex-start"}}>
            <SectionTitle
              marginBottomDesktop={"32px"}
              title="Partner with Ventrickle"
              blockPosition={"flex-start"}
              titleMaxWidthMob={"100%"}
              desktopSubFontSize={"30px"}
              alignMob={"left"}
              line={false}
            />
            <SimpleTextBlock
              theme={{marginBottom: "20px", widthMob: "100%", sizeMob: 20, weight: "light", lineHeightMob: 22}}>
              We firmly believe that the fight against preventing cardiovascular disease and metabolic syndrome has to
              be done with as much flexibility as possible.
            </SimpleTextBlock>
            <SimpleTextBlock
              theme={{marginBottom: "0px", widthMob: "100%", sizeMob: 20, weight: "light", lineHeightMob: 22}}>
              We need to give clients and customers choice – and by presenting your business as one that is focused on
              health, while enjoying life is a strategy we know is proven to work from the scientific data.
            </SimpleTextBlock>
          </TextWrapper>
        </SimpleSectionWrapper>
        <SimpleSectionWrapper theme={{revert: true}}>
          <SecondSectionLeftSideWrapper>
            <SectionTitle
              title="What we offer as a Ventrickle partner"
              line={false}
              blockPosition={"flex-start"}
              desktopSubFontSize={"30px"}
              titlePosition={"left"}
              titleMaxWidthMob={"100%"}
              containMobWidth={"100%"}
              alignMob={"left"}
            />
            <List terms={ThirdTermsList} />
          </SecondSectionLeftSideWrapper>
          <FadeRight>
            <LongImgWrapper>
              <LongImg src={MenPlus} />
              <LongImgBackground />
            </LongImgWrapper>
          </FadeRight>
        </SimpleSectionWrapper>
        <SimpleSectionWrapper>
          <FadeLeft>
            <MainImgWrapper>
              <MainImg src={GirlGym} alt={"Men"} />
              <MainImgBackground />
            </MainImgWrapper>
          </FadeLeft>
          <SecondSectionLeftSideWrapper>
            <SectionTitle
              marginBottomDesktop={"32px"}
              title="And the best part?"
              blockPosition={"flex-start"}
              alignMob={"flex-start"}
              containMobWidth={"100%"}
              alignItems={"flex-start"}
              titleMaxWidthMob={"100%"}
              desktopSubFontSize={"30px"}
              line={false}
            />
            <List terms={FourTermsList} />
            <Link href={"mailto:info@ventrickle.com?subject=subject from Partners Page"}>
              <PartnerButton type={"button"} value={"Partner with Ventrickle"} />
            </Link>
          </SecondSectionLeftSideWrapper>
        </SimpleSectionWrapper>
        <SectionTitle title={"Get In Touch"} marginBottomDesktop={"47px"} />
        <FadeIn>
          <SignUpForm
            text={
              "We believe in long term partnerships and in performance driven collaboration. We'd love to work with you. Reach out to us, anytime, and we'll help develop solutions designed for the health-conscious individual In mind."
            }
            link={true}
            linkValue={"mailto:info@ventrickle.com?subject=subject from Partners Page"}
          />
        </FadeIn>
      </MainContainer>
    </>
  );
};
