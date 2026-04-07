FROM node:22-alpine

LABEL maintainer="Some dev"

RUN mkdir /app
WORKDIR /app

COPY backend/package.json ./
RUN npm i --production
RUN npm i -g @nestjs/cli