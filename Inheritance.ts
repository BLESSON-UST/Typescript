class Animal {
    name: string;
    age: number;
    sound: string;
  
    constructor(name: string, age: number, sound: string) {
      this.name = name;
      this.age = age;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(this.sound);
    }
  }
  
  class Mammal extends Animal {
    numberOfLegs: number;
  
    constructor(name: string, age: number, sound: string, numberOfLegs: number) {
      super(name, age, sound);
      this.numberOfLegs = numberOfLegs;
    }
  
    giveBirth() {
      console.log(`${this.name} gives birth to live young.`);
    }
  }
  
  class Bird extends Animal {
    wingspan: number;
  
    constructor(name: string, age: number, sound: string, wingspan: number) {
      super(name, age, sound);
      this.wingspan = wingspan;
    }
  
    fly() {
      console.log(`${this.name} takes off into the sky!`);
    }
  }
  
  class Fish extends Animal {
    habitat: string;
  
    constructor(name: string, age: number, sound: string, habitat: string) {
      super(name, age, sound);
      this.habitat = habitat;
    }
  
    swim() {
      console.log(`${this.name} swims through the ${this.habitat}.`);
    }
  }
  
  // Example usage:
  const dog = new Mammal("Buddy", 5, "woof", 4);
  dog.makeSound(); // Output: "woof"
  dog.giveBirth(); // Output: "Buddy gives birth to live young."
  
  const eagle = new Bird("Aquila", 3, "screech", 72);
  eagle.makeSound(); // Output: "screech"
  eagle.fly(); // Output: "Aquila takes off into the sky!"
  
  const salmon = new Fish("Sammy", 2, "blub", "river");
  salmon.makeSound(); // Output: "blub"
  salmon.swim(); // Output: "Sammy swims through the river."
  