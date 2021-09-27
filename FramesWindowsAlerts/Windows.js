var SwitchPage = require('../Pages/SwitchPage');

describe('Windows Program', function() {

    it('Windows Program', function () {

        //Making the required Setting for Launching an Non Angular Browser
        browser.ignoreSynchronization = true;

        //Launching the Browser
        browser.get('https://www.rahulshettyacademy.com/AutomationPractice/');

        //Maximizing the Browser Window
        browser.manage().window().maximize();

        //Switching to a new Window
        SwitchPage.openWindow.click();

        //Switching to the child Window
        SwitchPage.switchFunction();

        //Switching to a new Window
        SwitchPage.openTab.click();

        //Switching to the Child Tab
        SwitchPage.switchFunction();

    });

});