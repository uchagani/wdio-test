import BasePage from './base.page';

class HomePage extends BasePage {

    get description() {
        return browser.element('#What-is-WebdriverIO');
    }

    get navHome() {
        return browser.element('a[href="/"]')
    }

    open() {
        super.open('/');
    }

}

export default new HomePage();