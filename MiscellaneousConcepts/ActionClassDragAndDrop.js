describe('Action Class Tests' , function()
{
    it('Action Class Test1', function(){

        //Looking for Angular
        browser.ignoreSynchronization = true;

        //Getting a particular website
        browser.get('https://demoqa.com/droppable');

        //Dragging and dropping
        browser.actions().dragAndDrop(element(by.id("draggable")), element(by.id("droppable"))).perform();

        //Navigating to the Slider
        browser.navigate().to("https://demoqa.com/slider");

        //Sliding the slider
        element(by.className("range-slider range-slider--primary")).getSize().then(function(item){
           browser.actions().mouseDown(element(by.className("range-slider range-slider--primary")))
               .mouseMove({x: item.width/2, y: 0})
               .mouseUp(element(by.className("range-slider range-slider--primary")))
               .perform().then(function(){
                   console.log("This action has been completed");
           });
        });

    });
});
