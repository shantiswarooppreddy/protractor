exports.config = {
     onPrepare : function (){
         browser.manage().window().maximize();
     },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./MiscellaneousConcepts/Navigation.js']
};