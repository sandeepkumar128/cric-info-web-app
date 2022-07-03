import { SearchPage } from './search.po';
import { browser, logging } from 'protractor';
import { getMaxListeners } from 'cluster';
​
describe('SEARCH TEST', () => {
  let page: SearchPage;
​
  beforeEach(() => {
    page = new SearchPage();
    page.navigateToSearch();
  });
​
//form check
  it('should check for form', () => {
    page.navigateToSearch();
    expect(page.isFormPresent())
    .toBeTruthy(`form should exist in search.component.html`);
  });
​
  //Input Box match type and team 1, team 2
  it('should get match type input box', () => {
    page.navigateToSearch();
    expect(page.getMyControlTextBox())
    .toBeTruthy(`match type input should exist in search.component.html`);
  });
  it('should get match type input box', () => {
    page.navigateToSearch();
    expect(page.getMyControlTextBox())
    .toBeTruthy(`match type input should exist in search.component.html`);
  });
  it('should get team 1 name input box', () => {
    page.navigateToSearch();
    expect(page.getTeam1TextBox())
    .toBeTruthy(`team 1 input should exist in search.component.html`);
  });
  it('should get team 2 name input box', () => {
    page.navigateToSearch();
    expect(page.getTeam2TextBox())
    .toBeTruthy(`team 2 input should exist in search.component.html`);
  });
  
});
afterEach(async () => {
  // Assert that there are no errors emitted from the browser
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
  } as logging.Entry));
});