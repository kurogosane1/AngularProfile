import { NewprofilePage } from './app.po';

describe('newprofile App', () => {
  let page: NewprofilePage;

  beforeEach(() => {
    page = new NewprofilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
