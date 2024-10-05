import 'animate.css';

// ここにコードを書きながら確認しましょう！
const title = document.getElementById('title');
const button = document.querySelector('button');
const articleNode = document.querySelectorAll('.card-type')

button.addEventListener('click', () => {
  title.classList.add('animate__hinge');
  setTimeout(() => {
    title.classList.remove('animate__hinge');
    articleNode[0].classList.add('card-animation');
    articleNode[1].style.display = 'block';
    articleNode[1].classList.add('animate__fadeInUp');

    
    /** カードが増えていった場合を想定 */
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