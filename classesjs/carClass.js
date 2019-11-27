class Car {
    constructor(owners, model, make, year){
        this.owners = owners;
        this.model =model;
        this.make = make;
        this.year = year;    
    }
    displayOwners(){
        console.log(`${this.owners} is the owner of this beautiful automovil`);
    }
}

let vehicle1 = new Car ('Mark', 'chevrolet', 'spark', 2018);
vehicle1.displayOwners();
console.log(vehicle1);




