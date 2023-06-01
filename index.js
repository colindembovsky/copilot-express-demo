const express = require('express')
const app = express()
const port = 3000

// create an oktokit client
const { Octokit } = require('@octokit/core');
const octo = new Octokit({ auth: process.env.GITHUB_TOKEN });

// create a function to get the repos for a username
const getRepos = async (username) => {
  const { data } = await octo.request('GET /users/{username}/repos', {
    username: username,
  });
  // return just the name and description
  const repos = data.map(({ name, description }) => ({ name, description }));
  // sort by name
  return repos.sort((a, b) => a.name.localeCompare(b.name));
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/repos/:username', async (req, res) => {
  const repos = await getRepos(req.params.username);
  res.json(repos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
