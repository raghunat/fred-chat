import { FredChatPage } from './app.po';

describe('fred-chat App', function() {
  let page: FredChatPage;

  beforeEach(() => {
    page = new FredChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
