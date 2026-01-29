// array = []

// Key characteristics : Zero Based index, dynamic size, ordered, heterogenous


const array = []
console.log(typeof array);


// Assigning element

array[0] = "Mouniesh"
array[1] = "Kage"
array[2] = "Jake"

console.log(array);


const convertString = array.toString()
console.log(convertString);


// Accessing an Element

console.log(array[0]);


// Adding an Element

array.push("Ryzen")
array.push("AMD")
array.push("intel")

console.log(array);

console.log(array.length)
array[100] = "SnapDragon"

console.log(array);


// TO check if the declared variable is an array

console.log(Array.isArray(array));

console.log((array instanceof Array));


// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// ARRAY METHODS


// length
const techArray = ['Samsung', 'Nokia', 'Oneplus', 'Qualcomm', 'Snapdragon']
console.log(techArray);

console.log(techArray.length);

techArray.length = 5 // set an length of an array

console.log(techArray.length);
console.log(techArray);


//toString()

console.log(techArray.toString());


// at

console.log(techArray.at(1));
console.log(techArray.at(2)); // same as below one

console.log(techArray[1]);

console.log("Last ele in array: ", techArray.at(-1));

// join

const newTechArray = techArray.join("*")
console.log(newTechArray);

// shift (pop) and unshift (push)

techArray.shift()

console.log(techArray);

techArray.unshift("Hathway")

// concat arrays

const products = ['mouse', 'laptop', 'keyboard']
const hardware = ['motherboard', 'IC', 'EDP Cable']

const newLaptop = products.concat(hardware)
console.log(newLaptop);

const newLaptopAssemble = [...products, ...hardware]
console.log(newLaptopAssemble);

// copyWithin

techArray.copyWithin(2, 0, 2)

console.log(techArray);


// flattening process

const tier1 = [[2,4], [1,9], [5,6]]
const flat1 = tier1.flat()

console.log(flat1);

const tier2 = [1,2,3,4,5,6]
const flat2 = tier2.flatMap((x) => [x])

console.log(flat2);

























