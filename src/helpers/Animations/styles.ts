import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
//import "./styles.css";

export const FadeUp = styled(ScrollAnimation).attrs((props) => ({
  animateIn: "fabeUp",
  animateOnce: true,
  animatePreScroll: props.animatePreScroll ? props.animatePreScroll : false,
  initiallyVisible: typeof window === "undefined",
}))`
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FadeRight = styled(ScrollAnimation).attrs((props) => ({
  animateIn: "fabeRight",
  animateOnce: true,
  animatePreScroll: props.animatePreScroll ? props.animatePreScroll : false,
  initiallyVisible: typeof window === "undefined",
}))`
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
  }
`;

export const FadeLeft = styled(ScrollAnimation).attrs({
  animateIn: "fabeLeft",
  animateOnce: true,
  animatePreScroll: false,
  initiallyVisible: typeof window === "undefined",
})`
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
  }
`;

export const FadeIn = styled(ScrollAnimation).attrs({
  animateIn: "animate__fadeIn",
  animateOnce: true,
  initiallyVisible: typeof window === "undefined",
  animatePreScroll: false,
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
