var BasePage = require('./base.page');

var HomePage = Object.create(BasePage, {

    navHome: {
        get: function () {
            return browser.element('a[href="/"]');
        }
    },

    description: {
        get: function () {
            return browser.element('#What-is-WebdriverIO');
        }
    },

    open: {
        value: function () {
            BasePage.open.call(this, '/');
        }
    }
});

module.exports = HomePage;
