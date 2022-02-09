import React, {useRef} from "react";
import {
  CardsWrapper,
  Card,
  CardChapterWrapper,
  CardChapterText,
  CardChapter,
  CardTitle,
  CardImg,
  Arrow,
  DotWrapper,
  DotsWrapper,
  CardsWrapperMob,
} from "./stylex";
import Slider from "react-slick";
// eslint-disable-next-line
// @ts-ignore
import loadable from "@loadable/component";

const scrollLock = loadable(() => import("body-scroll-lock"), {ssr: false});
const {disableBodyScroll, enableBodyScroll} = scrollLock || {};
import ArrowImg from "./assets/icons/arrow.png";
import {CardsData} from "./mockData";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  pauseOnHover: true,
  autoplay: true,
  autoplaySpeed: 3500,
  // eslint-disable-next-line react/display-name
  appendDots: (dots: React.ReactNode) => <DotsWrapper>{dots}</DotsWrapper>,
  // eslint-disable-next-line react/display-name
  customPaging: (i: number) => (
    <DotWrapper key={"dot" + i}>
      <svg height="14" width="14" fill={"#FFFFFF"}>
        <circle cx="7" cy="7" r="6" strokeWidth="1" />
      </svg>
    </DotWrapper>
  ),
};

export const CardsSection: React.FC = () => {
  const slider = useRef(null);

  const releaseBodyScroll = (): void => {
    // eslint-disable-next-line
    typeof enableBodyScroll === "function" && enableBodyScroll((slider as any).current);
  };

  const lockVerticalScrollWhenHorizontalSwiping = (direction: "vertical" | "right" | "left"): void => {
    const isHorizontal = direction !== "vertical";
    if (isHorizontal) {
      // eslint-disable-next-line
      typeof disableBodyScroll === "function" && disableBodyScroll((slider as any).current);
      const cb = () => {
        releaseBodyScroll();
        removeEventListener("wheel", cb);
      };
      addEventListener("wheel", cb);
    }
  };
  return (
    <>
      <CardsWrapperMob onTouchEnd={releaseBodyScroll}>
        <Slider {...settings} swipeEvent={lockVerticalScrollWhenHorizontalSwiping}>
          {CardsData.map((el, ind) => (
            <Card key={ind}>
              <CardImg src={el.img} />
              <CardTitle>{el.title}</CardTitle>
              <CardChapterWrapper>
                {el.items.map((item, index) => (
                  <CardChapter key={index}>
                    <Arrow src={ArrowImg} />
                    <CardChapterText>{item}</CardChapterText>
                  </CardChapter>
                ))}
              </CardChapterWrapper>
            </Card>
          ))}
        </Slider>
      </CardsWrapperMob>
      <CardsWrapper onTouchEnd={releaseBodyScroll}>
        {CardsData.map((el, ind) => (
          <Card key={ind}>
            <CardImg src={el.img} />
            <CardTitle>{el.title}</CardTitle>
            <CardChapterWrapper>
              {el.items.map((item, index) => (
                <CardChapter key={index}>
                  <Arrow src={ArrowImg} />
                  <CardChapterText>{item}</CardChapterText>
                </CardChapter>
              ))}
            </CardChapterWrapper>
          </Card>
        ))}
      </CardsWrapper>
    </>
  );
};
