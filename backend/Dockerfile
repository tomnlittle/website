FROM node:11-alpine

WORKDIR /app

COPY src src
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY tslint.json tslint.json
COPY journals journals

RUN yarn
RUN yarn build

CMD yarn start
