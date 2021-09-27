var SwitchPage = require('../Pages/SwitchPage');

describe('Alert Program', function() {

    it('Alert Program', function () {

        //Making the required Setting for Launching an Non Angular Browser
        browser.ignoreSynchronization = true;

        //Launching the Browser
        browser.get('https://www.rahulshettyacademy.com/AutomationPractice/');

        //Clicking on the Alert
        SwitchPage.alertClick.click();

        //Implicitly Wait
        browser.sleep(10000);

        //Switching to the Alert
        browser.switchTo().alert().then(function(item)
        {
            item.accept();
        });
    });

    });