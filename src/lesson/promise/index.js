// ここにコードを書きながら確認しましょう！












// 練習問題
// 問題 1
const returnPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('エラーが発生しました');
    }, 3000);
  });
};

returnPromise().catch((err) => {
  console.log(err);
});