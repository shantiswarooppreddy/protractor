var FormPage = require('../Pages/FormPage');

describe('First Form test case', function() {
    it('Positive Test Case', function () {

        //Opening the link to the form Page
        browser.get('https://rahulshettyacademy.com/angularpractice/');

        //Entering the name
        FormPage.customerName.sendKeys("S");

        //Clicking on Submit
        FormPage.customerSubmit.click();

        //Verify the required message
        expect(FormPage.customerFailure.getText().then(function(text)
        {
            return text.includes("Name should be at least 2 characters");
        })).toBe(true);
    });
});