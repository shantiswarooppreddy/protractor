var SwitchPage = require('../Pages/SwitchPage');

describe('Frame Program', function() {

    it('Frame Program', function () {

        //Making the required Setting for Launching an Non Angular Browser
        browser.ignoreSynchronization = true;

        //Launching the Browser
        browser.get('https://www.rahulshettyacademy.com/AutomationPractice/');

        //Maximizing the Browser Window
        browser.manage().window().maximize();

        //Switching to Iframe
        browser.switchTo().frame(SwitchPage.frameClick.getWebElement());

        //Implicitly Wait
        browser.sleep(10000);

        //Switching back to the Parent Frame
        browser.switchTo().defaultContent();
    });

});