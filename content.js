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
  const review = data.data.review;
  const tempList = data.data.pool;
  let dataList = [];
  const aMap = {};
  tempList.forEach((item) => {
    if (!item.a) {
      if (["4", "8", "9"].includes(item.c.charAt(0))) {
        item.a = "北交所";
      } else {
        item.a = "其它";
      }
    }
    if (!item.b) {
      item.b = "";
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
    window.vm.$data.showBotClass = "";
    window.vm.$data.review = review;
    window.vm.$data.aMap = aMap;
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
        showBotClass: "",
        review,
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
            if (val == "zttj") {
              if (this.sort == "asc") {
                return a[val].ct - b[val].ct;
              } else if (this.sort == "desc") {
                return b[val].ct - a[val].ct;
              }
            } else if (val == "hybk") {
              if (this.sort == "asc") {
                return a[val].localeCompare(b[val], "zh-Hans-CN", {
                  sensitivity: "accent",
                });
              } else if (this.sort == "desc") {
                return b[val].localeCompare(a[val], "zh-Hans-CN", {
                  sensitivity: "accent",
                });
              }
            } else {
              if (this.sort == "asc") {
                return a[val] - b[val];
              } else if (this.sort == "desc") {
                return b[val] - a[val];
              }
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
      toggleShowBot() {
        if (!this.showBotClass) {
          this.showBotClass = "all";
        } else if (this.showBotClass == "all") {
          this.showBotClass = "show-comments";
        } else if (this.showBotClass == "show-comments") {
          this.showBotClass = "show-remark";
        } else if (this.showBotClass == "show-remark") {
          this.showBotClass = "";
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
      getColor(bili = 0) {
        var one = (255 + 255) / 100;
        var r = 0;
        var g = 0;
        var b = 0;

        if (bili < 50) {
          // 比例小于50的时候红色是越来越多的,直到红色为255时(红+绿)变为黄色.
          r = one * bili;
          g = 255;
        }
        if (bili >= 50) {
          // 比例大于50的时候绿色是越来越少的,直到0 变为纯红
          g = 255 - (bili - 50) * one;
          r = 255;
        }
        r = parseInt(r); // 取整
        g = parseInt(g); // 取整
        b = parseInt(b); // 取整
        return "rgb(" + r + "," + g + "," + b + ")";
      },
    },
    mounted() {},
    created() {},
  });
}
