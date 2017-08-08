import { EnneagramPage } from './app.po';

describe('enneagram App', () => {
  let page: EnneagramPage;

  beforeEach(() => {
    page = new EnneagramPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
