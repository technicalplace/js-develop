// 必要な関数をモジュールからインポートする
import {
  $axios
} from "./axiosHelper";
import {
  createElements,
  createErrorElement
} from "./createElement";

window.addEventListener('DOMContentLoaded', () => {
  // ここに処理を書いていく
  const displayElement = document.getElementById('list');
  // ポケモン取得
  $axios('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(({
      data
    }) => {
      data.results.forEach(({
        url
      }) => {
        // ポケモン詳細情報取得
        $axios(url)
          .then(({
            data
          }) => {
            const imgPath = data.sprites.other["official-artwork"].front_default;
            // ポケモン日本語名取得
            $axios(data.species.url)
              .then(({
                data
              }) => {
                const jaPokemonName = data.names.find((object) => object.language.name === 'ja').name;
                // ポケモン表示HTML
                const pokemonElement = `<li class="list-item">
                                      <div class="character">
                                        <img src=${imgPath} width="475" height="475" alt="" class="character__img">
                                      </div>
                                      <p class="character__name">${jaPokemonName}</p>
                                    </li>`

                const fragment = createElements(pokemonElement);
                displayElement.appendChild(fragment);
              })
              .catch((error) => {
                displayElement.before(createErrorElement(error));
              })
          })
          .catch((error) => {
            displayElement.before(createErrorElement(error));
          })
      })
    }).catch((error) => {
      displayElement.before(createErrorElement(error));
    })
});