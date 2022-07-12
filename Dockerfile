FROM node:1-alpine as build
WORKDIR /app
COPY package*.json . ./
RUN npm install -g ionic
RUN npm install
RUN ionic build --prod