class class1
{
    get name()  { return(this.Name);}
    set name1(x) { this.Name = x; }
    static hello() { console.log ("Hello World"); }
}

var x = new class1()
x.name1 = "Shanti Swaroop Reddy"
console.log(x.name)
class1.hello()