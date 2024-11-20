// エラーメッセージを格納する配列を定義
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

let masterTable = [
  [["商品コード"], ["商品名"], [""], [""], [""]],
  [["0001"], ["チョコレート"], ["詳細"], ["更新"], ["削除"]],
  [["0002"], ["クッキー"], ["詳細"], ["更新"], ["削除"]],
  [["0003"], ["ビスケット"], ["詳細"], ["更新"], ["削除"]],
  [["0004"], ["おかき"], ["詳細"], ["更新"], ["削除"]],
  [["0005"], ["ガム"], ["詳細"], ["更新"], ["削除"]],
];

// 「ログアウト」が押下された時の処理
document.getElementById("logout").addEventListener("click", function () {
  window.location.href = "../Login.html";
});

// 「戻る」が押下された時の処理
document.getElementById("back").addEventListener("click", function () {
  window.location.href = "Menu.html";
});

// 「検索」が押下された時の処理
document.getElementById("search").addEventListener("click", function () {
  // エラーメッセージ格納用配列を初期化
  errorMessageList = [];

  // キーワードの値を取得
  let keyWord = document.getElementById("keyWord").value;

  // ラジオボタンの要素を取得
  let isCodeSelected = document.getElementById("code").checked;
  let isNameSelected = document.getElementById("name").checked;

  // 条件分岐(商品コード/商品名が選択されている場合)
  if (isCodeSelected) {
    // エラーチェック関数の呼び出し
    chackLength(keyWord, "商品コード", 10);
    isNumber(keyWord, "商品コード");
  } else if (isNameSelected) {
    // エラーチェック関数の呼び出し
    chackLength(keyWord, "商品名", 50);
  } else {
    alert("ラジオボタンを選択してください");
  }

  if (errorMessageList.length > 0) {
    alert(errorMessageList);
  } else {
    // テーブルの各要素を取得
    let thead = document.getElementById("thead");
    let tbody = document.getElementById("tbody");

    // 無限に生成されないようにテーブルの値をリセット
    tbody.innerHTML = "";
    thead.innerHTML = "";

    // テーブルの行タグを作成
    let headerRow = document.createElement("tr");
    let bodyRow = document.createElement("tr");

    // テーブルの行タグの位置を指定
    thead.appendChild(headerRow);

    for (i = 0; i < 5; i++) {
      let th;
      th = document.createElement("th");
      th.innerText = masterTable[0][i];
      headerRow.appendChild(th);
    }

    // テーブルのボディ部分を作成
    for (i = 1; i < 6; i++) {
      bodyRow = document.createElement("tr");
      for (j = 0; j < 5; j++) {
        let td = document.createElement("td");

        // 配列の文字列が"詳細"の場合は要素に詳細ボタンを追加する
        if (masterTable[i][j] == "詳細") {
          let detailButton = document.createElement("button");
          detailButton.innerHTML = "詳細";
          td.appendChild(detailButton);
          detailButton.addEventListener("click", function () {
            window.location.href = "ShohinDetail.html";
          });
        }
        // 配列の文字列が"更新"の場合は要素に詳細ボタンを追加する
        else if (masterTable[i][j] == "更新") {
          let updateButton = document.createElement("button");
          updateButton.innerHTML = "更新";
          td.appendChild(updateButton);
          updateButton.addEventListener("click", function () {
            window.location.href = "ShohinUpdate.html";
          });
        }
        // 配列の文字列が"削除"の場合は要素に詳細ボタンを追加する
        else if (masterTable[i][j] == "削除") {
          let deleteButton = document.createElement("button");
          deleteButton.innerHTML = "削除";
          td.appendChild(deleteButton);
          deleteButton.addEventListener("click", function () {
            window.location.href = "ShohinDeleteConfirm.html";
          });
        } else {
          td.innerText = masterTable[i][j];
        }
        bodyRow.appendChild(td);
      }
      tbody.appendChild(bodyRow);
    }
  }
});

// 「新規登録」が押下された時の処理
document.getElementById("toShohinNew").addEventListener("click", function () {
  window.location.href = "ShohinNew.html";
});
