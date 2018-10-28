FROM node:latest
RUN  npm install -g @vue/cli && npm install -g @vue/cli-init
WORKDIR /usr/src/app/client/
COPY app/client/package.json .
RUN npm install
COPY app/client/. . 
RUN npm run build
VOLUME /usr/src/app/client/
EXPOSE 8080