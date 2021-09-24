const core = require('@actions/core');
const github = require('@actions/github');

try {
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github, undefined, 2)
  console.log(`The event payload: ${payload}`);
  console.log(core.getInput('team'));
  console.log(github.context.payload.repository.assignees_url);
} catch (error) {
  core.setFailed(error.message);
}