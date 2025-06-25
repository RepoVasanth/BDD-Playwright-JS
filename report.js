// report.js
const reporter = require('cucumber-html-reporter');
const fs = require('fs');

const options = {
  theme: 'bootstrap',
  jsonFile: 'report/cucumber_report.json',
  output: 'report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true, // This will open the HTML report automatically
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "Test",
    "Browser": "Chromium",
    "Platform": process.platform,
    "Executed": "Local"
  }
};

fs.access(options.jsonFile, fs.constants.F_OK, (err) => {
  if (err) {
    console.error("JSON report not found. Make sure tests ran successfully.");
  } else {
    reporter.generate(options);
  }
});
