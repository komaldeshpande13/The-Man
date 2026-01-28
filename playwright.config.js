// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retires:1,
  timeout: 30 * 1000,
  expect: {

    timeout: 8000
  },

  reporter: 'html',
  projects: [
    {
    name: 'chromium',
    use: {
      headless: false,
      screenshot: 'on',
      trace: 'on',//off,on
    }
  },
  {
    name: 'webkit',
      use: {
      ...devices['Desktop Safari'],
      headless: false,
      screenshot: 'on',
      trace: 'on',//off,on
    }
  },
  ]

};

module.exports = config;