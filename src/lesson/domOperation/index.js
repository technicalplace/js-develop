import 'animate.css';

// ここにコードを書きながら確認しましょう！
const title = document.getElementById('title');
const button = document.querySelector('button');
// const nodeType = document.querySelectorAll('.card-type')[0];
// const cardEvent = document.querySelectorAll('.card-type')[1];
const articleNode = document.getElementsByClassName('card-type')

button.addEventListener('click', () => {
  title.classList.add('animate__hinge');

  setTimeout(() => {
    title.classList.remove('animate__hinge');
    // nodeType.classList.add('card-animation');
    // cardEvent.style.display = 'block';
    // cardEvent.classList.add('animate__fadeInUp');
    Array.from(articleNode).forEach(element => {
      const className = element.getAttribute('class');

      if (className.includes('card-type--mocha')) {
        element.classList.add('card-animation');
      } else if (className.includes('card-type--yellow')) {
        element.style.display = 'block';
        element.classList.add('animate__fadeInUp');
      }
    });
  }, 2000)
})





// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑