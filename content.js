function initContent() {
  var ztUrl = `./data/${today}/zt.json`;
  $.getJSON(ztUrl, function (data) {
    const tempList = data.data.pool;
    let dataList = [];
    const aMap = {};
    tempList.forEach((item) => {
      if (!item.a) {
        item.a = "其他";
      }
      if (aMap[item.a]) {
        aMap[item.a]++;
      } else {
        aMap[item.a] = 1;
      }
    });
    Object.keys(aMap).forEach((key) => {
      const keyList = tempList.filter((item) => item.a == key);
      dataList = dataList.concat(keyList);
    });
    const numList = [0].concat(Object.values(aMap));
    const indexList = [];
    numList.forEach((num, index) => {
      indexList[index] = [...numList].splice(0, index + 1).reduce((a, b) => a + b);
    });
    console.log(numList, indexList);
    window.vm = new Vue({
      el: "#wrapper",
      data() {
        return {
          noReason: true,
          aMap,
          indexList,
          dataList,
        };
      },
      filters: {
        toFixed(value, n = 2) {
          return value && (value / 100000000).toFixed(n);
        },
        time(value) {
          let str = value.toString();
          if (str.length == 5) str = "0" + str;
          return str.replace(/(.{2})/g, "$1:").slice(0, -1);
        },
      },
      methods: {},
      mounted() {},
      created() {},
    });
  });
}
