// Arrays and Objects

const numbers = [10, 20, 30, 40];

numbers.push('Paradise')
numbers.push('Parotta')
numbers.push('Korean Chips')
numbers.push('Ragi')
numbers.pop()


numbers.shift()
numbers.unshift('Ragi')

console.log(numbers);


// map, filter, reduce

const doubled = numbers.map((nun) => nun * 2)
console.log(numbers);

const don = numbers.filter(nun => nun > 20)

console.log(doubled);
console.log(don);


// forEach, find, findIndex

numbers.forEach((nun) => nun * 2)

console.log(numbers);




// Object Literals and Object Properties

const user = {
    username : 'Ajay',
    age : 45,
    'profile-pic' : 'pic-jpg',
    isActive : false
}

user.username = 'Ajayan'
delete user.isActive


// Object Destructuring 

const { username, age } = user


console.log(username, age)




// rest operator - used left side for destructuring the object properties 

const person = {
  name: "Sara",
  age: 28,
  city: "Madurai",
  role: "designer",
  active: true
};

const { name, ...rest} = person
console.log(rest);



// spread operator - used right side for unpacking expand for the iterables

const arrayOb = [10, 20, 30, 40]
const arrayOa = [50, 60, 70, 80]


const cops = [...arrayOa, ...arrayOb]
console.log(cops);


// Shallow Copy - spread ops













