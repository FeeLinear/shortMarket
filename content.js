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
      item.a = "其它";
    }
    if (aMap[item.a]) {
      aMap[item.a]++;
    } else {
      aMap[item.a] = 1;
    }
  });
  let aMapList = [];
  Object.keys(aMap).forEach((key) => {
    aMapList.push({
      a: key,
      value: aMap[key],
    });
  });
  aMapList.sort((a, b) => {
    return b.value - a.value;
  });
  // 其它放置最后
  const qiTaIndex = aMapList.findIndex((item) => item.a == "其它");
  const qitaObj = aMapList.splice(qiTaIndex, 1);
  aMapList = aMapList.concat(qitaObj);
  const indexList = [0];
  aMapList.forEach((aObj, index) => {
    const keyList = tempList
      .filter((item) => item.a == aObj.a)
      .sort((a, b) => {
        return a.fbt - b.fbt;
      });
    dataList = dataList.concat(keyList);
    indexList[index + 1] = indexList[index] + aObj.value;
  });
  if (window.vm) {
    window.vm.$data.sort = ""; // desc
    window.vm.$data.sortBy = "";
    window.vm.$data.noReason = true;
    window.vm.$data.indexList = indexList;
    window.vm.$data.dataList = dataList;
    return;
  }
  window.vm = new Vue({
    el: "#wrapper",
    data() {
      return {
        banKuaiSort: "fbt",
        sort: "",
        sortBy: "",
        noReason: true,
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
              if (val == "zttj") {
                return a[val].ct - b[val].ct;
              }
              return a[val] - b[val];
            } else if (this.sort == "desc") {
              if (val == "zttj") {
                return b[val].ct - a[val].ct;
              }
              return b[val] - a[val];
            }
          });
        } else {
          let rList = [];
          const banKuaiSort = this.banKuaiSort;
          aMapList.forEach((aObj) => {
            const keyList = tempList
              .filter((item) => item.a == aObj.a)
              .sort((a, b) => {
                if (banKuaiSort == "zttj") {
                  return b[banKuaiSort].ct - a[banKuaiSort].ct;
                }
                if (banKuaiSort == "fbt") {
                  return a[banKuaiSort] - b[banKuaiSort];
                }
                return b[banKuaiSort] - a[banKuaiSort];
              });
            rList = rList.concat(keyList);
          });
          this.dataList = rList;
        }
      },
      clearSort() {
        if (this.sort) {
          this.banKuaiSort = "fbt";
        } else {
          switch (this.banKuaiSort) {
            case "fbt":
              this.banKuaiSort = "zttj";
              break;
            case "zttj":
              this.banKuaiSort = "lbc";
              break;
            case "lbc":
              this.banKuaiSort = "fbt";
              break;
          }
          return this.sortChange();
        }
        this.sortBy = "";
        this.sort = "";
      },
    },
    mounted() {},
    created() {},
  });
}
