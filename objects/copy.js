// Shallow Copy 

// Object reference -> 

const obj = {
    user : "Mouniesh",
    loginStatus : true
}

// by spread operator

let copy = obj
copy.user = "Ram" // also (copy) poiting to the reference of were the (obj) is pointing 

console.log(obj);
console.log(copy);

// Object.assign

const object2 = {
    name : "Mouniesh",
    address : {
        city : "tiruppur",
        pincode : 641666
    }
}

const shallowAssign = Object.assign({}, object2)

shallowAssign.name = "Elon musk"
shallowAssign.address.city = "coimbatore" // changes the both (object2 and shallowAssign)

console.log(shallowAssign);
console.log(object2);



// Deep copy

// creates an new entire new instance of the object

const object1 = {
    name : "Deep Copy",
    language : "Javascript"
}

// JSON.parse(str())
object1.name = "DEEP DIVE"

const deep_copy = JSON.parse(JSON.stringify(object1))

object1.name = "Changes in the deep copy object"

console.log(object1);
console.log(deep_copy);








