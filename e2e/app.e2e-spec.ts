import { AfterthoughtsPage } from './app.po';

describe('afterthoughts App', () => {
  let page: AfterthoughtsPage;

  beforeEach(() => {
    page = new AfterthoughtsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
