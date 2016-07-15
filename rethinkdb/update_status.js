// Compose SSL cert
const config = require('./config.js');

// RethinkDB Driver
const r = require('rethinkdb');

// argv options
const argv = require('optimist').argv;

var status = argv.status || null;
var id = argv.id || null;

if (status === null || id === null) {
  console.log("Please provide a valid --status and --id");
  process.exit(0);
}

// connect to the DB
r.connect(config.connection, function(err, conn) {
    
  if(err) throw err;

  // Get every issue
  r.db('issues').table("issues").get(id).update( { status: status } ).run(conn, function(err, cursor) {

    if (err) throw err;

    console.log(id + " status updated to " + status);

    conn.close();

  });

});