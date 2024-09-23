import axios from 'axios';
import {
  createErrorElement,
  createElements
} from './createElement.js';


window.addEventListener('DOMContentLoaded', () => {
  const formElement = document.forms['search-form'];

  formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    // Nodeと図鑑番号の取得
    const characterElement = document.getElementById('character');
    const messageElement = document.getElementById('error-message');
    const pictureBookId = formElement.elements['id'].value;

    if (messageElement !== null) messageElement.remove();
    while (characterElement.lastChild) {
      characterElement.removeChild(characterElement.lastChild);
    }
    

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pictureBookId}`)
      .then(({
        data
      }) => {
        // ポケモンの画像url
        const imgPath = data.sprites.other["official-artwork"].front_default;
        // 日本語訳のリクエスト先url
        const jaRequestUrl = data.species.url;
        // ポケモン名の日本語訳を取得するためにAPIリクエスト
        axios.get(jaRequestUrl).then(({
          data
        }) => {
          // ポケモン名の日本語訳
          const characterName = data.names.find((object) => object.language.name === 'ja').name;

          //取得したポケモンの情報をもとに表示するHTML要素を作成
          const imgElement = `<img src="${imgPath}" width="475" height="475" alt="" class="character__img">`;
          const nameElement = `<p class="character__name">${characterName}</p>`;
          const fragment = createElements(imgElement + nameElement);

          // 作成したHTML要素をDOMに反映
          characterElement.appendChild(fragment);
        }).catch(() => {
          formElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
        })
      }).catch((error) => {
        console.log(error);
        console.log(error.response, error.response.status)
        switch (error.response && error.response.status) {
          case 404:
            formElement.after(createErrorElement(error.message));
            break;
          default:
            formElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
            break;
        }
      })
  })
})