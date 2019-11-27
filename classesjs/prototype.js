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



// TODO
// * add a 'color' field to the prototype
// * add a 'bio' method that *returns*:
//      A ${this.color} ${this.make} made in ${this.year}.

function Vehicle(make, year) {
    this.make = make;
    this.year = year;

    this.bio = () => `${this.color} ${this.make} made in ${this.year}`

}
  Vehicle.prototype.color;
  //node bio method can be added in this section but it will need a regular function declaration

  let s = new Vehicle("Tesla", 2017);
  s.color = "black";
  console.log(s);
  console.log(s.color);
  let result = s.bio();
  console.log(result); //black Tesla made in 2017

  
