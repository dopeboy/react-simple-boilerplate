const { Builder, By, Key, until } = require('selenium-webdriver')
require('selenium-webdriver/chrome')
require('selenium-webdriver/firefox')
require('chromedriver')
require('geckodriver')

const rootURL = 'http://localhost:8080';
let driver;

beforeEach((done) => {
    driver = new Builder().forBrowser('firefox').build();
    driver.get(rootURL).then(done);
});

afterEach((done) => {
    driver.quit().then(done);
});

describe('add a todo item', () => {
    it('should show the new item after we input it', async () => {
        await driver.findElement(By.css('.add-todo')).sendKeys("test item")
        await driver.findElement(By.css('.add-todo')).sendKeys(Key.ENTER);
        const listText = await driver.findElement(By.css('.list-unstyled')).getText();
        expect(listText).toContain('test item');
    });
});
