// Compose SSL cert
const config = require('./config.js');

// async
const async = require('async');

// RethinkDB Driver
const r = require('rethinkdb');

// connect to the DB
r.connect(config.connection, function(err, conn) {
    
  if(err) throw err;
  
  var indexes = ["isActive", "status"];

  var actions = {};

  indexes.forEach(function(index) {

    actions[index] = function(callback) {

      // create our table
      r.db('issues').table("issues").indexCreate(index).run(conn, function(err, data) {

        return callback(null, (err ? err : data));

      });

    }

  });

  async.series(actions, function(err, results) {

    console.log(err, results);

    conn.close();

  });

});