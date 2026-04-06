FROM node:22-alpine

LABEL maintainer="Some dev"

RUN mkdir /app
WORKDIR /app

COPY package.json ./
RUN npm i --production

COPY dist/ ./dist