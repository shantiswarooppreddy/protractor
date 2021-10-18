describe('Protractor Typescript Demo', function() {
    browser.ignoreSynchronization = true;
    it('click operation', function(end) {
        setTimeout(function(){
            end();
        }, 5000)
        browser.sleep(30000)
        console.log("*************************");
    });
});