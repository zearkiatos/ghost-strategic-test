module.exports = {
  projectId: 'ghost-strategic-test',
  env: {
    appName: 'Ghost CMS',
    events:1000,
    delay:300,
    seed:1234,
    pctClicks:12,
    pctScroll:12,
    pctSelectors:12,
    pctKeys:12,
    pctSpKeys:12,
    pctPgNav:12,
    pctBwChaos:12,
    pctActions:16,
  },
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 120000,
  videosFolder: './results',
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
};
