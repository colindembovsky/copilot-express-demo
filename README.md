# GitHub Copilot Demo 🚀

This sample repo can be used to generate a quick app with unit tests/mocks and an Actions workflow.

## Walkthrough

Have a browser open with the completed code (on `main`) as your cheat-sheet.

1. Open the `demo-start` branch in a Codespace
2. Add a new file called `github-wrapper.js`
3. In a terminal, run `npm install octokit` to install the Octokit package
4. Create a class/method to get repos for a user
5. Open `index.js` and add the method call to the method
6. Show it running in the browser (browse to the corresponding route)
7. Create a new file called `github-wrapper.test.js`
8. Run `npm install jest --save-dev` to add Jest
9. Generate a mock Octokit
10. Generate the test method
11. Open `package.json` and add the `test: jest` command in `scripts`
12. Run `npm run test` to show the test running
13. Create `.github/workflows/build.yml`
14. Generate the workflow using Copilot
