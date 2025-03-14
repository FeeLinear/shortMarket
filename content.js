function initContent() {
  getZTData();
}
function getZTData() {
  var ztUrl = `./data/${today}/zt.json`;
  $.getJSON(ztUrl)
    .done(function (data) {
      renderContent(data);
    })
    .fail(function (err) {
      getZTDataFromServer();
    });
}
function getZTDataFromServer() {
  const ztUrl = `https://push2ex.eastmoney.com/getTopicZTPool?cb=ztCallback&ut=7eea3edcaed734bea9cbfc24409ed989&dpt=wz.ztzt&Pageindex=0&pagesize=500&sort=zttj%3Aasc&date=${today}&_=1733367394919`;
  jsonp(ztUrl);
}
function ztCallback(data) {
  renderContent(data);
}
function renderContent(data) {
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
    indexList[index] = [...numList]
      .splice(0, index + 1)
      .reduce((a, b) => a + b);
  });
  if (window.vm) {
    window.vm.$data.sort = "asc"; // desc
    window.vm.$data.sortBy = "";
    window.vm.$data.noReason = true;
    window.vm.$data.aMap = aMap;
    window.vm.$data.indexList = indexList;
    window.vm.$data.dataList = dataList;
    return;
  }
  window.vm = new Vue({
    el: "#wrapper",
    data() {
      return {
        sort: "",
        sortBy: "",
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
    watch: {
      sort(val) {
        console.log(val);
        this.sortChange();
      },
      sortBy(val) {
        console.log(val);
        this.sortChange();
      },
    },
    methods: {
      handleSort(prop) {
        if (this.sortBy == prop) {
          if (this.sort == "asc") {
            this.sort = "desc";
          } else if (this.sort == "desc") {
            this.sort = "";
            this.sortBy = "";
          }
        } else {
          this.sortBy = prop;
          this.sort = "asc";
        }
      },
      sortChange() {
        const val = this.sortBy;
        if (val) {
          this.dataList = this.dataList.sort((a, b) => {
            if (this.sort == "asc") {
              return a[val] - b[val];
            } else if (this.sort == "desc") {
              return b[val] - a[val];
            }
          });
        } else {
          let rList = [];
          Object.keys(aMap).forEach((key) => {
            const keyList = tempList.filter((item) => item.a == key);
            rList = rList.concat(keyList);
          });
          this.dataList = rList;
        }
      },
      clearSort() {
        this.sortBy = "";
        this.sort = "";
      },
    },
    mounted() {},
    created() {},
  });
}
