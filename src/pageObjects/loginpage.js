
class loginpage{

    constructor(page){
        this.page = page ;
        this.loginLink = '#login2';
        this.userText = '#loginusername';
        this.passText = '#loginpassword';
        this.logInButton = "//button[contains(text(),'Log in')]";
    }

    async openApplication(appURL){
        await this.page.goto(appURL);
        await this.page.waitForLoadState('networkidle');
    }

    async enterLoginDetails(strUser, strPass){
        await this.page.click(this.loginLink);
        await this.page.waitForTimeout(1000);
        await this.page.fill(this.userText,strUser);
        await this.page.fill(this.passText,strPass);
    }

    async clickLoginButton(){
        await this.page.waitForTimeout(1000);
        await this.page.click(this.logInButton);
    }
}
module.exports = loginpage;