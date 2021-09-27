var FormPage = function()
{
    this.customerName = element(by.name("name"));
    this.customerEmail = element(by.name("email"));
    this.customerPassword =  element(by.id("exampleInputPassword1"));
    this.customerCheckbox =  element(by.id("exampleCheck1"));
    this.customerGender = element.all(by.css("option"));
    this.customerTypeCheck = element(by.css("input[value='option2']"));
    this.customerDOB = element(by.name("bday"));
    this.customerSubmit = element(by.css("input[type='submit']"));
    this.customerSuccess = element(by.css("div[class = 'alert alert-success alert-dismissible']"));
    this.customerSuccessClose = element(by.css("a[href='#']"));
    this.customerFailure = element(by.css("div[class = 'alert alert-danger']"));
}
module.exports = new FormPage();