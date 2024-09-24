"use strict";

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Ваш браузер не поддерживает геолокацию"));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              reject(new Error("Пользователь отклонил запрос на геолокацию."));
              break;
            case error.POSITION_UNAVAILABLE:
              reject(new Error("Информация о местоположении недоступна."));
              break;
            case error.TIMEOUT:
              reject(
                new Error(
                  "Запрос на получение местоположения пользователя истек."
                )
              );
              break;
            case error.UNKNOWN_ERROR:
              reject(new Error("Произошла неизвестная ошибка."));
              break;
          }
        }
      );
    }
  });
}

getCurrentLocation()
  .then(
    (position) => {
      document.getElementById(
        "body"
      ).innerText = `Ваши координаты: ${position.coords.latitude}, ${position.coords.longitude}`;
    },
    (error) => {
      document.getElementById("body").innerText = `${error}`;
    }
  )
  .catch((error) => (document.getElementById("body").innerText = `${error}`));
