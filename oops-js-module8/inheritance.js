// Object Oriented Programming Concepts


function Person(name, age){
    this.name = name
    this.age = age

    this.greet = () => {
        console.log("This is an Constructor function", this.name, " and with the age of ", this.age)
    }
}

const user1 = new Person("Mouniesh", 20)
const user2 = new Person("Ram Prasath", 20)


user1.greet()
user2.greet()

function Student(id, name, dept, clgName){
    this.id = id
    this.name = name
    this.dept = dept
    this.clgName = clgName


    this.printInfo = function () {
        console.log(`I'm ${this.name} from ${this.clgName} and my department is ${this.dept} with the id ${this.id}`);
    }
}

const student1 = new Student(1, "Mouniesh", "CSE", "KPR")
student1.printInfo()


// ES6 Classes


class BlueprintAnimal {
    constructor(name , breed){
        this.name = name
        this.breed = breed
    }

    walk = () => {
        console.log(`The ${this.name} is walking`);
        
    }

    printDetailedInfo = () => {
        console.log(`My dog name is ${this.name} and the breed is ${this.breed}`);
    }
}

class Dog extends BlueprintAnimal{
    constructor(name, breed, address){
        super(name, breed)
        this.address = address
    }

    walk = () => {
        console.log(`The ${this.name} walking in the street ${this.address}`);
    }

    sleep = () => {
        console.log(`The ${this.name} with the breed ${this.breed}, sleeping in the home address ${this.address}`);
    }

    printDetailedInfo = () => {
        console.log(``);
        
    }
}

class Cat extends BlueprintAnimal{
    constructor(name, breed){
        super(name, breed)
    }

    walk = () => {
        console.log(`The logging of ${this.breed} and the ${this.name}`);
        
    }
}

const dog1 = new Dog("henry", "kirmada", "Jana Nayagan")

const cat1 = new Cat("Meow", "Persian cat")
cat1.walk()

console.log(dog1.printDetailedInfo());
console.log(dog1.sleep());





