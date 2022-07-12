FROM node:16-alpine as build
WORKDIR /app
COPY package*.json . ./
RUN npm install -g ionic
RUN npm install
RUN ionic build --prod