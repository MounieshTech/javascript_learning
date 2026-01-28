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








