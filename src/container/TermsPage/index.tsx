import React from "react";
import {TermsPage} from "../../components/TermsPage";
import {Redirect} from "react-router-dom";

export const TermsPageContainer: React.FC = () => {
  return (
    <>
      <Redirect to={"/"} />
      <TermsPage />
    </>
  );
};
