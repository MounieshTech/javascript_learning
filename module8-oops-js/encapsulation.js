// Encapsulation


class BankAccount {

    #balance = 0
    #accountNumber

    constructor(initialBalance = 0, accNumber) {
        if (initialBalance < 0) throw new Error("Balance cannot be negative");
        this.#balance = initialBalance;
        this.#accountNumber = accNumber;
    }



    deposit(amount){
        if(amount <= 0) throw new Error("Amount should greater than 0")
        this.#balance += amount
        console.log(`The deposited amount is ${amount} . New Balance : ${this.#balance}`);
    }

    withdraw(amount){
        if(amount <= 0) throw new Error("Insufficient Balance")
        if (amount > this.#balance) throw new Error("Insufficient funds");

        this.#balance -= amount
        console.log(`Withdrew ₹${amount}. New balance: ₹${this.#balance}`);
        
    }

    get balance() {
        return this.#balance;
    }
}


const acc1 = new BankAccount(5000, "ACC_001")
acc1.deposit(200)
acc1.deposit(1000)
acc1.withdraw(100)



