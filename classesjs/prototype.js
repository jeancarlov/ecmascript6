function wizard (name, house, pet){
    this.name = name;
    this.house = house;
    this.pet = pet;

    this.greet = () => `I'm ${this.name} from ${this.house}`
}

//Change the name pet name from the prototype
wizard.prototype.pet_name;

//Info want is giving an undifined result because arrow function works when the method is define in the prototype scope 
// Therefor the solution is to use a function declaration in info2
wizard.prototype.info1 = () => {
    return ` I have a ${this.pet} named ${this.pet_name}`
}  //I have a undefined named undefined

wizard.prototype.info2 = function () {
    return ` I have a ${this.pet} named ${this.pet_name}`
} // I have a owl named hedwig

let harry = new wizard('harry', 'grif', 'owl');
harry.pet_name= "hedwig";
console.log(harry);
console.log(harry.greet());
console.log(harry.info1()); // I have a undefined named undefined
console.log(harry.info2());  // I have a owl named hedwig


