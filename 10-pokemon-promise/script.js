"use strict";

function getData(url, errorText) {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(errorText);
    }
    return res.json();
  });
}

getData(
  "https://pokeapi.co/api/v2/pokemon/ditto",
  "Данные о покемоне Ditto получить не удалось"
)
  .then((res) => {
    const dittosFirstAbilityUrl = res.abilities[0].ability.url;
    getData(
      dittosFirstAbilityUrl,
      "Данные о способностях Ditto получить не удалось"
    ).then((res) =>
      console.log(
        res.effect_entries.find((el) => el.language.name === "en").effect
      )
    );
  })
  .catch((error) => console.error(error));
