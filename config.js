// 學生頁（index.html）與後台（admin.html）共用的設定
window.APP_CONFIG = {
  // GAS 部署後的網頁應用程式網址（結尾是 /exec）
  API_URL: 'https://script.google.com/macros/s/你的部署ID/exec',

  // 學生頁網址。留空會自動使用與 admin.html 同一層的 index.html
  STUDENT_URL: ''
};
