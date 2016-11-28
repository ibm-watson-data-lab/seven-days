// Load in the ETCD module
var Etcd = require('node-etcd');

// SSL cert
var fs = require('fs');
var options = {
  ca: fs.readFileSync('cert')
};

// Connect!
var etcd = new Etcd("https://root:NIFCXDROLSQFLHFJ@bluemix-sandbox-dal-9-portal.4.dblayer.com:18929", options);

// Export
module.exports = etcd;