FROM node:14.15.3-alpine3.11 AS BUILD
ENV NODE_ENV=development
WORKDIR /usr/src

COPY package.json /usr/src/package.json
COPY yarn.lock /usr/src/yarn.lock
RUN yarn

COPY tsconfig.json /usr/src/tsconfig.json
COPY webpack.server.js /usr/src/webpack.server.js
COPY .babelrc.json /usr/src/.babelrc.json
COPY .eslintrc.js /usr/src/.eslintrc.js
COPY .prettierrc /usr/src/.prettierrc
COPY .env /usr/src/.env
COPY public /usr/src/public
COPY src /usr/src/src
ENV NODE_ENV=production
RUN yarn run build
RUN yarn run server:build

FROM node:14.15.3-alpine3.11
ARG NODE_ENV=production
ENV NODE_ENV "$NODE_ENV"

# Default server configurations
ENV PORT 80
EXPOSE 80

RUN apk add bash

WORKDIR /
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn

WORKDIR /server
COPY .env ./.env
COPY env.sh ./env.sh
RUN chmod +x ./env.sh
COPY --from=BUILD /usr/src/build build
COPY --from=BUILD /usr/src/server-build server-build

CMD ./env.sh && cat env-config.js && cp env-config.js ./build/ && node /server/server-build/index.js
