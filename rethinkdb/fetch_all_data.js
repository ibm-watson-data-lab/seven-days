// Compose SSL cert
const config = require('./config.js');

// RethinkDB Driver
const r = require('rethinkdb');

// seed data
const seed = require('./seed_data.json');

// helper function to format the output
const format = require('./format_issue.js').output;

// async
const async = require('async');

// connect to the DB
r.connect(config.connection, function(err, conn) {
    
  if(err) throw err;
  
  var actions = {

    current: function(callback) {

      // Get every issue
      r.db('issues').table("issues").run(conn, function(err, cursor) {

        if (err) throw err;

        cursor.toArray(function(err, data) {

          format(data);

          return callback();

        })

      });

    }

  }

  async.series(actions, function() {

    // Get every new issue
    r.db('issues').table("issues").changes().run(conn, function(err, cursor) {

      if (err) throw err;

      cursor.each(function(err, data) {

        format(data.new_val);

      })

    });

  });     

});