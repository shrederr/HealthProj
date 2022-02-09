import React from "react";
import {Container, SubTitle, Title, Line} from "./styles";

interface IProps {
  title: string;
  subtitle?: string[];
  side?: "left" | "right";
  mobWidth?: number;
  subTitlePosition?: string;
  desktopSubFontSize?: string;
  blockPosition?: string;
  marginBottomDesktop?: string;
  marginBottomMob?: string;
  titlePosition?: string;
  sectionMaxWidth?: string;
  alignDesktopSection?: string;
  line?: boolean;
  mobFontSize?: string;
  lineHeightMobSub?: string;
  alignMob?: string;
  titleMaxWidthMob?: string;
  containMobWidth?: string;
  alignItems?: string;
}

export const SectionTitle: React.FC<IProps> = ({
  title,
  subtitle,
  line = true,
  desktopSubFontSize,
  mobWidth,
  subTitlePosition,
  blockPosition,
  marginBottomDesktop = "0px",
  titlePosition = "center",
  sectionMaxWidth = "auto",
  alignMob = "center",
  alignDesktopSection = "center",
  mobFontSize,
  marginBottomMob,
  containMobWidth = "90%",
  alignItems,
  lineHeightMobSub,
  titleMaxWidthMob,
}) => {
  return (
    <Container
      theme={{
        position: blockPosition ? blockPosition : "center",
        marginBottomDesktop: marginBottomDesktop,
        marginBottomMob: marginBottomMob,
        containMobWidth: containMobWidth,
        alignItems: alignItems,
      }}>
      <Title theme={{titlePosition, alignMob: alignMob, titleMaxWidthMob: titleMaxWidthMob}}>{title}</Title>
      {line ? <Line /> : null}
      {subtitle
        ? subtitle.map((el, index) => (
            <SubTitle
              key={index}
              theme={{
                width: mobWidth,
                textAlign: subTitlePosition,
                alignDesktopSection: alignDesktopSection,
                maxWidth: sectionMaxWidth,
                mobFontSize: mobFontSize,
                desktopSize: desktopSubFontSize,
                position: blockPosition,
                lineHeightMobSub: lineHeightMobSub,
              }}>
              {el}
            </SubTitle>
          ))
        : null}
    </Container>
  );
};
