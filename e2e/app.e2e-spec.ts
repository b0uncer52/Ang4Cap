import { SumsafariPage } from './app.po';

describe('sumsafari App', () => {
  let page: SumsafariPage;

  beforeEach(() => {
    page = new SumsafariPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
