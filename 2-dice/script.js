"use strict";

// варианты передаваемого значения: 4, 6, 8, 10, 12, 16, 20.

const rollDice = (size) => Math.floor(Math.random() * size) + 1;

console.log(rollDice(4));
