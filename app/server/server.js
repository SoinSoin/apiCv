const https = require('https');
const http = require('http');
const app = require('./app');
const fs = require('fs')
const port = process.env.PORT || 3000;
const options = {
    key: fs.readFileSync('config/certificat/server-key.pem'),
    csr: fs.readFileSync('config/certificat/server-csr.pem'),
    cert: fs.readFileSync('config/certificat/server-cert.pem')
  };
  // const server = https.createServer(options, app);
  const server = http.createServer(options, app);
  server.listen(port);