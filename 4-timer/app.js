"use strict";

const monthsList = ["месяц", "месяца", "месяцев"];
const daysList = ["день", "дня", "дней"];
const hoursList = ["час", "часа", "часов"];
const minutesList = ["минута", "минуты", "минут"];
const secondsList = ["секунда", "секунды", "секунд"];

const pluralize = (count, list) => {
  let word;
  const j = count % 10;
  if (j === 1 && count !== 11) {
    word = list[0];
  } else if (j >= 2 && j <= 4 && (count < 12 || count > 14)) {
    word = list[1];
  } else {
    word = list[2];
  }
  return String(count).padStart(2, "0") + " " + word;
};

const newYear = new Date().getFullYear() + 1;
const newYearDate = Number(new Date(newYear, 0, 1, 0, 0, 0));

setInterval(() => {
  const now = Number(new Date());
  const diff = newYearDate - now + 100;
  const months = Math.floor(diff / 2592000000);
  const days = Math.floor((diff - months * 2592000000) / 86400000);
  const hours = Math.floor(
    (diff - months * 2592000000 - days * 86400000) / 3600000
  );
  const minutes = Math.floor(
    (diff - months * 2592000000 - days * 86400000 - hours * 3600000) / 60000
  );
  const seconds = Math.floor(
    (diff -
      months * 2592000000 -
      days * 86400000 -
      hours * 3600000 -
      minutes * 60000) /
      1000
  );

  document.querySelector("#result").innerText = `${pluralize(
    months,
    monthsList
  )}, ${pluralize(days, daysList)}, ${pluralize(hours, hoursList)}, ${pluralize(
    minutes,
    minutesList
  )}, ${pluralize(seconds, secondsList)}`;
}, 1000);
