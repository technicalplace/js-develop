// ここにコードを書きながら確認しましょう！












// 練習問題
// 問題 1
function arrayFn(arg) {
  return ['jQuery', 'Vue', arg];
}

const [first, second, third] = arrayFn('React');
console.log(third);
// 問題 2
function objectFn({name: companyName}) {
  console.log(companyName);
}

const argObject = {
  name: 'Gizumo',
  place: 'Shibuya',
};

objectFn(argObject);
