var FormPage = require('../Pages/FormPage');

describe('First Form test case', function() {
    it('Positive Test Case', function () {

        //Opening the link to the form Page
        browser.get('https://rahulshettyacademy.com/angularpractice/');

        //Computing the element location
        FormPage.customerName.getLocation().then(function(item){
            console.log(item.y);
            console.log(item.x);
        });

        //Computing the element dimension
        FormPage.customerName.getSize().then(function(item){
            console.log(item.width);
            console.log(item.height);
        });

        browser.manage().window().setPosition(100, 100)
        browser.manage().window().getPosition().then(function(item)
        {
            expect(item.x).toBe(100);
            expect(item.y).toBe(100)
        });


    });

});