// normally creating

const person = {
    firstName : "Mouniesh",
    lastName : "V",
    age : 20,
    city: "tiruppur"
}

// using the "new" keyword

const person2 = new Object({
    name : "Jeff",
    company : "Amazon",
    office : "Banglore",
    position : "CEO"
})

const person3 = {}

// Accessing Javascript Properties


// Creating new Properties
person3.name = "mark"
person3.company = "facebook"


// Modifying Properties

person3.name = "Zuckerberg" 
            // or
person3["name"] = "Mark"

console.log(person3);

// Deleting Properties

delete person3.company


// Methods -> adding an function to the objects

person.makeUppercase = function () {
    return (this.firstName + " " + this.lastName).toUpperCase()
}

console.log(person);
console.log(person.makeUppercase());
console.log(person.makeUppercase);


// Displaying the objects -> 

// in loop (for ... in)

text = ""
for (const p in person){
    text += person[p] + " "
}

console.log(text);


// Object.values()

const newArray = Object.values(person)
const makeString = newArray.toString()
console.log(makeString);


// Object.entries()

let yext = ""
for(let [first, value] of Object.entries(person3)){
     yext += first + ": " + value + "<br>";
}

console.log(yext);


const student = {
    name : "Sringa",
    dept : "CSE",
    phone : 9897680766,
    city : "Tiruppur"
}

console.log(student);
console.log(student.city);

const nArray = Object.values(student)
const nString = nArray.toString

console.log(typeof nArray);
console.log(nArray);
console.log(typeof nString);
console.log(nString);

// (VAR) Redeclaration
var x = 10
var x = 90

// Reassignment 
var y = 100
y = 900

// (LET) do not allow redeclaration

let x1 = 70
// let x1 = 78

// allow reassignment
let x2 = 90
x2 = 30












