

// Method Overloading (not natively supported) -> possible to implement manually 
// Compile time polymorphism

class Calculator {
    constructor(a, b){
        this.a = a
        this.b = b
    }

    getResults() {
        console.log("The results will be shown as : ", this.a+this.b);
    }

    add(a, b) {
        return this.a + this.b
    }

    add(a, b, c){
        return a + b + c
    }
}



const calc = new Calculator(2, 9)
calc.getResults()
calc.add(89,89)
calc.add()



//Method Overloading -> Run time polymorphism

class Student {
    constructor(name , age, phone){
        this.name = name
        this.age = age
        this.phone = phone
    }

    getDetails(){
        console.log(`The student details are ${this.name} and their age is ${this.age} and his phone ${this.phone}`);
        
    }
}

class Department extends Student {
    constructor(name , age, phone, dept){
        super(name, age, phone)
        this.dept = dept
    }

    getDetails(){
        console.log(`The student details are ${this.name} and their age is ${this.age} and his phone ${this.phone} comes from the department ${this.dept} `);
        
    }
}


const stud1 = new Department("Mouniesh", 20, 8148799097 , "CSE")
stud1.getDetails()