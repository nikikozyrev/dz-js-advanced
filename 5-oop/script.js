"use script";

const Personage = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Personage.prototype.speak = function () {
  console.log(`Привет, я ${this.name}, говорю на языке: ${this.language}`);
};

const Orc = function (race, name, language, weapon) {
  Personage.call(this, race, name, language);
  this.weapon = weapon;
};

Orc.prototype = Object.create(Personage.prototype);

Orc.prototype.hit = function () {
  console.log("Тыщ!");
};

const Elf = function (race, name, language, spell) {
  Personage.call(this, race, name, language);
  this.weapon = spell;
};

Elf.prototype = Object.create(Personage.prototype);

Elf.prototype.conjure = function () {
  console.log("Заклинание!");
};
