const { get } = require("callback-fetch");

class GithubClient {
  fetchRepositoryData(repoName, callback) {
    const url = `https://api.github.com/repos/${repoName}`;
    get(url, (retrievedData) => {
      const object = JSON.parse(retrievedData);
      return callback(object);
    });
  }
}

module.exports = GithubClient;