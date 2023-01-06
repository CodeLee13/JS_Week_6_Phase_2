// Create a function fetchJson (in fetchJson.js) which accepts one URL, 
// and one callback function as arguments.

// It should send an HTTP request using get to the URL, and calls the given 
// function with the received response's data. This data should be parsed from 
// JSON into a plain JavaScript object.

const { get } = require("callback-fetch");

const fetchJson = (url, callback) => {
  get(url, callback);
};

module.exports = fetchJson;