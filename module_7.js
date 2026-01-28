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







