import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToHome() {
    return browser.get('/');
  }

  getText(selector: string) {
    return element(by.css(selector)).getText();
  }
}
