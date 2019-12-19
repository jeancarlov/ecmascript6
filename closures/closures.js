let call = () => {
    let secrect = "es6 rocks!";
}

// console.log(secrect);// secrect is denied in the global scope

// solution is to use a closure to gain acces to this data with a closure method that reveals data.
// use reveal method from closures to get the secrect varible

let call1 = () => {
    let secrect1 = "es6 rocks for real!";
    let reveal = () => {
        console.log(secrect1);
        
    }
    reveal();
}

call1();

//-----------

