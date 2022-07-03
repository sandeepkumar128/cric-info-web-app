import { browser, by, element, promise, ElementFinder } from 'protractor';
​
export class LoginPage {
    
    getUserNameInputBox: any;
    getPasswordInputBox: any;
    getUserNameTextBox: any;
​
  // get login component
  getloginComponent(): ElementFinder {
    return element(by.tagName('app-login'));
  }
  navigateToLogin() {
    //return browser.get('/login');
    return element(by.tagName('app-login'));
​
  }
  getEmailTextBox(){
    return element(by.name('email'));
  }
  getPasswordTextBox(){
    return element(by.name('password'));
  }
​
  // get submit button
  getSubmitButton(): ElementFinder {
    return this.getloginComponent().element(by.buttonText('Login'));
  }
  // check submit button is present or not
  isSubmitButtonPresent(): promise.Promise<boolean> {
    return this.getSubmitButton().isPresent();
  }
  // click submit button
  clickSubmitButton(): promise.Promise<void> {
    return this.getSubmitButton().click();
  }

  // default values of input boxes
  getLoginInputBoxesDefaultValues(): any {
    let inputUsername, inputPassword;
    inputUsername = this.getEmailTextBox().getAttribute('value');
    inputPassword = this.getPasswordTextBox().getAttribute('value');
    return Promise.all([inputUsername, inputPassword]).then( (values) => {
      return values;
    });
  }
​
//get username and password details
getMockLoginDetail(): any {
    const loginDetail: any = { email: 'stranger', password : 'password'};
    return loginDetail;
}

addLoginValues(): any {
    const login: any = this.getMockLoginDetail();
    this.getEmailTextBox().sendKeys(login.username);
    this.getPasswordTextBox().sendKeys(login.password);
    return Object.keys(login).map(key => login[key]);
}

}