import React from "react";
import {PrivacyPage} from "../../components/PrivacyPage";
import {Redirect} from "react-router-dom";

export const PrivacyPageContainer: React.FC = () => {
  return (
    <>
      <Redirect to={"/"} />
      <PrivacyPage />
    </>
  );
};
