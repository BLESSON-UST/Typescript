import * as readline from 'readline';

class Car {
  make: string;
  model: string;
  year: number;
  currentSpeed: number;

  constructor(make: string, model: string, year: number, currentSpeed: number = 0) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.currentSpeed = currentSpeed;
  }

  accelerate() {
    this.currentSpeed += 10;
    console.log(`Current speed: ${this.currentSpeed} mph`);
  }

  decelerate() {
    if (this.currentSpeed > 0) {
      this.currentSpeed -= 10;
    }
    console.log(`Current speed: ${this.currentSpeed} mph`);
  }

  stop() {
    this.currentSpeed = 0;
    console.log(`Car stopped. Current speed: ${this.currentSpeed} mph`);
  }
}

async function driveCar() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const car = new Car('Toyota', 'Camry', 2022);

  while (true) {
    const action = await new Promise<string>((resolve) => {
      rl.question("Enter an action (accelerate, decelerate, stop, or exit): ", (answer) => {
        resolve(answer.trim());
      });
    });

    if (action === "accelerate") {
      car.accelerate();
    } else if (action === "decelerate") {
      car.decelerate();
    } else if (action === "stop") {
      car.stop();
    } else if (action === "exit") {
      break;
    } else {
      console.log("Invalid action.");
    }
  }

  rl.close();
}

driveCar();
