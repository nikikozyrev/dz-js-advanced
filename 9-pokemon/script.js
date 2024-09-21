"use strict";

const request = new XMLHttpRequest();
request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
request.send();

request.addEventListener("load", function () {
  const pokemonDitto = JSON.parse(this.responseText);
  const dittosFirstAbilityUrl = pokemonDitto.abilities[0].ability.url;

  const request = new XMLHttpRequest();
  request.open("GET", dittosFirstAbilityUrl);
  request.send();

  request.addEventListener("load", function () {
    const dittosFirstAbility = JSON.parse(this.responseText);
    console.log(
      dittosFirstAbility.effect_entries.find((el) => el.language.name === "en")
        .effect
    );
  });
});
