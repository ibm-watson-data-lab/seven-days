// Compose SSL cert
const config = require('./config.js');

// RethinkDB Driver
const r = require('rethinkdb');

// connect to the DB
r.connect(config.connection, function(err, conn) {
    
  if(err) throw err;
  
  // create our table
  r.db('issues').tableCreate("issues").run(conn, function(err, data) {

    if (err) throw err;

    console.log("Table created", data);

    conn.close();

  });

});