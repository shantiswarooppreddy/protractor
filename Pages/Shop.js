var Shop = function()
{
    this.selectFunction = function(item)
    {
        element.all(by.tagName("app-card")).each(function (items){
            items.element(by.css("h4 a")).getText().then(function(text){
                 if(item == text)
                     items.element(by.tagName("button")).click();
            });
        });
    }

    this.verifyFunction = function(item, value, totalPrice) {
        if (value == true) {
            expect(element(by.xpath("//tr[descendant::a[text()='" + item + "']]")).isPresent()).toBe(value);
            expect(element(by.xpath("//tr[descendant::a[text()='" + item + "']]//td[4]/strong")).getText()).toBe(totalPrice);
        }
        else
            expect(element(by.xpath("//tr[descendant::a[text()='" + item + "']]")).isPresent()).toBe(value);
    }
    this.remove = function(item){
        element(by.xpath("//tr[descendant::a[text()='" + item + "']]//button")).click();
    }

    this.checkOutfinal = element(by.css("button[class='btn btn-success']"));
    this.checkOut = element(by.css("a[class='nav-link btn btn-primary']"));
    this.country  = element(by.id("country"));
    this.purchase = element(by.css("input[value='Purchase']"));
    this.successMessage = element(by.css("div strong"));
    this.continueShopping = element(by.css("button[class='btn btn-default']"));
}
module.exports = new Shop();