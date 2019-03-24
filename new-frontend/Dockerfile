FROM node:8-alpine

WORKDIR /app

COPY src src
COPY public public
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY tsconfig.prod.json tsconfig.prod.json
COPY tslint.json tslint.json
COPY .env.production .env.production

RUN yarn
RUN yarn build

FROM nginx:alpine

COPY --from=0 /app/build /usr/share/nginx/html
