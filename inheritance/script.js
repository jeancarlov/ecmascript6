// es6 inheritance
// use the keyword extend


// This the superclass(parent)
class Person {
    constructor( name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country
    }
    displayName(){
        console.log(this.name);
        
    }
    displayAge(){
        console.log(this.age);
        
    }
    displayCountry(){
        console.log(this.country);
        
    }
}

// This is the child 
class student extends Person{

    constructor(name, age, country, language){
        super( name, age, country);
        this.language = language; 
    }
}

let marta = new Person ('marta',21, 'python');
console.log(marta); // Person { name: 'marta', age: 21, country: 'python' }
