var a = [1, 5, 8, 9, 10, 15, 6, 5, 8, 12]
myfunction = function(x, y) { return y - x}
myfunction1 = function(x, y) { return x - y }
a.sort(myfunction)
console.log(a.toString())
a.sort(myfunction1)
console.log(a.toString())
var a = [{car:"BMW", Price: "80L"}, {car:"AUDI", Price: "75L"}]
for(let j = 0; j < a.length; j++) {
    console.log(a[j].car + " " + a[j].Price)
}
myfunction2 = function(a, b) {
    let x = a.car.toLowerCase();
    let y = b.car.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
}
myfunction3 = function(a, b) {
    let x = a.Price.toLowerCase();
    let y = b.Price.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
}
a.sort(myfunction2)
for(let j = 0; j < a.length; j++) {
    console.log(a[j].car + " " + a[j].Price)
}
a.sort(myfunction3)
for(let j = 0; j < a.length; j++) {
    console.log(a[j].car + " " + a[j].Price)
}
