const core = require('@actions/core');
const github = require('@actions/github');
const https = require('https');

try {
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github, undefined, 2)
    console.log(`The event payload: ${payload}`);
    console.log(core.getInput('team'));
    console.log(github.context.payload.repository.assignees_url);

    console.log(process.env);

    // const token = core.getInput('repo-token');
    // https.get('https://api.github.com/repos/packbackbooks/questions/assignees',
    //     { json: true, authorization: `Bearer ${ token }` },
    //     (err, res, body) => {
    //         console.log(err, res, body);
    //     });
} catch (error) {
    core.setFailed(error.message);
}