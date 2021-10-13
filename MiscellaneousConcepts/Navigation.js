describe('Phone Shopping', function() {

    it('Selecting Multiple Phones of the different types', function () {

        //Launching the Browser
        browser.get('https://rahulshettyacademy.com/angularpractice/shop');

        //Navigating to a particular website
        browser.navigate().to('https://rahulshettyacademy.com/angularpractice');

        //Refreshing the Browser
        browser.refresh();

        //Validating the Current Url
        expect(browser.getCurrentUrl()).toBe("https://rahulshettyacademy.com/angularpractice/");

        //Validating the Current title
        expect(browser.getTitle()).toBe("ProtoCommerce");

        //Going Back
        browser.navigate().back();

        //Going forward
        browser.navigate().forward();

        //Closing the Browser
        browser.close();
    });
});