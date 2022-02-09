import React from "react";

import {ApolloClient, ApolloProvider, InMemoryCache, from, NormalizedCacheObject} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import {GraphQLError} from "graphql";

import {createUploadLink} from "apollo-upload-client";

declare global {
  interface Window {
    __APOLLO_STATE__: NormalizedCacheObject;
  }
}

const httpLink = createUploadLink({});

const errorLink = onError(({networkError, graphQLErrors}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({message, locations, path}, index) => {
      console.log(`Message: ${message}, Location: ${locations}, Path: ${path}`);
      const err = graphQLErrors[index];

      if (err instanceof GraphQLError) {
        err.message = message.replace("GraphQL error: ", "");
      }
    });
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__ || {}),
  link: from([errorLink, httpLink]),
  defaultOptions: {
    watchQuery: {
      errorPolicy: "ignore",
    },
  },
  ssrForceFetchDelay: 100,
});

const Provider: React.FC = ({children}) => <ApolloProvider client={client}>{children}</ApolloProvider>;

export default Provider;
