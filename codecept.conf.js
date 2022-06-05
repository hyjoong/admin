const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: "./tests/**/*_test.ts",
  output: "./output",
  helpers: {
    Playwright: {
      url: "http://localhost:8080",
      show: true,
      browser: "chromium",
      waitForNavigation: "networkidle0",
    },
  },
  bootstrap: null,
  mocha: {},
  name: "admin",
};
