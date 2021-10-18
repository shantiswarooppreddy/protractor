class class1
{
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    FirstName() { return this.firstName;}
    LastName() { return this.lastName;}
}
class class2 extends class1 {
    constructor(firstName, middleName, lastName) {
        super(firstName, lastName);
        this.middleName = middleName;
    }
    FullName() { return this.FirstName() + this.middleName + this.LastName() ;}
}
var Name = new class2("Shanti", "Swaroop", "Reddy")
console.log(Name.FullName())

