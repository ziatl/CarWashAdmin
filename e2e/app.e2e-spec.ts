import { CarWashAdminPage } from './app.po';

describe('car-wash-admin App', function() {
  let page: CarWashAdminPage;

  beforeEach(() => {
    page = new CarWashAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
