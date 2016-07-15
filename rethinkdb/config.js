// Compose SSL cert
const fs = require('fs');
const cert = new Buffer(fs.readFileSync('./cert', "utf8"));

const connection = {
  host: "<RethinkDB Hostname>",
  port: <port>,
  user: "<username>",
  password: "<password>",
  ssl: {
    ca: cert
  }
}

module.exports = {
  connection: connection
}