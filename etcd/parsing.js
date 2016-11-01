const _ = require('underscore');
const parseConfig = function(data) {

	if (_.isUndefined(data.node)) {
		throw new Error("config.node missing");
	}

	if (!_.isArray(data.node.nodes)) {
		throw new Error("config.node.nodes missing");
	}

	var config = {}

	data.node.nodes.forEach(node => {
		config[node.key.split("/")[3]] = node.value;
	})

	return config;

}

const changeEvent = function(data) {

	var change = {};

	// get the new value
	if (!_.isUndefined(data.node) && !_.isUndefined(data.node.value)) {
		change.value = data.node.value;
	}

	// get the key that we changed
	if (!_.isUndefined(data.node) && !_.isUndefined(data.node.key)) {
		change.key = data.node.key.split("/")[3];
	}

	// get the old value
	if (!_.isUndefined(data.prevNode) && !_.isUndefined(data.prevNode.value)) {
		change.previousValue = data.prevNode.value;
	}

	return change;

}

module.exports = {
	parseConfig: parseConfig,
	changeEvent: changeEvent
}