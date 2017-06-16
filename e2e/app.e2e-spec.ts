import { NgJokesPage } from './app.po';

describe('ng-jokes App', () => {
  let page: NgJokesPage;

  beforeEach(() => {
    page = new NgJokesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
