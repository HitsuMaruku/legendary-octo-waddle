import { LegendaryOctoWaddlePage } from './app.po';

describe('legendary-octo-waddle App', function() {
  let page: LegendaryOctoWaddlePage;

  beforeEach(() => {
    page = new LegendaryOctoWaddlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
