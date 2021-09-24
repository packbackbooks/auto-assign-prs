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

    https.get('https://api.github.com/repos/packbackbooks/questions/assignees', (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(JSON.parse(data).explanation);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
} catch (error) {
    core.setFailed(error.message);
}