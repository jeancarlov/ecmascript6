'use strict';

// ES6 classes  

class person {
    constructor( name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country
    }
    displayCountry(){
        console.log(this.country);
        
    }
}

let mark = new person('Mark',23,'Spain');
mark.displayCountry(); // spain


// When do you use classes or a stand alone function
// Create a class when i have a code that i need to be selfaware like creating a person object