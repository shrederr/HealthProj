import React, {useEffect, useState} from "react";
import {
  FooterWrapper,
  FooterInner,
  Logo,
  LeftSide,
  SocialWrapper,
  //LinkSocial,
  NavigationWrapper,
  MenuItemFooter,
  ContactInfo,
  CopyRightWrapper,
  BlurText,
  LogoLink,
  NonStyledLink,
} from "./styles";
import LogoM from "./assets/image/logoMob.svg";
//import {Icons} from "./Icons";
import {route} from "../../constants/route";
import {ScrollToTopOnMount} from "../../helpers/routeHelper";

const Navigations = [
  {
    title: "Our Features",
    path: route.Main,
  },
  {
    title: "For Partners",
    path: route.Partners,
  },
];
const Contacts = [
  {text: "For queries:", link: ""},
  {text: "info@ventrickle.com", link: "mailto:info@ventrickle.com"},
];

export const Footer: React.FC = () => {
  const [redirectHook, setRedirect] = useState<boolean>(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [redirectHook]);
  const handlerScrollToTop = () => {
    setRedirect(!redirectHook);
  };
  return (
    <FooterWrapper>
      <FooterInner>
        <LeftSide>
          <LogoLink to={""} onClick={handlerScrollToTop}>
            <Logo src={LogoM} />
          </LogoLink>
          <SocialWrapper>
            {
              //{Icons.map((it, idx) => (
              //  <LinkSocial key={idx} target={"_blank"} href={it.link} rel="noreferrer">
              //    <it.icon />
              //  </LinkSocial>
              //))}
            }
          </SocialWrapper>
        </LeftSide>
        <NavigationWrapper>
          {Navigations.map((item, index) => (
            <ScrollToTopOnMount key={index}>
              <MenuItemFooter to={item.path}>{item.title}</MenuItemFooter>
            </ScrollToTopOnMount>
          ))}
        </NavigationWrapper>
        <ContactInfo>
          {Contacts.map((item, index) =>
            item.link.length > 0 ? (
              <NonStyledLink href={item.link} key={index}>
                {item.text}
              </NonStyledLink>
            ) : (
              <div key={index}>{item.text}</div>
            ),
          )}
        </ContactInfo>
      </FooterInner>
      <CopyRightWrapper>
        Copyright 2021 © <BlurText>Ventrickle.</BlurText> All Rights Reserved.
      </CopyRightWrapper>
    </FooterWrapper>
  );
};
