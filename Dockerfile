FROM android as build
RUN npm install -g ionic
RUN npm install
RUN ionic build android
COPY ./android
