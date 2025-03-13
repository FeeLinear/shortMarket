function getJson(url, callback) {
  // 申明一个XMLHttpRequest
  var request = new XMLHttpRequest();
  // 设置请求方法与路径
  request.open("get", url);
  // 不发送数据到服务器
  request.send(null);
  //XHR对象获取到返回信息后执行
  request.onload = function () {
    // 返回状态为200，即为数据获取成功
    if (request.status == 200) {
      var data = JSON.parse(request.responseText);
      callback && callback(data);
    }
  };
}

function isHoliday(day) {
  return day.getDay() == 0 || day.getDay() == 6;
}
function jsonp(src, className, callback) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.className = className;
  script.onload = function (data) {
    callback && callback(data)
  };
  document.body.appendChild(script);
}