var Calculator = function()
{
  this.firstElement = element(by.model("first"));
  this.secondElement = element(by.model("second"));
  this.goButton = element(by.id("gobutton"));
  this.resultValue = element(by.css("h2[class='ng-binding']"));
  this.resultElement = element(by.repeater("result in memory"));
  this.resultElements = element.all(by.repeater("result in memory"));
  this.specificElement = element(by.css("td:nth-child(3)"));
  this.requiredOption = element.all(by.tagName("option"));
};
module.exports = new Calculator();