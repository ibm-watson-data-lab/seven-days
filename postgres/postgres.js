const pg = require('pg');
const conString = "postgres://admin:DBEIQOCFEBUBQYFI@aws-us-east-1-portal.17.dblayer.com:11610/bookstore";

// create connection
pg.connect(conString, function(err, client, done) {
  
  // handle the error
  if(err) throw err;
  
  // do the query!
  client.query('SELECT * from books', function(err, result) {

    // handle error
    if(err) throw err;

    // log out the results
    console.log(result.rows);

    // close connection
    client.end();
    
  });

});