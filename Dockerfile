FROM node:13-alpine as build
RUN npm install -g ionic
RUN npm install
RUN ionic build android
