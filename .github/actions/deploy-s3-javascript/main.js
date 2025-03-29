const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  // run is function name.

  core.notice("Hello from my custom Javascript Action!");
}

run(); // Call runn function

// Open terminal and execute 'npm init -y'
// Install dependency -> npm install @actions/core @actions/github @actions/exec
