import { RegisterPage } from './register.po';
import { browser, logging } from 'protractor';
​
describe('REGISTER TEST', () => {
  let page: RegisterPage;
​
  beforeEach(() => {
    page = new RegisterPage();
    page.navigateToRegister();
  });
​
  //Input Box Email
  it('should get username input box', () => {
    page.navigateToRegister();
    expect(page.getEmailTextBox())
    .toBeTruthy(`<input class="form-control form-control-lg" type="email" placeholder="Enter your email"
    [formControl]="email" required /> should exist in registration.component.html`);
  });
​
  //Input Box Password
  it('should get passsword input box', () => {
    page.navigateToRegister();
    expect(page.getPasswordTextBox())
    .toBeTruthy(`<input class="form-control form-control-lg" type="password" placeholder="Password"
    [formControl]="password" required/>
      should exist in registration.component.html`);
  });

 
});
afterEach(async () => {
  // Assert that there are no errors emitted from the browser
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
  } as logging.Entry));
});