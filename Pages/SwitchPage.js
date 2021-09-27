var SwitchPage = function()
{
    this.openWindow = element(by.id("openwindow"));
    this.openTab = element(by.id("opentab"));
    this.alertClick = element(by.id('alertbtn'));
    this.frameClick = element(by.name("iframe-name"));
    this.switchFunction = function(){
    browser.getWindowHandle().then(function(parentWindow){
        browser.getAllWindowHandles().then(function(AllWindows){
            for(let i = 0; i < AllWindows.length; i++)
                if(parentWindow != AllWindows[i])
                {
                    browser.switchTo().window(AllWindows[i]);
                    browser.manage().window().maximize();
                    browser.close();
                }
        });
        browser.switchTo().window(parentWindow);
    });
    }
}
module.exports = new SwitchPage();