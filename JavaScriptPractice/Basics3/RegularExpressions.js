class class1
{
    get name()  { return(this.Name);}
    set name(x) { this.Name = name; }
    static hello() { console.log ("Hello World"); }
}

var x = new class1
x.name("Shanti Swaroop Reddy")
console.log(x.name())
console.log(class1.hello())