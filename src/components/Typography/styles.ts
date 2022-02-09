import {TextBaseProps, BaseComponentProps} from "./types";
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const fontFamily = () => {
  return "Montserrat, sans-serif";
};

export const fontSizeDesktop = ({sizeDesktop}: BaseComponentProps) => {
  if (sizeDesktop) {
    return `${sizeDesktop}px`;
  }
};

const fontSizeMobile = ({sizeMob, sizeDesktop}: TextBaseProps) => {
  if (sizeMob) {
    return `${sizeMob ? `${sizeMob}px` : `${sizeDesktop ? `${sizeDesktop}px` : "18px"}`}`;
  }
  //switch (typeComponent) {
  //  case "h1":
  //    return "56px";
  //  case "h2":
  //    return "40px";
  //  case "h3":
  //    return "32px";
  //  case "h4":
  //    return "32px";
  //  case "body1":
  //    return "18px";
  //  case "body2":
  //    return "18px";
  //  default:
  //    return `14px`;
  //}
};

export const fontWeight = ({weight}: BaseComponentProps) => {
  switch (weight) {
    case "bold":
      return 700;
    case "medium":
      return 500;
    case "regular":
      return 400;
    case "light":
      return 300;
    case "semi-bold":
      return 600;
    default:
      return 500;
  }
};

const fontCase = ({case: _case}: TextBaseProps) => {
  return _case ? {textTransform: _case} : {};
};
const lineHeightDesktop = ({lineHeightDesktop}: TextBaseProps) => {
  if (lineHeightDesktop) {
    return `${lineHeightDesktop ? `${lineHeightDesktop}px` : "24px"}`;
  }
};

const lineHeightMob = ({lineHeightMob, lineHeightDesktop}: TextBaseProps) => {
  if (lineHeightMob) {
    return `${lineHeightMob ? `${lineHeightMob}px` : `${lineHeightDesktop ? `${lineHeightDesktop}px` : "24px"}`}`;
  }
};

const marginBottomDesktop = ({marginBottomDesktop}: TextBaseProps) => {
  if (marginBottomDesktop) {
    return `${marginBottomDesktop ? `${marginBottomDesktop}px` : "0"}`;
  }
};

const marginBottomMob = ({marginBottomMob}: TextBaseProps) => {
  if (marginBottomMob) {
    return `${marginBottomMob ? `${marginBottomMob}px` : "0"}`;
  }
};

const textDecoration = ({decoration}: TextBaseProps) => {
  return decoration ? decoration : "none";
};

const textAlign = ({textAlign}: TextBaseProps) => {
  if (textAlign) {
    return textAlign;
  }
  return "left";
};
const textColor = ({color}: TextBaseProps) => {
  if (color) {
    return `${color ? `${color}` : "#ffffff"}`;
  }
};

const letterSpacingDesktop = ({letterSpacingDesktop}: TextBaseProps) => {
  if (letterSpacingDesktop) {
    return `${letterSpacingDesktop ? `${letterSpacingDesktop}px` : "0"}`;
  }
};
const letterSpacingMob = ({letterSpacingMob}: TextBaseProps) => {
  if (letterSpacingMob) {
    return `${letterSpacingMob ? `${letterSpacingMob}px` : "0"}`;
  }
};

const fontStyle = ({fontStyle}: TextBaseProps) => {
  if (fontStyle) {
    return "italic";
  }
};
const textTransform = ({textTransform}: TextBaseProps) => {
  if (textTransform) {
    return textTransform;
  }
};
const styles = css`
  font-family: ${fontFamily};
  font-size: ${fontSizeDesktop};
  text-align: ${textAlign};
  font-weight: ${fontWeight};
  text-transform: ${textTransform};
  text-decoration: ${textDecoration};
  letter-spacing: ${letterSpacingDesktop};
  line-height: ${lineHeightDesktop};
  margin-bottom: ${marginBottomDesktop};
  font-style: ${fontStyle};
  color: ${textColor};
  @media (max-width: 500px) {
    font-size: ${fontSizeMobile};
    margin-bottom: ${marginBottomMob};
    line-height: ${lineHeightMob};
    letter-spacing: ${letterSpacingMob};
  }
  ${fontCase};
  white-space: break-spaces;
`;

export const StyledText = styled.div<TextBaseProps>`
  ${styles};
`;

export const StyledLink = styled(Link)<TextBaseProps>`
  ${styles};
`;

export const A = styled.a`
  text-decoration: underline;
  color: inherit;
  font-weight: bold;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: #e0dacd;
`;

export const StyledList = styled.ul<{unordered?: boolean}>`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  ${({unordered}) => unordered && ` columns: 120px 2;`};
`;

export const StyledListItem = styled.li`
  margin-bottom: 15px;
  padding-left: 28px;
  position: relative;
  list-style: none;
  box-sizing: border-box;

  & > div {
    line-height: 20px;
  }

  &::before {
    content: "";
    display: inline-block;
    height: 5px;
    width: 9px;
    border-left: 2px solid #ac9175;
    border-bottom: 2px solid #ac9175;
    transform: rotate(314deg);
    position: absolute;
    left: 0;
    top: 4px;
  }
`;

export const StyledImg = styled.img`
  margin: 20px 0;
  @media (max-width: 1200px) {
    margin: 140px 0 20px;
  }
`;
