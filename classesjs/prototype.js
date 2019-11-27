function wizard (name, house, pet){
    this.name = name;
    this.house = house;
    this.pet = pet;

    this.greet = () => `I'm ${this.name} from ${this.house}`
}

let harry = new wizard('harry', 'grif', 'owl')
console.log(harry.greet());

