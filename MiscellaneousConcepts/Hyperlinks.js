describe('Sample', function(){
    it("Sample 1", function(){
        //Launching the practice page
        browser.get("https://rahulshettyacademy.com/angularpractice/");

        element.all(by.css("a[href]")).each(function(item){
                       browser.wait(protractor.ExpectedConditions.visibilityOf(item), 10000);
                       item.click();
                       expect(browser.getCurrentUrl()).toContain("rahulshettyacademy.com");
                       browser.navigate().back();
                   });
        });

    });
