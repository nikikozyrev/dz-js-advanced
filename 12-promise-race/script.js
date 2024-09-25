"use strict";

const prom1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1"), 1000);
});

const prom2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2"), 3000);
});

const prom3 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 3"), 200);
});

function race(arrOfProm) {
  return new Promise((resolve, reject) =>
    arrOfProm.forEach((prom) => prom.then(resolve, reject))
  );
}

const fastestPromice = race([prom1, prom2, prom3]);

console.log(fastestPromice);
