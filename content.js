function initContent() {
  console.log("initContent", $);
  var ztUrl = `./data/${today}/zt.json`;
  // jsonp(ztUrl, "", function () {});
  $.getJSON(ztUrl, function (data) {
    console.log(data, "ddd");
    $("#wrapper").html(data.svr)
  });
}
