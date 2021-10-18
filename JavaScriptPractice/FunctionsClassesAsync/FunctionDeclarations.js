function Add(a, b) { return (a + b);}
console.log(Add(1,5))
const Sub = function(a, b){ return (a - b); }
console.log(Sub(5, 1))
const Mul = new Function("a", "b", "return a * b")
console.log(Mul(3, 5))
const Div = (a, b) => { return a/b ; }
console.log(Div(15, 3))

