import { CarManagerAppPage } from './app.po';

describe('car-manager-app App', () => {
  let page: CarManagerAppPage;

  beforeEach(() => {
    page = new CarManagerAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
