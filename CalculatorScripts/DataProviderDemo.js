var Calculator = require('../Pages/Calculator');
var using = require('jasmine-data-provider');

describe('Protractor Demo', function() {
    const d = require('../CalculatorScripts/DataDriven')

    using(d, function (data, description) {
        it(description, function () {

            //Opening the link to Calulator Page
            browser.get('http://juliemr.github.io/protractor-demo/');

            //Entering a number in the Page
            Calculator.firstElement.sendKeys(data.a);

            //Entering the seocnd number in the Page
            Calculator.secondElement.sendKeys(data.b);

            //Clicking on the Go Button
            Calculator.goButton.click();

            //expecting a particular to return the correct value
            expect(Calculator.resultValue.getText()).toBe(data.result);

            //Printing the result displayed in the table
            Calculator.resultElement.element(by.css("td:nth-child(3)")).getText().then(function (text) {
                console.log(text);
            });

        });
    });
});