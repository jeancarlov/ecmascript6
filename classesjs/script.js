'use strict';

// ES6 classes  

class Person {
    constructor( name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country
    }
    displayCountry(){
        console.log(this.country);
        
    }
}

let mark = new Person('Mark',23,'Spain');
mark.displayCountry(); // spain


// When do you use classes or a stand alone function
// Create a class when i have a code that i need to be selfaware like creating a person object

class Animal {
    constructor(name, height){
        this.name = name;
        this.height = height;
    }
    hello(){
        console.log(`hi this is a ${this.name}`);
        
    }
}

let king = new Animal('Mark', 1.70);
console.log(king); // Animal { name: 'test', height: 1.7 }
king.hello();

// Use contructor to make the class more specific to lion, this allows more information atht he instance declaration
// after height givfe this lion additional data
// use super because it exdtends animal, this will acknowlegde the parent constructor
class Lion extends Animal{
    constructor(name, height, color){
        super(name, height);
        this.color = color;

    }
}

let son = new Lion('simba',2, 'golden');
console.log(son);


//static methods => is a method within a class that can be access without explicitly declaring an instance 
// this comes handy when to create more practical classes as name spaces for methods rather than holding data
// remember this class will be use for its methods rather than the data

class Calculator {
    static multiply(a, b){
        return a*b;
    }
    static add(a, b){
        return a+b;
    }
}

let a = Calculator.multiply(5, 7);
let b = Calculator.add(5, 7);
console.log(a);
console.log(b);
