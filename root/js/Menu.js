
// 「ログアウト」が押下された時の処理
const logout = document.getElementById('logout');
logout.addEventListener('click', function() {
  window.location.href = '../Login.html';
});

// 「商品マスタメンテ」が押下された時の処理
const toShohinList = document.getElementById('productMaintenance');
toShohinList.addEventListener('click', function() {
  window.location.href = 'ShohinList.html';
});
