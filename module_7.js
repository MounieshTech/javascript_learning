// Closures 

function greetName(){
    var name = "Mouniesh"
    function callName(){
        console.log(name);
        
    }

    callName()
}
greetName()


if(Math.random() > 0.5){
    var x = 90
}else{
    var x = 9087
}

console.log(x);


function addFunction(x){
    return function(y) {
        return x + y
    }
}

const add6 = addFunction(6)
const add9 = addFunction(9)

console.log(add6(10));
console.log(add9(80));


// Hoisting -> moving on top the declarations during compilation process

//Function Hoisting

addSum(2,7)

function addSum(a, b){
    console.log(a + b);
}


//variable hoisting 

console.log(x2);
var x2 = 23
console.log(x2);


function variableHos(){
    console.log(ret);

    var ret = 89
    console.log(ret);

    function functionHost(){
        return ret + ret
    }

    return functionHost
    
}
const funcHost = variableHos()
console.log(funcHost());


// this keyword 

console.log(this);

const name = "Ryzen"
const obj = {
    name : "Jake",
    greet() {
        console.log(this.name);
    }
}

obj.greet()


// "this" in functions #2

function printThis(){
    console.log(this); // window object
}

// printThis()

"use strict"
function showPrintThis(){
    console.log(this);
}

// showPrintThis()

// "this" in arrow functions #3 (only inherited from the parent)

const variableThis = {
    name : "Mouniesh",
    age : 21,

    greet() {
        console.log("This is regular function ", this.name);
    },

    arrowFunc : () => {
        console.log("Arrow:", this.name, " and the age is ", this.age);
    }
}

variableThis.arrowFunc()
variableThis.greet()




// Prototype

const animal = {
    eats : true,
    walk() {
        console.log("the animal walks around the pit");   
    }
}

const rabbit = {
    jumps : true
}

rabbit.__proto__ = animal

console.log(rabbit.jumps);
console.log(rabbit.eats);
console.log(rabbit.walk());


// function Animal(name){
//     this.name = name
// }

// Animal.prototype.eat = function () {
//     console.log(`${this.name} eats`);
// }

// Animal.prototype.sleep = function () {
//     console.log(`${this.name} sleeps`);
    
// }


// function Dog(name, breed){
//     Animal.call(name)
//     this.breed = breed
// }

// Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.constructor = Dog

// Dog.prototype.bark = function () {
//     console.log(`${this.name} says Woof!`);
    
// }

// const myDog = new Dog("Jimmy", "German Shephard")

// myDog.bark()
// myDog.eat()
// myDog.sleep()

class Animal {
    
    constructor(name, age){
        this.name = name
        this.age = age
    }

    sound() {
        console.log(`The animal ${this.name} is making sound`);
    }

    getInfo(){
        console.log(`The animal name is ${this.name}`);   
    }
}

class Dog extends Animal {
    constructor(name, age, breed){
        super(name, age)
        this.breed = breed
    }

    getInfo() {
        super.getInfo(); 
        console.log(`Breed: ${this.breed}`);
    }
}


const dog3 = new Dog("Sokovia", 10, "Jaguar")

console.log(dog3.getInfo());


// Call()

const persona = {
    person : function (firstName, lastName) {
        console.log(`Printing ${firstName} and ${lastName}`);
        
    }
}

const persona1 = {
    firstName : "Amber",
    lastName : "Heard"
}

const user1 = persona.person.call(persona1, "Amber", "Herd")
console.log(user1);

const persona2 = {
    fullName : function () {
        console.log(`The firstName is ${this.firstName} and the lastName is ${this.lastName}`);
    }
}

const person8 = {
    firstName : "Amber",
    lastName : "herd"
}

console.log(persona2.fullName.call(person8));



// apply()

const numbers = [1,2,3,4,5]

const maxElem = Math.max.apply(null, numbers)
console.log(maxElem);

//bind()

function greetPosition(greeting, name){
    console.log(`${greeting}, ${name}!`);
}


const sayHi = greetPosition.bind(null, "Hey there")
sayHi("Mouniesh")


//Event Loop 

console.log("A : Promise"); // synchronous 

setTimeout(() => {  // timer 
    console.log("B : Promise");
    
})

Promise.resolve().then(() => { // promise 
    console.log("C : Promise");
    
})
console.log("D : Promise"); // synchronous 


// Execution Context -> memory and code

// has two parts -> global and function context

function display() {
    display();
}

// display(); ------ [RangeError: Maximum call stack size exceeded]




// Currying -> calling the functions seperately , if an function contains two parameters it should be called seperately

function distance(start, end){
    return Math.sqrt(Math.pow(end.x - start.x , 2) + Math.pow(end.y - start.y, 2))
}

const resDist = distance({x : 2, y : 3}, {x : 4, y : 8})
console.log(resDist);

const distanceRender = (start) => (end) => Math.sqrt( Math.pow(end.x-start.x, 2) +
                              Math.pow(end.y-start.y, 2) );





// Curried Version

function addCurried(a){
    return function(b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(addCurried(3)(4)(19));

const addCurriedFunction = (a) => (b) => (c) => (d) => {
    return a + b + c + d
}

console.log(addCurriedFunction(80)(90)(100)(98));



// Composition

// combining together the functions 


const add89 = x => x + 89
const subtract = x => x - 10
const mult12 = x => x * 2

const finalResult = add89(subtract(mult12(20)))

console.log(finalResult);











