var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
     onPrepare : function (){
         browser.manage().window().maximize();

         jasmine.getEnv().addReporter(
             new Jasmine2HtmlReporter({
                 savePath: 'target/screenshots'
             })
         );
     },
    capabilities: {
        'browserName': 'chrome'
    },
    suites :
        {
            Regression: './CalculatorScripts/Spec.js'
        },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./CalculatorScripts/DataProviderDemo.js']
};