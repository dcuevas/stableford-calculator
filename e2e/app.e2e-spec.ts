import { StablefordCalcPage } from './app.po';

describe('stableford-calc App', () => {
  let page: StablefordCalcPage;

  beforeEach(() => {
    page = new StablefordCalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
