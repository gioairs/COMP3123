// Lab 2 by Gio Lavilla 101411474 

// Exercise 1
console.log("-----" + " Function One" + "-----")
const greeter = (myArray) => {
    let greetText = 'Hello, ';

    for (i = 0; i < myArray.length; i++){
        console.log(greetText + myArray[i])
    }
}
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);


// Exercise 2
console.log("-----" + " Function Two" + "-----")
function firstLetter(str) {
    const [firstChar, ...rest] = str;
    return [firstChar.toUpperCase(), ...rest].join('');
}
console.log(firstLetter('foobar'))
console.log(firstLetter('nodejs'))


// Function Three
console.log("-----" + " Function Three" + "-----")
const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors);
function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};


// Function Four
console.log("-----" + " Function Four" + "-----")
function lessThanTwenty(value) {
    return value < 20;
}
const numbers = [1, 60, 34, 30, 20, 5];
const filteredNumbers = numbers.filter(lessThanTwenty);
console.log(filteredNumbers);


// Function Five
console.log("-----" + " Function Five" + "-----")
const nums = [1, 2, 3, 4];

const sum = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); 

const product = nums.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);

console.log('Sum:', sum);
console.log('Product:', product);


// Function Six 
console.log("-----" + " Function Six" + "-----")
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        return(`Model: ${this.model}, Year: ${this.year}`);
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year); 
        this.balance = balance;
    }

    displayInfo() {
        super.displayInfo();
        return(`Balance: $${this.balance}`);
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.displayInfo());
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.displayInfo())


