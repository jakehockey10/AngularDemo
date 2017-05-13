import { HtcrmAngularPage } from './app.po';

describe('htcrm-angular App', () => {
  let page: HtcrmAngularPage;

  beforeEach(() => {
    page = new HtcrmAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
