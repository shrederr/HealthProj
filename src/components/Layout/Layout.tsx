import React from "react";
import {BasicContainer} from "../BasicPageComponent/styles";

type LayoutProps = {
  topAppBar: React.ReactNode;
  footer: React.ReactNode;
  className?: string;
};

export const Layout: React.FC<LayoutProps> = ({children, topAppBar, footer}) => {
  return (
    <BasicContainer>
      {topAppBar}
      {children}
      {footer}
    </BasicContainer>
  );
};
