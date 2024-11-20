// ログインフォームの情報を集める
// デフォルトの動きを止める
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  handleEvent();
});

let errorMessage = document.getElementById("errorMessage");

// クリックしたときの処理
function handleEvent() {
  let userId = document.getElementById("userId").value;
  let password = document.getElementById("password").value;
  errorMessage.textContent = "";
  let checkIdType = /^[a-zA-Z0-9]+$/;
  let checkPasswordType = /^[a-zA-Z0-9]+$/;
  let errorMessages = [];

  // ユーザIDチェック
  if (userId == "") {
    errorMessages.push("ユーザーIDを入力してください。");
  } else if (8 > userId.length || 10 < userId.length) {
    errorMessages.push("ユーザーIDは8文字以上10文字以内で入力してください。");
  }

  if (userId !== "" && !checkIdType.test(userId)) {
    errorMessages.push("ユーザーIDは半角英数字で入力してください。");
  }

  // パスワードチェック
  if (password == "") {
    errorMessages.push("パスワードを入力してください。");
  } else if (
    4 < password.length &&
    21 > password.length &&
    checkPasswordType.test(password)
  ) {
  } else {
    errorMessages.push("パスワードの形式が正しくありません。");
  }

  if (errorMessages.length > 0) {
    alert(errorMessages.join(" / "));
  } else {
    window.location.href = "data/Menu.html";
  }
}
