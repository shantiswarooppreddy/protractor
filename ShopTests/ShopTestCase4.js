var Shop = require('../Pages/Shop');

describe('Phone Shopping', function() {

    it('Selecting Multiple Phones of the different types', function () {

        //Launching the Browser
        browser.get('https://rahulshettyacademy.com/angularpractice/shop');

        //Selecting a Phone
        Shop.selectFunction("iphone X");
        Shop.selectFunction("Nokia Edge");

        //Checking out
        Shop.checkOut.click();

        //Verifying that correct phone is selected
        Shop.verifyFunction("iphone X", true, "₹. 100000");
        Shop.verifyFunction("Nokia Edge", true, "₹. 65000");

        //Removing the phone
        Shop.remove("Nokia Edge");

        //Verify that the Phone has been removed
        Shop.verifyFunction("Nokia Edge", false, "₹. 65000")

         //Going Back to the Shop
        Shop.continueShopping.click();

        //Selecting a different phone
        Shop.selectFunction("Samsung Note 8");

        //Checking out again
        Shop.checkOut.click();

        //Verify that the right Phone is selected
        Shop.verifyFunction("Samsung Note 8", true, "₹. 85000")

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