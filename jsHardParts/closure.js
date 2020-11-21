
function createfunction() {
    function multiplyBy2(num) {
      return num * 2;
    }
    return multiplyBy2;
}

const generatedFunc = createfunction();// start function
const result = generatedFunc(3);// result of the start function close action
console.log(result);




function showName (firstName, lastName) {
let nameIntro = "Your name is ";
// this inner function has access to the outer function's     //variables, including the parameter
function makeFullName () {     
return nameIntro + firstName + " " + lastName;   
}
return makeFullName ();
}
let result3 = showName ("Michael", "Jackson"); // Your name is Michael Jackson
console.log(result3);