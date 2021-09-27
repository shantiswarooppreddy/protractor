

describe('Sample', function(){
    it("Sample 1", function(){

        browser.get("www.google.com");

        element.all(by.xpath("href")).each(function(item){

                   item.getText().then(function(text){
                       console.log(text);
                   });

        });

    });
});