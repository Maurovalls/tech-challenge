const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    env: {
      CYPRESS_USERNAME: 'standard_user', 
      CYPRESS_PASSWORD: 'secret_sauce',
    },

  },
});
