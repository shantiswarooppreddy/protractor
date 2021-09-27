var FormPage = require('../Pages/FormPage');

describe('First Form test case', function() {
    it('Positive Test Case', function () {

        //Opening the link to the form Page
        browser.get('https://rahulshettyacademy.com/angularpractice/');

        //Entering the name
        FormPage.customerName.sendKeys("Shanti Swaroop Reddy");

        //Entering the email
        FormPage.customerEmail.sendKeys("shanti.s.reddy@gmail.com");

        //Entering the Password
        FormPage.customerPassword.sendKeys("Amma");

        //Checking the ice cream checkbox
        FormPage.customerCheckbox.click();

        //Selecting a particular gender
        FormPage.customerGender.each(function (item)
        {
            item.getText().then(function(text)
            {
                if(text == 'Female')
                    item.click();
            });
        });
        
        //Selecting a particular checkbox
        FormPage.customerTypeCheck.click();

        //Entering Date of Birth
        FormPage.customerDOB.sendKeys("08092012");

        //Clicking on Submit
        FormPage.customerSubmit.click();

        //Verify the successfull message
        expect(FormPage.customerSuccess.getText().then(function(text)
        {
            return text.includes("Success! The Form has been submitted successfully!.");
        })).toBe(true);

        //Close the successfull message
        FormPage.customerSuccessClose.click();
        
    });
});