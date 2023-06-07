const express = require('express')
const app = express()
const port = 3000
// import GitHubWrapper
const GitHubWrapper = require('./github-wrapper.js')
// create a new instance of GitHubWrapper
const gitHubWrapper = new GitHubWrapper();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// add a route to get repos by username
app.get('/repos/:username', async (req, res) => {
  try {
    const repos = await gitHubWrapper.getReposForUser(req.params.username);
    res.send(repos);
  }
  catch (err) {
    res.errored(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
