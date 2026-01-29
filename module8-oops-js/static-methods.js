class MathUtils {
    static PI = 3.14159;

    // Static methods

    static circleArea(radius) {
        return MathUtils.PI * radius * radius;
    }

    static circumference(radius) {
        return 2 * MathUtils.PI * radius;
    }
}

// Only Accessible via Class Names

console.log(MathUtils.circleArea(20));
console.log(MathUtils.circumference(20));
console.log(MathUtils.PI);


class Product {
    #price = 0

    constructor(price){
        this.price = price
    }

    get price(){
        return this.#price
    }

    set price(value){
        if(value < 0) throw new Error("Value should'nt be negative")
        
        this.#price = Number(value)
    }
}

const phone = new Product(15000);
console.log(phone.price); // getter  

phone.price = 18000; // calls setter
// phone.price = -500;
