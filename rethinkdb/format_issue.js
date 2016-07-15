const _ = require('underscore');

var output = function(rows) {

  // handle single objects
  if (!_.isArray(rows)) {
    rows = [rows];
  }

  rows.forEach(function(row) {

    console.log("================================");
    console.log(row.id);
    console.log(row.title);
    console.log("STATUS: " + row.status);


  })

}

module.exports = {
  output: output
}