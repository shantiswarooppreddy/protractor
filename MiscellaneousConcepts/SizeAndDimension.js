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

    });

});