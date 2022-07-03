import { SearchResultsPage } from './search-results.po';
import { browser, logging } from 'protractor';
import { getMaxListeners } from 'cluster';
​
describe('SEARCH TEST', () => {
  let page: SearchResultsPage;
​
  beforeEach(() => {
    page = new SearchResultsPage();
    page.navigateToSearchResults();
  });
​
//form check
  it('should check for search-results-child', () => {
    page.navigateToSearchResults();
    expect(page.isSearchResultsChildPresent())
    .toBeTruthy(`search-results-child should exist in search-results.component.html`);
  });
​
  //Input Box match type and team 1, team 2
//   it('should get match type input box', () => {
//     page.navigateToSearch();
//     expect(page.getMyControlTextBox())
//     .toBeTruthy(`match type input should exist in search.component.html`);
//   });
 
  
});
afterEach(async () => {
  // Assert that there are no errors emitted from the browser
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
  } as logging.Entry));
});