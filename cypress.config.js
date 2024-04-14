module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity: false,
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
  },
  e2e: {
    setupNodeEvents(on, config) {

    },
  },
};
