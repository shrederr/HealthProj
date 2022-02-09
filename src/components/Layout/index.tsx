import React from "react";
import {TopAppBarContainer} from "../../container/Layout/TopAppBar";
import {Layout} from "./Layout";
import {Footer} from "./Footer";

export const AppLayout: React.FC = ({children}) => {
  const topAppBar = <TopAppBarContainer />;
  const footer = <Footer />;

  return (
    <Layout topAppBar={topAppBar} footer={footer}>
      {children}
    </Layout>
  );
};
