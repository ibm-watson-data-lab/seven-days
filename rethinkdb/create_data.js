// Compose SSL cert
const config = require('./config.js');

// RethinkDB Driver
const r = require('rethinkdb');

// seed data
const seed = require('./seed_data.json');

// connect to the DB
r.connect(config.connection, function(err, conn) {
    
  if(err) throw err;
  
  // Seed our table with some data
  r.db('issues').table("issues").insert(seed).run(conn, function(err, data) {

    if (err) throw err;

    console.log("Seed data added", data);

    conn.close();

  });

});