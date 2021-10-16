exports.config = {
     onPrepare : function (){
         browser.manage().window().maximize();
         var AllureReporter = require('jasmine-allure-reporter');
         jasmine.getEnv().addReporter(new AllureReporter());
         jasmine.getEnv().afterEach(function(done){
             browser.takeScreenshot().then(function (png) {
                 allure.createAttachment('Screenshot', function () {
                     return new Buffer(png, 'base64')
                 }, 'image/png')();
                 done();
             })
         });
     },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./MiscellaneousConcepts/ActionClassDragAndDrop.js']
};