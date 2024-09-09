"use strict";

const listOfPeople = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

const arrOfId = listOfPeople.map((person) => person.id);
const uniqIdArr = [...new Set(arrOfId)];

const result = [];
for (const id of uniqIdArr) {
  const desiredPerson = listOfPeople.find((person) => person.id === id);
  if (!desiredPerson) {
    continue;
  } else {
    result.push(desiredPerson);
  }
}
console.log(result);
