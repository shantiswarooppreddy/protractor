var a = [1, 2, -3, 4, -5, -10, 11, 15]
console.log(Math.min.apply(null, a))
console.log(Math.max.apply(null, a))
console.log(a.every(function(item){ return item > 0}))
console.log(a.some(function(item){ return item > 10}))
console.log(a.find(function(item){ return item > 0}))
console.log(a.indexOf(11))
console.log(a.lastIndexOf(15))
console.log(a.includes(87))
a = ["car" , "A7", "model" ,"AUDI"]
const x = a.keys()
for(let y of x)
{
    console.log(a[y])
}