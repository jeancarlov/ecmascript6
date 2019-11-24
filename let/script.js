"use strick";

// ES6 let


// var has plenty of scoping issues because it was not clear where to use the var when dealing with variables

// let allows to use this variable within the same block that is declare

 

function theNotebook() {
    let movie = "The theNotebook";
    return movie
}

console.log(theNotebook()); //movie


// sample 2

function test2() {
    let science = true;
    let physics = 'physics is fun';
    console.log('\nBefore if', physics);
    
    if (science){
        let physics= 'I am learning';
        console.log('inside if', physics);

    }
    console.log('After if', physics);

}
test2();
console.log(test2(true)); // undefined

