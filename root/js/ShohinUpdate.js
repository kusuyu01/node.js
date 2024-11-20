// エラーメッセージ格納用の配列を定義
let errorMessageList = [];

// 未入力チェック用関数
function nullCheck(inputValue, itemName) {
  if (inputValue == "") {
    errorMessageList.push(`${itemName}を入力してください`);
  }
}

// 数値以外をエラーをする関数
function isNumber(inputValue, itemName) {
  if (isNaN(inputValue)) {
    errorMessageList.push(`${itemName}は数値のみで入力してください`);
  }
}

// 文字数をチェックする関数
function chackLength(inputValue, itemName, lengthLimit) {
  if (inputValue.length > lengthLimit) {
    errorMessageList.push(
      `${itemName}は${lengthLimit}文字以内で入力してください`
    );
  }
}

// 「ログアウト」が押下された時の処理
document.getElementById("logout").addEventListener("click", function () {
  window.location.href = "../Login.html";
});

// 「戻る」が押下された時の処理
document.getElementById("back").addEventListener("click", function () {
  window.location.href = "ShohinList.html";
});

// 「更新」が押下された時の処理
document.getElementById("update").addEventListener("click", function () {
  // エラーメッセージ格納用の配列をリセット
  errorMessageList = [];

  // ここから各種入力チェック
  // 商品コードの入力チェック(空白・数値・文字数)
  let productCode = document.getElementById("productCode").value;
  nullCheck(productCode, "商品コード");
  isNumber(productCode, "商品コード");
  chackLength(productCode, "商品コード", 10);

  // 商品名の入力チェック（空白・文字数）
  let productName = document.getElementById("productName").value;
  nullCheck(productName, "商品名");
  chackLength(productName, "商品名", 50);

  // 単価の入力チェック（空白・数値・文字数）
  let price = document.getElementById("price").value;
  nullCheck(price, "単価");
  isNumber(price, "単価");
  chackLength(price, "単価", 7);

  // 数量の入力チェック（空白・数値・文字数）
  let quantity = document.getElementById("quantity").value;
  nullCheck(quantity, "数量");
  isNumber(quantity, "数量");
  chackLength(quantity, "数量", 7);

  if (errorMessageList.length == 0) {
    window.location.href = "ShohinUpdateConfirm.html";
  } else {
    alert(errorMessageList);
  }
});
