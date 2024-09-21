// ここにコードを書きながら確認しましょう！











// 練習問題
// 問題 1
const array = [
  {
    tag: 'p',
    className: 'hoge',
  },
  {
    tag: 'div',
    className: 'fuga',
  },
  {
    tag: 'h1',
    className: 'piyo',
  },
];

// 1通り目
const newArray = array.map(({ tag, className: prevClassName }) => {
  return {
    tag,
    className: `c-${prevClassName}`
  }
})

// 2通り目
// const newArray = array.map((value) => {
//   return {
//     ...value,
//     className: `c-${value.className}`
//   }
// })

// 3通り目
// const newArray = array.map(({tag, className: prevClassName}) => ({
//     tag,
//     className: `c-${prevClassName}`
// }))

console.log(newArray);