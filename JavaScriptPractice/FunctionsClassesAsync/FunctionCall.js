var x = {
    car: "Audi",
    type: "A7",
    carDetails : function()
    {
        return (this.car + " " + this.type);
    }
}
console.log(x.carDetails())
console.log(x.carDetails.call(x))