import { browser, by, element, promise, ElementFinder } from 'protractor';
​
export class SearchResultsPage {
​
  // get search results component
  getSearchResultsComponent(): ElementFinder {
    return element(by.tagName('app-search-results'));
  }
  navigateToSearchResults() {
    return element(by.tagName('app-search-results'));
​
  }

//   getSearchResultsChildComponent(){
//     return element(by.name('search-results-child'));
//   }
//   getTeam2TextBox(){
//     return element(by.name('team2name'));
//   }
getSearchResultsChild(){
    // return element(by.css('app-search-results-child'));
    return element(by.tagName('app-search-results-child'));
  }
  isSearchResultsChildPresent():promise.Promise<boolean>{
    return this.getSearchResultsChild().isPresent();
  }
​
  
  
  
​
}