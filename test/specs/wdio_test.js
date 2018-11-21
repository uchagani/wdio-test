import HomePage from '../pages/home.page'

var expect = require('chai').expect;

describe('home page', () => {

    // beforeEach(() => {
    //     browser.reload();
    //     HomePage.open();
    // });

    it('should show a description of what WebDriverIO is', () => {
        HomePage.open();
        expect(HomePage.description.getText()).to.contain('What is WebdriverIO?');
    });

    // it('should contain a Home Link in the Navigation Bar', () => {
    //     expect(HomePage.navHome.getText().to.equal('Home'))
    // })
});