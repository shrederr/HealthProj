import styled from "styled-components";
import {Text} from "../Typography/Text";
import {Link} from "react-router-dom";

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  justify-content: center;
  height: 164px;
  background-color: ${(props) => (props.theme.active ? "#0d1017" : "none")};
  @media (max-width: 500px) {
    height: 77px;
  }
`;

export const NonStyledLink = styled.a`
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  color: #ffffff;
  text-align: center;
`;

export const HeaderInner = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  @media (max-width: 1600px) {
    width: 75%;
  }
  height: 100%;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const LogoDesktop = styled.img`
  width: 320px;
  cursor: pointer;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const LogoMob = styled.img`
  display: none;
  width: 232px;
  @media (max-width: 600px) {
    display: block;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Menu = styled(Text).attrs({
  sizeDesktop: 18,
  color: "#FFFFFF",
  lineHeightDesktop: 40,
})`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 425px;
  flex-direction: row;
`;

export const Button = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  background: #46d6c8;
  font-family: Montserrat, sans-serif;
  border-radius: 7px;
  font-style: normal;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 29px;
  text-align: center;
  width: 124px;
  border: none;
  height: 38px;
`;

export const MenuItemFooter = styled(Link)`
  text-decoration: none;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 40px;
  /* or 222% */

  text-transform: capitalize;

  color: #ffffff;
  list-style: none;
`;

export const MenuItem = styled.div`
  text-decoration: none;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  cursor: pointer;
  margin-right: 28px;
  margin-left: 28px;
  font-weight: 500;
  font-size: 18px;
  line-height: 40px;
  /* or 222% */
  @media (max-width: 1200px) {
    margin-right: 0;
    margin-left: 0;
  }
  text-transform: capitalize;

  color: #ffffff;
  list-style: none;
`;

export const FooterWrapper = styled.footer.attrs({className: "page-footer"})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 365px;
  background: linear-gradient(89.71deg, rgba(227, 227, 227, 0.15) 0.3%, rgba(213, 213, 213, 0.033) 99.79%);
  box-shadow: inset 3px 2px 7px rgba(243, 243, 243, 0.05);
  overflow: hidden;
`;

export const FooterInner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
  box-sizing: border-box;
  height: 100%;
  min-height: 160px;
  margin-bottom: 62px;
  @media (max-width: 1600px) {
    width: 75%;
  }
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 43px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 232px;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 425px) {
    margin-bottom: 51px;
  }
`;

export const LinkSocial = styled.a`
  width: 32px;
  height: 32px;
`;

export const Logo = styled.img`
  width: 232px;
  margin-bottom: 46px;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 425px) {
    display: none;
  }
`;

export const ContactInfo = styled(Text).attrs({
  sizeDesktop: 18,
  lineHeightDesktop: 26,
  weight: "regular",
  color: "#FFFFFF",
})`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  margin-top: 6px;
  max-width: 400px;
  height: 73px;
  @media (max-width: 425px) {
    height: 100%;
    width: 100%;
    margin-top: 0;
    align-content: center;
    justify-content: center;
    > div {
      text-align: center;
    }
    > div:nth-child(2) {
      font-size: 24px;
      line-height: 40px;
      margin-bottom: 20px;
    }
    > div:nth-child(1) {
      display: none;
    }
  }
`;

export const CopyRightWrapper = styled(Text).attrs({
  sizeDesktop: 18,
  lineHeightDesktop: 40,
  color: "#FFFFFF",
})`
  display: flex;
  flex-flow: row wrap;
  width: 70%;
  margin-bottom: 22px;
  @media (max-width: 1600px) {
    width: 75%;
  }
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 425px) {
    width: 75%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const IconWrapper = styled.svg`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const BlurText = styled.div`
  color: #46d6c8;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  list-style: none;
  cursor: pointer;
`;

export const BurgerButton = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  width: 45px;
  height: 45px;
  box-sizing: border-box;
  cursor: pointer;
  margin-left: 20px;
  @media (max-width: 500px) {
    display: flex;
  }
`;

export const Line = styled.div<{active: boolean}>`
  display: flex;
  width: 25px;
  height: ${(props) => (props.active ? "0px" : "2px")};
  background: #ffffff;

  &:before {
    content: "";
    width: 25px;
    height: 2px;
    background: ${(props) => (props.active ? "#4275D1" : "#ffffff")};
    transform: ${(props) => (props.active ? "rotate(45deg)" : "translateY(9px)")};
    margin-right: -25px;
    transition: 0.3s;
  }

  &:after {
    content: "";
    width: 25px;
    height: 2px;
    background: ${(props) => (props.active ? "#4275D1" : "#ffffff")};
    transform: ${(props) => (props.active ? "rotate(-45deg)" : "translateY(-9px)")};
    transition: 0.3s;
  }
`;

export const MenuDropDown = styled.ul<{display: boolean}>`
  display: ${({display}) => (display ? `flex` : `none`)};
  flex-direction: column;
  z-index: 10;
  align-items: center;
  list-style-type: none;
  position: absolute;
  width: auto;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 90px;
  left: 0;
  top: 77px;
  padding: 0;
  background: #0d1017;
  margin: 0;
  @media (max-width: 460px) {
    width: 100%;
  }

  li {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #1b2630;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    :hover {
      background: #1b2630;
      > div {
        color: #46d6c8;
      }
    }
    > div {
      height: 100%;
      width: 100%;
      padding: 20px 0;
      padding-left: 28px;
    }
  }

  li:last-child {
    border-bottom: none;
  }
`;
