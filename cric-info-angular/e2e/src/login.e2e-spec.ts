import { LoginPage } from './login.po';
import { browser, logging } from 'protractor';
//import { getMaxListeners } from 'cluster';
​
describe('LOGIN TEST', () => {
  let page: LoginPage;
​
  beforeEach(() => {
    page = new LoginPage();
    page.navigateToLogin();
  });
​
  //Input Box Email
  it('should get username input box', () => {
    page.navigateToLogin();
    expect(page.getEmailTextBox())
    .toBeTruthy(`<input class="form-control form-control-lg" type="email" placeholder="Enter your email"
    [formControl]="email" required /> should exist in login.component.html`);
  });
​
  //Input Box Password
  it('should get passsword input box', () => {
    page.navigateToLogin();
    expect(page.getPasswordTextBox())
    .toBeTruthy(`<input class="form-control form-control-lg" type="password" placeholder="Password"
    [formControl]="password" required/>
      should exist in login.component.html`);
  });

  //Login Button
  it('should get login button', () => {
    page.navigateToLogin();
    expect(page.isSubmitButtonPresent()).toBeTruthy(`<button type="submit" (click)="checkLogin()" class="submit" [disabled]="!profileLogin.valid">Login</button>
    should exist in login.component.html`);
  });

  it('default values of username and password should be empty', () => {
    const emptyLoginValues = ['', ''];
    page.navigateToLogin();
    expect(page.getLoginInputBoxesDefaultValues()).toEqual(emptyLoginValues, 'Default values for username and password should be empty');
  });

//   it('should login into the system', () => {
//     page.navigateToLogin();
//     let newNoteValues = page.addLoginValues();
//     expect(page.getLoginInputBoxesDefaultValues()).toEqual(newNoteValues, 'Should be able to set values for username and password');
//     page.clickSubmitButton();
//     page.navigateToDashBoard();
//     page.getCurrentURL().then((url) => {
//       if (url.indexOf('login') > -1) {
//         newNoteValues = page.addLoginValues();
//         page.clickSubmitButton();
//         page.navigateToNoteView();
//         expect(page.getCurrentURL()).toContain('dashboard/view/noteview', 'Should navigate to note view dashboard');
//       } else {
//         expect(page.getCurrentURL()).toContain('dashboard/view/noteview', 'Should navigate to note view dashboard');
//       }
//     });
//  });


});
afterEach(async () => {
  // Assert that there are no errors emitted from the browser
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
  } as logging.Entry));
});