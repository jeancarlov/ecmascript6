class Instrument {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  }
  
  class Guitar extends Instrument {
    describe() {
      return `I'm a ${this.name} fromt he ${this.type} family `// TODO fill this line
    }
  }

  let fender = new Guitar( 'Fender', 'strings');
  let result = fender.describe();
  console.log(result);
  console.log(fender);
  
 
  
  // answer should => i'm a Fender fromt he strings family