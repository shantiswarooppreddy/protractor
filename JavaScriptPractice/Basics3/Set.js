var a = new Set()
a.add("a")
a.add("b")
a.add("c")
a.add("d")

a.forEach(function(value) { console.log(value)})

a.delete("c")
console.log(a.has("c"))
for(let x of a.values())
    console.log(x)