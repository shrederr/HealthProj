import React from "react";
import {Route, Switch} from "react-router-dom";
import {HomePageContainer} from "./container/HomePage";
import {TermsPageContainer} from "./container/TermsPage";
import {PartnersPageContainer} from "./container/PartnersPage";
import {PrivacyPageContainer} from "./container/PrivacyPage";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route key="home" path={`/`} exact component={HomePageContainer} />
      <Route key="terms" path={`/terms`} exact component={TermsPageContainer} />
      <Route key="partners" path={`/partners`} exact component={PartnersPageContainer} />
      <Route key="privacy" path={`/privacy`} exact component={PrivacyPageContainer} />
    </Switch>
  );
};

export default Routes;
