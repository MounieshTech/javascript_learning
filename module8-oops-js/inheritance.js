// Object Oriented Programming Concepts

// Constructor Functions

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


class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    getBook() {
        console.log(`The book "${this.title}" is borrowed by user ${this.id}`);
    }

    printDetailedInfo() {
        console.log(`The Book Name is "${this.title}" and the book was written by ${this.author}`);
    }
}

class Librarian extends Book {
    constructor(id, title, author, genre) {
        super(id, title, author);
        this.genre = genre;
    }

    provideBook() {
        console.log(`The book is given to user ${this.id}`);
    }

    printDetailedInfo() {
        super.printDetailedInfo();
        console.log(`Genre: ${this.genre}`);
    }
}

const book1 = new Book(12, "Harry Potter", "J.K. Rowling");

const book2 = new Librarian(23, "A Song of Ice and Fire", "George R.R. Martin", "Fantasy");

book1.printDetailedInfo();
console.log("");

book2.printDetailedInfo();
console.log("");

book1.getBook();
book2.provideBook();