// Below actions are provided by GITHub
const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  // run is function name.
  // 1. Get some input values from action.yml(bucket, bucket-region, dist-folder). Information about S3 bucket. Target location to place file.
  const bucket = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true });
  const distFolderInput = core.getInput("dist-folder", { required: true });

  // 2. Upload distFolderInput files to S3 bucket
  const s3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolderInput} ${s3Uri} --region ${bucketRegion}`); // aws s3 sync <local-folder> <s3 bucket> --region <bucket region>
  // Print this message while executing this line
  core.notice("Hello from my custom Javascript Action!");
}

run(); // Call runn function

// Open terminal and execute 'npm init -y'
// Install dependency -> 'npm install @actions/core @actions/github @actions/exec'
