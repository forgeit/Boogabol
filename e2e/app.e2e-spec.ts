import { BoogabolPage } from './app.po';

describe('boogabol App', function() {
  let page: BoogabolPage;

  beforeEach(() => {
    page = new BoogabolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
