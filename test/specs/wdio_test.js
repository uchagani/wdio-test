var expect = require('chai').expect;
var HomePage = require('../pages/home.page');

describe('Home page', function () {
    it('should show a description of what WebDriverIO is', function () {
        HomePage.open();
        expect(HomePage.description.getText()).to.contain('What is WebdriverIO?');
    });

});