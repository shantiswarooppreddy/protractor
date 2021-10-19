let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if(a == 2) { resolve("Success") }
    else { reject ("Failed") }
})

p.then((message) => {
    console.log("We are in the then block with the message " + message)
}).catch((message) => {
    console.log("We are in the then catch with the message " + message)
})