FROM node:latest
RUN  npm install -g nodemon
WORKDIR /usr/src/app/server/
COPY app/server/package.json .
RUN npm install
COPY app/server/. . 
VOLUME /usr/src/app/server/
EXPOSE 3000
CMD ["node", "server.js"]