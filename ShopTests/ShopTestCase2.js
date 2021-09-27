var Shop = require('../Pages/Shop');

describe('Phone Shopping', function() {

    it('Selecting Multiple Phones of the same type', function () {

        //Launching the Browser
        browser.get('https://rahulshettyacademy.com/angularpractice/shop');

        //Selecting a Phone
        Shop.selectFunction("iphone X");
        Shop.selectFunction("iphone X");

        //Checking out
        Shop.checkOut.click();

        //Verifying that correct phone is selected
        Shop.verifyFunction("iphone X", true, "₹. 200000");

        //Checking out after checking the price
        Shop.checkOutfinal.click();

        //Entering the Country in the dropdown partially
        Shop.country.sendKeys("United States of America");

        //Clicking on Purchase
        Shop.purchase.click();

        //Verifying the success message
        expect(Shop.successMessage.getText()).toContain("Success!");
    });

});