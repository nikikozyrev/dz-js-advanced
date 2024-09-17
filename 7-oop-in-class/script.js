"use strict";

class Personage {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  speak() {
    console.log(`Привет, я ${this.name}, говорю на языке: ${this.language}`);
  }
}

class Orc extends Personage {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }

  hit() {
    console.log("Тыщ!");
  }

  speak() {
    console.log(
      `Привет, я ${this.name}, говорю на языке: ${this.language}, у меня есть оружие: ${this.weapon}`
    );
  }
}

class Elf extends Personage {
  constructor(race, name, language, spell) {
    super(race, name, language);
    this.spell = spell;
  }

  conjure() {
    console.log("Заклинание!");
  }

  speak() {
    console.log(
      `Привет, я ${this.name}, говорю на языке: ${this.language}, владею заклинанием: ${this.spell}`
    );
  }
}
