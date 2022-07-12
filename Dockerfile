FROM node:13-alpine as build
WORKDIR /app
COPY package*.json . ./
RUN npm install -g ionic
RUN npm install
RUN ionic build android