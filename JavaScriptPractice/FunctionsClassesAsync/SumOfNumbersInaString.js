var x = "a1b2c3"
var y = 0
for(let i = 0; i < x.length; i++) {
    if (!isNaN(Number(x.charAt(i))))
    {
        console.log("Inside")
        y = y + Number(x.charAt(i));
    }
}
    console.log(y)