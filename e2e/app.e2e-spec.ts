import { TallerWeWorkPage } from './app.po';

describe('taller-we-work App', function() {
  let page: TallerWeWorkPage;

  beforeEach(() => {
    page = new TallerWeWorkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
