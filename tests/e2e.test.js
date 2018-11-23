import { Builder, By, Key, until } from 'selenium-webdriver'
import 'selenium-webdriver/chrome'
import 'selenium-webdriver/firefox'
import 'chromedriver'
import 'geckodriver'

const rootURL = 'http://localhost:8080'
let driver;

beforeEach((done) => {
    // NOTE - author saw issues with using chrome here. YMMV
    driver = new Builder().forBrowser('firefox').build()
    driver.get(rootURL).then(done)
});

afterEach((done) => {
    driver.quit().then(done)
});

// Type something into the text box, hit enter, check if what you typed in
// is in the list of the todos
describe('add a todo item', () => {
    it('should show the new item after we input it', async () => {
        await driver.findElement(By.css('.add-todo')).sendKeys("test item")
        await driver.findElement(By.css('.add-todo')).sendKeys(Key.ENTER)
        const listText = await driver.findElement(By.css('.list-unstyled')).getText()
        expect(listText).toContain('test item')
    });
});
