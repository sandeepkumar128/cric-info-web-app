import { browser, by, element, promise, ElementFinder } from 'protractor';
​
export class SearchPage {
​
  // get search component
  getSearchComponent(): ElementFinder {
    return element(by.tagName('app-search'));
  }
  navigateToSearch() {
   // return browser.get('/search');
    return element(by.tagName('app-search'));
​
  }
  getMyControlTextBox(){
    return element(by.name('myControl'));
  }
  getTeam1TextBox(){
    return element(by.name('team1name'));
  }
  getTeam2TextBox(){
    return element(by.name('team2name'));
  }
​
  // get search button
  getSubmitButton(): ElementFinder {
    return this.getSearchComponent().element(by.buttonText('Done'));
  }
  // check submit button is present or not
  isSubmitButtonPresent(): promise.Promise<boolean> {
    return this.getSubmitButton().isPresent();
  }
  // click submit button
  clickSubmitButton(): promise.Promise<void> {
    return this.getSubmitButton().click();
  }
  getForm(){
    return element(by.css('form'));
  }
  isFormPresent():promise.Promise<boolean>{
    return this.getForm().isPresent();
  }
​
}