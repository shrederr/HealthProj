import path from "path";
import fs from "fs";
import React from "react";
import express from "express";
import cookieParser from "cookie-parser";
import {ServerStyleSheet} from "styled-components";
import {StaticRouter} from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

import {getDataFromTree} from "@apollo/client/react/ssr";
import App from "../App";
import Helmet from "react-helmet";

console.log(`START SERVER`);
const PORT = process.env.PORT || 8080;

const indexFile = path.resolve("./server-build/index.html");

const html = fs.readFileSync(indexFile, "utf8");

const app = express();

app.set("trust proxy", true);

app.use(express.static("build", {index: false}));

app.use(cookieParser());

app.get("*", async (req, res) => {
  console.log("URL: ", req.url);

  const client = new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
  });
  const sheet = new ServerStyleSheet();
  const context = {
    url: "",
  };

  let app;

  try {
    app = await getDataFromTree(
      sheet.collectStyles(
        <ApolloProvider client={client}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </ApolloProvider>,
      ),
    );
  } catch (e: any) {
    console.log(e?.message || "Error during rendering react app", e?.stack, "Rendering error");
    return res.end();
  }
  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    return res.end();
  }

  const helmet = Helmet.renderStatic();

  const styles = sheet.getStyleTags();
  const meta = `${helmet.meta.toString()} ${helmet.title.toString()} ${helmet.script.toString()}`;

  const doc = html.replace("</head>", `${meta} ${styles}</head>`).replace(
    '<div id="root"></div>',
    `<div id="root">${app}</div>
<script>window.__APOLLO_STATE__=${JSON.stringify(client.extract()).replace(/</g, "\\\u003c")};</script>`,
  );

  return res.send(doc);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
