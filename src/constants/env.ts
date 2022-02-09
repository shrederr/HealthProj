declare global {
  interface Window {
    _env_: {
      REACT_APP_SPACES: string | undefined;
      REACT_APP_ENVIRONMENTS: string | undefined;
      REACT_APP_GRAPHQL_HEADER: string | undefined;
      REACT_APP_SITE_URL: string | undefined;
    };
  }
}

export const GRAPHQL_HEADER =
  typeof window !== "undefined" && window._env_
    ? window._env_.REACT_APP_GRAPHQL_HEADER
    : process.env.REACT_APP_GRAPHQL_HEADER;

export const ENVIRONMENTS =
  typeof window !== "undefined" && window._env_
    ? window._env_.REACT_APP_ENVIRONMENTS
    : process.env.REACT_APP_ENVIRONMENTS;

export const SPACES =
  typeof window !== "undefined" && window._env_ ? window._env_.REACT_APP_SPACES : process.env.REACT_APP_SPACES;

export const SITE_URL =
  typeof window !== "undefined" && window._env_ ? window._env_.REACT_APP_SITE_URL : process.env.REACT_APP_SITE_URL;
