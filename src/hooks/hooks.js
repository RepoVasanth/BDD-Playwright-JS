const { BeforeAll, AfterAll, Before, After, setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
  }
}
setWorldConstructor(CustomWorld);

BeforeAll(async function () {
  console.log('----------');
});

AfterAll(async function () {
  console.log('----------');
});

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  console.log('After call');
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});
