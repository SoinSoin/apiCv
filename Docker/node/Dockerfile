FROM node:latest
RUN npm install -g nodemon
WORKDIR /usr/src/app/
COPY app/package.json .
RUN npm install
COPY app/. . 
VOLUME /usr/src/app/
EXPOSE 3000
CMD ["node", "server.js"]
