// Functions



// declarations

greet("Jero Bro")

function greet(userN){
    console.log(userN);
}

function yourFunc(object){
    object.make = "Audi"
}

const object2 = {
    make : "Toyoto",
    model : "Accord",
    year : "1980",
}

console.log(object2.make);

yourFunc(object2)

console.log(object2.make);

// Function Expression

function add(a,b){
    return a + b
}

const sun = add(2,6)
console.log(sun);

function loginUser() {
    let username = "mouniesh_tech";
    const role = "admin";

    if (true) {
        let tempToken = "xyz123";     // block scope inside if
        console.log(username);        // works (sees outer function variable)
    }

    console.log(username);            // works
    console.log(role);                // works

    // console.log(tempToken);        // Error – block scoped!
}

loginUser();


// Arrow Functions 


const age = (userAge) => {
    console.log(userAge);
}

age(89)


function greetScope(){
    var subject = "JavaScript";

    if(true){
        var globe = "Yoro"
        console.log(subject);  
    }

    console.log(globe);
    
}

function greetScope(){
    console.log("New Function");
    
}

greetScope()





// Callback functions

console.log("Start");

setTimeout(() => {
    console.log("a running function");
} , 3000)

console.log("End");



// IIFE (Immediately Invoked Function Expression)

(function printHello(){
    console.log(67);
}
)()



// Callback Functions

function taskAssign(name , callback){
    setTimeout(() => {
        callback(name)
    }, 2000)
}

taskAssign("Asha", (name) => {console.log(`Hi ${name}`);
})


const numbers = [10, 25, 7, 42, 3];

const sur = numbers.reduce((prev, curr) => prev + curr , 0)
console.log(sur);

const n = [1, 2, 3];
n.forEach((num) => console.log(num * 2));


function greetN(){
    console.log(7);
    
}

const inFunc = function(){
    console.log(89);
}

const arrowFunc = (cFunc) => {
    console.log(8998);
    
}

function cFunc() {
    setTimeout(() => {
        console.log();
    } ,2000)
}

