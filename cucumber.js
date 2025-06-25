module.exports = {
  default: {
    require: ['src/test/steps/*.js', 'src/hooks/hooks.js'],
    format: [
      'progress',
      'json:report/cucumber_report.json'
    ],
    paths: ['src/test/features/*.feature'],
    parallel: 0
  }
}
