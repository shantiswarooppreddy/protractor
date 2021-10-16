var string = "Apple, Banana, Kiwi";
var string1 = new String("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

console.log(string1.length)
console.log(string.slice(7, 13))
console.log(string1.toLowerCase())
console.log(string.toUpperCase())
console.log(string.substring(7, 13))
console.log(string.slice(-12, -6))
console.log(string.includes("Banana", 5))
console.log(string1.charAt(8))
console.log(" Hello World! ".trim())
console.log(string.concat(string1))
for(let i = 0; i < string.split(", ").length; i++)
    console.log(string.split(", ")[i])
console.log(string.substr(7))
console.log(string.substr(7, 6))
console.log(string.startsWith("A"))
console.log(string.endsWith("i"))