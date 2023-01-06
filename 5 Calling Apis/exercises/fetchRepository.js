// Create a function fetchRepositoryInfo (in fetchRepositoryInfo.js) which
// fetches repository data from Github's API
// calls the given callback with the data it receives from the API
// (as a JS object):

const { get } = require("callback-fetch");

const fetchRepositoryInfo = (githubRepoURL, callback) => {
  const url = `https://api.github.com/repos/${githubRepoURL}`;
  get(url, callback);
};

module.exports = fetchRepositoryInfo; // for use in node

fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
  console.log(JSON.parse(receivedResponse));
});