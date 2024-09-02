"use strict";

function is14YearsOld(birthdayString) {
  const [birthYear, birthMonth, birthDay] = birthdayString.split("-");
  const dateOf14Birthday = new Date(
    `${Number(birthYear) + 14}-${birthMonth}-${birthDay}`
  );
  return Number(new Date()) > Number(dateOf14Birthday);
}

console.log(is14YearsOld("2010-09-03"));
