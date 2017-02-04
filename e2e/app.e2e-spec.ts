import { CodeutsavaFrontendPage } from './app.po';

describe('codeutsava-frontend App', function() {
  let page: CodeutsavaFrontendPage;

  beforeEach(() => {
    page = new CodeutsavaFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
