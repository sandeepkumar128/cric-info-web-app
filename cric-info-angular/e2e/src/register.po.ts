import { browser, by, element, promise, ElementFinder } from 'protractor';
​
export class RegisterPage {
    
    getUserNameInputBox: any;
    getPasswordInputBox: any;
    getUserNameTextBox: any;
​
  // get login component
  getregisterComponent(): ElementFinder {
    return element(by.tagName('app-registration'));
  }
  
  navigateToRegister() {
    //return browser.get('/login');
    return element(by.tagName('app-registration'));
  }
  getEmailTextBox(){
    return element(by.name('email'));
  }
  getPasswordTextBox(){
    return element(by.name('password'));
  }
​
  //get submit button
  getSubmitButton(): ElementFinder {
    return this.getregisterComponent().element(by.buttonText('Register'));
  }
  //check submit button is present or not
  isSubmitButtonPresent(): promise.Promise<boolean> {
    return this.getSubmitButton().isPresent();
  }
  // click submit button
  clickSubmitButton(): promise.Promise<void> {
    return this.getSubmitButton().click();
  }

}