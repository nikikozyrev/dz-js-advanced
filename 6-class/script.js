"use strict";

class Car {
  #make;
  #model;
  #run;

  constructor(make, model, run) {
    this.#make = make;
    this.#model = model;
    this.#run = run;
  }

  get run() {
    return this.#run;
  }

  set changeRun(run) {
    this.#run = run;
  }

  info() {
    console.log(this.#make, this.#model, this.#run);
  }
}

const car1 = new Car("BMW", "3", 250000);

car1.changeRun = 35000;
console.log(car1.run);
car1.info();
