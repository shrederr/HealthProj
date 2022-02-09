import React from "react";
import Routes from "./Routes";
import {AppLayout} from "./components/Layout";

function App() {
  return (
    <>
      <AppLayout>
        <Routes />
      </AppLayout>
    </>
  );
}

export default App;
