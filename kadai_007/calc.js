// 任意の数値を変数numに代入する（ここでは10とする）
let num = 15;

// 変数numが3の倍数かつ5の倍数であるか判定する
if (num % 3 === 0 && num % 5 === 0) {
  console.log("3と5の倍数です");
}

// 変数numが3の倍数であるか判定する
else if (num % 3 === 0) {
  console.log("3の倍数です");
}

// 変数numが5の倍数であるか判定する
else if (num % 5 === 0) {
  console.log("5の倍数です");
}
else{
    console.log(num);
}


