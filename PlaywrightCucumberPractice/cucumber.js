module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    import: ['features/**/*.ts'],
    format: ['progress', 'html:reports/cucumber-report.html'],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    publishQuiet: true
  }
};