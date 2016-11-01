// get our connection
const etcd = require('./connect.js');

// helper functions to parse the responses
const parseConfig = require('./parsing.js').parseConfig;
const changeEvent = require('./parsing.js').changeEvent;

// use optimist to read command line arguments
const argv = require('optimist').argv;

// define our service
const service = argv.service || null;
if (service === null) {
	console.error("Please provide a --service parameter");
	process.exit(0);
}

// define our service key
const serviceKey = "/config/"+service;

// get our config on wakeup
etcd.get(serviceKey, function(err, data) {

	// handle the error
	if (err) throw (err);

	// parse the initial config load using helper function
	var config = parseConfig(data);

	// log out what the config is
	console.log("========= CONFIG LOADED ==========");
	console.log(config);

	// watch for changes
	const changes = etcd.watcher(serviceKey, null, { recursive: true });

	// when something changes
	changes.on("change", function(change) {

		// parse the changes using a helper function
		var changeData = changeEvent(change);

		// make our changes
		config[changeData.key] = changeData.value;

		// log out the changes
		console.log("========= CONFIG CHANGED ==========");
		console.log(`${changeData.key} changed from ${changeData.previousValue} to ${changeData.value}`);
		console.log(config);

	});

});