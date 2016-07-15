// Compose SSL cert
const config = require('./config.js');

// RethinkDB Driver
const r = require('rethinkdb');

// seed data
const seed = require('./seed_data.json');

// helper function to format the output
const format = require('./format_issue.js').output;

// argv options
const argv = require('optimist').argv;

// async
const async = require('async');

var status = argv.status || "open";

// connect to the DB
r.connect(config.connection, function(err, conn) {
    
  if(err) throw err;
  
  var actions = {

    current: function(callback) {

      // Get every issue
      r.db('issues').table("issues").getAll(status, { index: "status" }).run(conn, function(err, cursor) {

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
    r.db('issues').table("issues").getAll(status, { index: "status"}).changes().run(conn, function(err, cursor) {

      if (err) throw err;

      cursor.each(function(err, data) {

        // we only care about changes where the new status is our status
        if (!_.isNull(data.new_val)) {
          format(data.new_val);
        }

      })

    });

  });
  
});