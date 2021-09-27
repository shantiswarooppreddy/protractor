var Calculator = require('../Pages/Calculator');

describe('Protractor Demo', function() {

    it('Simple Addition', function () {

        //Opening the link to Calulator Page
        browser.get('http://juliemr.github.io/protractor-demo/');

        //Entering a number in the Page
        Calculator.firstElement.sendKeys("3");

        //Entering the seocnd number in the Page
        Calculator.secondElement.sendKeys("5");

        //Clicking on the Go Button
        Calculator.goButton.click();

        //expecting a particular to return the correct value
        expect(Calculator.resultValue.getText()).toBe("8");

        //Printing the result displayed in the table
        Calculator.resultElement.element(by.css("td:nth-child(3)")).getText().then(function (text)
            {
                console.log(text);
            });

    });

    function Calc(a, b, c) {
        Calculator.firstElement.sendKeys(a);
        Calculator.secondElement.sendKeys(b);

//
        Calculator.requiredOption.each(function (item) {
            item.getAttribute("value").then(function (values) {
                if (values == c) {
                    item.click();
                }
            })
        })
        Calculator.goButton.click();
    }

    it('Locators', function () {

        /*browser.waitForAngularEnabled(false);
        browser.get("http://google.com");//non angular apps*/
        //browser.get('http://juliemr.github.io/protractor-demo/');


        Calc(3, 5, "MULTIPLICATION");
        Calc(6, 5, "SUBTRACTION");
        Calc(5, 5, "DIVISION");
        Calc(10, 6, "ADDITION");
        Calc(10, 6, "MODULO");

        Calculator.resultElements.each(function (item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function (text)
            {
                console.log(text);
            });

        });
    });
});