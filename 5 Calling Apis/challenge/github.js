const GithubClient = require('./githubClient.js');

class GitHub {
  constructor(client) {
    this.client = client;
    this.data = null;
  }

  fetch(repoName) {
    this.client.fetchRepositoryData(repoName, (repositoryData) => {
      this.data = repositoryData;
    });
  }

  getRepoData() {
    return this.data;
  }
}

module.exports = GitHub;