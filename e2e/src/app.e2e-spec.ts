import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login title', () => {
    page.navigateToHome();
    expect(page.getText('login .title')).toEqual('Connexion');
  });
});
