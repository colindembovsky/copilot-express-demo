// a class to wrap calls to GitHub using octokit
const Octokit = require('@octokit/core').Octokit;

class GitHubWrapper {
    octokit = new Octokit();

    constructor() {
        // if there is a token, create an authenticated Octokit
        if (process.env.GITHUB_TOKEN) {
            this.octokit = new Octokit({
                auth: process.env.GITHUB_TOKEN
            })
        }
    }

    async getReposForUser(username) {
        // use request to get repos for a user
        const data = await this.octokit.request('GET /users/:username/repos', {
            username: username
        });
        // filter name and description
        const repos = data.data.map(repo => {
            return {
                name: repo.name,
                description: repo.description
            }
        });
        // sort alphabetically
        repos.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        return repos;
    }
}

module.exports = GitHubWrapper;