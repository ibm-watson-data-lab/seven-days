// Compose SSL cert
const config = require('./config.js');

// RethinkDB Driver
const r = require('rethinkdb');

// some helper modules
const _ = require('underscore');
const argv = require('optimist').argv;

// seed data
const row = _.shuffle(require('./seed_data.json'))[0];

// connect to the DB
r.connect(config.connection, function(err, conn) {
    
  if(err) throw err;
  
  // Seed our table with some data
  r.db('issues').table("issues").insert(row).run(conn, function(err, data) {

    if (err) throw err;

    console.log(row);

    conn.close();

  });

});