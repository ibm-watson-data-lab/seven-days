# Day 1 - RethinkDB
First up, we tackled [RethinkDB](http://www.rethinkdb.com)! Follow along in [our tutorial](http://developer.ibm.com/clouddataservices/2016/07/28/7-databases-7-days-rethinkdb/).

## Setup and configuration

The sample code for RethinkDB is all Node.JS based. It was created in Node `4.4.5` but there is nothing too extreme going on, so it should work fine on most other versions.

### Dependencies
To install all the necessary dependencies, do `npm install` from within the `/rethinkdb` directory.

### Configuration
To make our lives simpler, we created a single config file that we could use when making our connections - `config.js`. You'll see this referenced in all of our code samples.

Before going any further, make sure that you have replaced all of our placeholders with your RethinkDB details.

#### Secure Connection
We used a [Compose hosted Rethinkdb](http://www.compose.com/rethinkdb) to build our samples, so this means we were required to use SSH. If you are doing the same, make sure that on `line 3` of the `config.js` is pointing to your certificate.

```javascript
const cert = new Buffer(fs.readFileSync('./cert', "utf8"));
```

If you name your certificate file `cert` and drop it into the `/rethinkdb` directory, then it should work as is.

If you are not using Compose or SSH, then you can comment out this line. You will also need to remove reference to the `ssl` property of the `connection` object.

## Running the code samples
The code samples come in the form of individual scripts that demonstrate how to do particular things in RethinkDB. These need to be ran in some kind of order - at least at first.

1. `create_db.js`  Create a new database
2. `create_table.js` Create a new table in this database
3. `create_data.js` Populate this table with data from `seed_data.json`
4. `create_indexes.js` Create some indexes for more advanced queries

After this, you can run any of the other samples to get to grips with RethinkDB in the same way that we did.

Please leave us any feedback in the [issues](https://github.com/ibm-cds-labs/seven-days/issues) section of this repository!
