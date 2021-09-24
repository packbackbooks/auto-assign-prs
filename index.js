const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(nameToGreet);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  console.log(core.getInput('team'));
  console.log(`https://api.github.com/repos/${ github.repository }/commits/${ github.event.review.commit_id }`);
} catch (error) {
  core.setFailed(error.message);
}