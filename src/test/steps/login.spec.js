const {Given, Then, When} =require('@cucumber/cucumber');
const LoginPage = require('../../pageObjects/loginpage');

Given('Navigate to the homepage', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.openApplication('https://www.demoblaze.com/index.html');
});

Then('Perform Login steps', async function () {
  this.loginPage = new LoginPage(this.page);
   await this.loginPage.enterLoginDetails('PWDemo','PWDemo');
   await this.loginPage.clickLoginButton();
});