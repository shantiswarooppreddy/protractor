exports.config = {
     onPrepare : function (){
         browser.manage().window().maximize();
     },
    capabilities: {
        'browserName': 'firefox'
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./MiscellaneousConcepts/SizeAndDimension.js']
};