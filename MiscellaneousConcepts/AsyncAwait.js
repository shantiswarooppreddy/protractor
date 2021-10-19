const {browser, element, by, protractor} = require("protractor");
describe('Sample', function(){
    it("Sample 1", async function(){
        //Launching the practice page
        await browser.get("https://rahulshettyacademy.com/angularpractice/");
        var text = await browser.getCurrentUrl();
        console.log(text);
    });

});