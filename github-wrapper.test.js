// create a mock for Octokit constructor and request method
jest.mock('@octokit/core', () => {
    return {
        Octokit: jest.fn().mockImplementation(() => {
            return {
                request: jest.fn().mockImplementation(() => {
                    return {
                        data: [
                            { name: 'repo1', description: 'description1' },
                            { name: 'repo2', description: 'description2' }
                        ]
                    }
                })
            }
        })
    }
});

describe('GitHubWrapper tests', () => {
    it('should return repos for a user', async () => {
        // import GitHubWrapper
        const GitHubWrapper = require('./github-wrapper.js');
        // create a new instance of GitHubWrapper
        const gitHubWrapper = new GitHubWrapper();
        // call getReposForUser
        const repos = await gitHubWrapper.getReposForUser('test');

        // expect the repos to be returned
        expect(repos).toEqual([
            {
                name: 'repo1',
                description: 'description1'
            },
            {
                name: 'repo2',
                description: 'description2'
            }
        ]);
    });
});
