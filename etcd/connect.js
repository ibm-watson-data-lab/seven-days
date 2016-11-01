// Load in the ETCD module
var Etcd = require('node-etcd');

// SSL cert
var fs = require('fs');
var options = {
  ca: fs.readFileSync('cert')
};

// Connect!
var etcd = new Etcd("https://root:DJEITTHMFEYYAWZD@sl-eu-lon-2-portal.1.dblayer.com:10276", options);

// Export
module.exports = etcd;