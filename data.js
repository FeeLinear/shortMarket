/**
 * upLimitsNum: 当日涨停数
 * dropLimitsNum: 当日跌停数
 * firstBoardNum: 当日首板
 * firstBoomNum: 首板炸板数
 * secondBoardNum: 当日二板
 * secondBoomNum: 当日二板炸板数
 * thirdBoardNum: 当日三板
 * thirdBoomNum: 当日三板炸板数
 * upFourBoardNum: 高度板
 * mainBoardNum: 主板涨停数
 * chuangyeBoardNum: 创业板涨停数
 * kechuangBoardNum: 科创板涨停数
 * beijingBoardNum: 京市涨停数
 * upFourBoardRate: 高度板连扳率
 * boomRate: 炸板率
 * yesterdayUpTodayRise: 昨日涨停今表现
 * yesterdayLineTodayRise: 昨日连扳今表现
 * yesterdayBoomTodayRise: 昨日炸板今表现
 * topThreeIndustry: 行业涨幅前三
 *
 */
var allData = {
  20241024: {
    upLimitsNum: 89,
    firstBoardNum: 65,
    secondBoardNum: 8,
    thirdBoardNum: 6,
    upFourBoardNum: 10,
    beijingBoardNum: 10,
    kechuangBoardNum: 1,
    chuangyeBoardNum: 7,
    mainBoardNum: 81,
    firstBoomNum: 30,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 3,
    upFourBoardRate: "50",
    boomRate: "24.07",
    yesterdayUpTodayRise: "2.46",
    yesterdayLineTodayRise: "3.95",
    yesterdayBoomTodayRise: "-1.21",
    topThreeIndustry: "房地产:0.93,保险:0.82,生物医药:0.74",
  },
  20241025: {
    upLimitsNum: 160,
    firstBoardNum: 119,
    secondBoardNum: 23,
    thirdBoardNum: 5,
    upFourBoardNum: 13,
    beijingBoardNum: 9,
    kechuangBoardNum: 5,
    chuangyeBoardNum: 16,
    mainBoardNum: 139,
    firstBoomNum: 41,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 0,
    upFourBoardRate: "81",
    boomRate: "19.82",
    yesterdayUpTodayRise: "5.53",
    yesterdayLineTodayRise: "9.21",
    yesterdayBoomTodayRise: "3.41",
    topThreeIndustry: "光伏概念:3.77,建筑装饰:3.08,房地产:2.81",
  },
  20241028: {
    upLimitsNum: 230,
    firstBoardNum: 147,
    secondBoardNum: 50,
    thirdBoardNum: 18,
    upFourBoardNum: 15,
    beijingBoardNum: 17,
    kechuangBoardNum: 5,
    chuangyeBoardNum: 15,
    mainBoardNum: 210,
    firstBoomNum: 22,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 1,
    upFourBoardRate: "83",
    boomRate: "8.28",
    yesterdayUpTodayRise: "6.60",
    yesterdayLineTodayRise: "8.63",
    yesterdayBoomTodayRise: "3.05",
    topThreeIndustry: "钢铁:6.11,房地产:4.51,养殖业:3.49",
  },
  20241029: {
    upLimitsNum: 116,
    firstBoardNum: 66,
    secondBoardNum: 19,
    thirdBoardNum: 15,
    upFourBoardNum: 16,
    beijingBoardNum: 16,
    kechuangBoardNum: 0,
    chuangyeBoardNum: 16,
    mainBoardNum: 0,
    firstBoomNum: 73,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 3,
    upFourBoardRate: "48",
    boomRate: "41.13",
    yesterdayUpTodayRise: "2.12",
    yesterdayLineTodayRise: "3.67",
    yesterdayBoomTodayRise: "-4.96",
    topThreeIndustry: "银行:-0.33,保险:-0.57,证券:-1.37",
  },
  20241030: {
    upLimitsNum: 148,
    firstBoardNum: 95,
    secondBoardNum: 14,
    thirdBoardNum: 13,
    upFourBoardNum: 26,
    beijingBoardNum: 10,
    kechuangBoardNum: 2,
    chuangyeBoardNum: 11,
    mainBoardNum: 135,
    firstBoomNum: 31,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 4,
    upFourBoardRate: "83",
    boomRate: "15.98",
    yesterdayUpTodayRise: "4.78",
    yesterdayLineTodayRise: "8.38",
    yesterdayBoomTodayRise: "2.03",
    topThreeIndustry: "养殖业:2.50,房地产:2.06,机场航运:1.53",
  },
  20241031: {
    upLimitsNum: 186,
    firstBoardNum: 117,
    secondBoardNum: 33,
    thirdBoardNum: 9,
    upFourBoardNum: 27,
    beijingBoardNum: 7,
    kechuangBoardNum: 9,
    chuangyeBoardNum: 13,
    mainBoardNum: 164,
    firstBoomNum: 83,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 2,
    upFourBoardRate: "69",
    boomRate: "32.79",
    yesterdayUpTodayRise: "5.53",
    yesterdayLineTodayRise: "8.53",
    yesterdayBoomTodayRise: "0.81",
    topThreeIndustry: "保险:5.03,房地产:3.36,证券:2.47",
  },
  20241101: {
    upLimitsNum: 98,
    firstBoardNum: 59,
    secondBoardNum: 24,
    thirdBoardNum: 4,
    upFourBoardNum: 11,
    beijingBoardNum: 6,
    kechuangBoardNum: 3,
    chuangyeBoardNum: 12,
    mainBoardNum: 83,
    firstBoomNum: 56,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 140,
    upFourBoardRate: "30",
    boomRate: "37.57",
    yesterdayUpTodayRise: "-0.70",
    yesterdayLineTodayRise: "-2.31",
    yesterdayBoomTodayRise: "-6.18",
    topThreeIndustry: "有色冶炼加工:2.06,钢铁:0.86,银行:0.85",
  },
  20241104: {
    upLimitsNum: 143,
    firstBoardNum: 115,
    secondBoardNum: 13,
    thirdBoardNum: 10,
    upFourBoardNum: 5,
    beijingBoardNum: 10,
    kechuangBoardNum: 3,
    chuangyeBoardNum: 11,
    mainBoardNum: 129,
    firstBoomNum: 33,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 36,
    upFourBoardRate: "33",
    boomRate: "16.19",
    yesterdayUpTodayRise: "1.93",
    yesterdayLineTodayRise: "1.87",
    yesterdayBoomTodayRise: "0.92",
    topThreeIndustry: "证券:3.38,保险:3.35,机场航运:3.06",
  },
  20241105: {
    upLimitsNum: 171,
    firstBoardNum: 127,
    secondBoardNum: 27,
    thirdBoardNum: 3,
    upFourBoardNum: 14,
    beijingBoardNum: 14,
    kechuangBoardNum: 8,
    chuangyeBoardNum: 15,
    mainBoardNum: 148,
    firstBoomNum: 34,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 0,
    upFourBoardRate: "93",
    boomRate: "17.74",
    yesterdayUpTodayRise: "5.59",
    yesterdayLineTodayRise: "8.16",
    yesterdayBoomTodayRise: "2.81",
    topThreeIndustry: "证券:4.69,保险:4.36,房地产:4.23",
  },
  20241106: {
    upLimitsNum: 132,
    firstBoardNum: 81,
    secondBoardNum: 24,
    thirdBoardNum: 13,
    upFourBoardNum: 14,
    beijingBoardNum: 19,
    kechuangBoardNum: 5,
    chuangyeBoardNum: 15,
    mainBoardNum: 112,
    firstBoomNum: 66,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 3,
    upFourBoardRate: "82",
    boomRate: "34.15",
    yesterdayUpTodayRise: "4.92",
    yesterdayLineTodayRise: "6.88",
    yesterdayBoomTodayRise: "0.13",
    topThreeIndustry: "房地产:2.06,建筑装饰:1.76,养殖业:1.50",
  },
  20241107: {
    upLimitsNum: 190,
    firstBoardNum: 143,
    secondBoardNum: 21,
    thirdBoardNum: 12,
    upFourBoardNum: 14,
    beijingBoardNum: 9,
    kechuangBoardNum: 1,
    chuangyeBoardNum: 14,
    mainBoardNum: 175,
    firstBoomNum: 45,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 7,
    upFourBoardRate: "51",
    boomRate: "19.71",
    yesterdayUpTodayRise: "4.15",
    yesterdayLineTodayRise: "4.84",
    yesterdayBoomTodayRise: "0.95",
    topThreeIndustry: "白酒概念:6.71,证券:6.23,食品加工:5.99",
  },
  20241108: {
    upLimitsNum: 118,
    firstBoardNum: 77,
    secondBoardNum: 21,
    thirdBoardNum: 9,
    upFourBoardNum: 11,
    beijingBoardNum: 4,
    kechuangBoardNum: 10,
    chuangyeBoardNum: 9,
    mainBoardNum: 99,
    firstBoomNum: 58,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 3,
    upFourBoardRate: "42",
    boomRate: "30.73",
    yesterdayUpTodayRise: "1.88",
    yesterdayLineTodayRise: "3.31",
    yesterdayBoomTodayRise: "-0.88",
    topThreeIndustry: "光伏概念:0.42,机场航运:-0.11,化学制药:-0.11",
  },
  20241111: {
    upLimitsNum: 157,
    firstBoardNum: 117,
    secondBoardNum: 29,
    thirdBoardNum: 7,
    upFourBoardNum: 4,
    beijingBoardNum: 1,
    kechuangBoardNum: 21,
    chuangyeBoardNum: 17,
    mainBoardNum: 119,
    firstBoomNum: 48,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 15,
    upFourBoardRate: "20",
    boomRate: "20.60",
    yesterdayUpTodayRise: "4.33",
    yesterdayLineTodayRise: "1.38",
    yesterdayBoomTodayRise: "0.32",
    topThreeIndustry: "光伏概念:2.64,生物医药:1.81,化学制药:1.41",
  },
  20241112: {
    upLimitsNum: 83,
    firstBoardNum: 60,
    secondBoardNum: 18,
    thirdBoardNum: 2,
    upFourBoardNum: 3,
    beijingBoardNum: 2,
    kechuangBoardNum: 2,
    chuangyeBoardNum: 10,
    mainBoardNum: 71,
    firstBoomNum: 82,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 15,
    upFourBoardRate: "27",
    boomRate: "43.94",
    yesterdayUpTodayRise: "0.68",
    yesterdayLineTodayRise: "-0.53",
    yesterdayBoomTodayRise: "-2.78",
    topThreeIndustry: "化学制药:0.75,生物医药:0.68,石油开采:0.67",
  },
  20241113: {
    upLimitsNum: 66,
    firstBoardNum: 55,
    secondBoardNum: 6,
    thirdBoardNum: 2,
    upFourBoardNum: 3,
    beijingBoardNum: 6,
    kechuangBoardNum: 3,
    chuangyeBoardNum: 10,
    mainBoardNum: 53,
    firstBoomNum: 45,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 7,
    upFourBoardRate: "60",
    boomRate: "36.64",
    yesterdayUpTodayRise: "0.01",
    yesterdayLineTodayRise: "2.36",
    yesterdayBoomTodayRise: "-1.3",
    topThreeIndustry: "石油开采:1.64,银行:1.06,建筑装饰:0.83",
  },
  20241114: {
    upLimitsNum: 33,
    firstBoardNum: 21,
    secondBoardNum: 8,
    thirdBoardNum: 1,
    upFourBoardNum: 3,
    beijingBoardNum: 2,
    kechuangBoardNum: 1,
    chuangyeBoardNum: 2,
    mainBoardNum: 30,
    firstBoomNum: 44,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 19,
    upFourBoardRate: "60",
    boomRate: "46.67",
    yesterdayUpTodayRise: "0.28",
    yesterdayLineTodayRise: "1.44",
    yesterdayBoomTodayRise: "-4.67",
    topThreeIndustry: "石油开采:0.01,银行:-0.12,保险:-1.41",
  },
  20241115: {
    upLimitsNum: 67,
    firstBoardNum: 54,
    secondBoardNum: 6,
    thirdBoardNum: 4,
    upFourBoardNum: 3,
    beijingBoardNum: 6,
    kechuangBoardNum: 0,
    chuangyeBoardNum: 11,
    mainBoardNum: 56,
    firstBoomNum: 35,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 23,
    upFourBoardRate: "75",
    boomRate: "33.04",
    yesterdayUpTodayRise: "2.66",
    yesterdayLineTodayRise: "7.67",
    yesterdayBoomTodayRise: "-3.66",
    topThreeIndustry: "机场航运:0.62,石油开采:-0.15,银行:-0.22",
  },
  20241118: {
    upLimitsNum: 81,
    firstBoardNum: 55,
    secondBoardNum: 14,
    thirdBoardNum: 5,
    upFourBoardNum: 7,
    beijingBoardNum: 5,
    kechuangBoardNum: 1,
    chuangyeBoardNum: 4,
    mainBoardNum: 0,
    firstBoomNum: 41,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 55,
    upFourBoardRate: "87",
    boomRate: "36.09",
    yesterdayUpTodayRise: "1.80",
    yesterdayLineTodayRise: "7.99",
    yesterdayBoomTodayRise: "-4.59",
    topThreeIndustry: "银行:2.64,煤炭开采:2.18,钢铁:1.60",
  },
  20241119: {
    upLimitsNum: 95,
    firstBoardNum: 78,
    secondBoardNum: 8,
    thirdBoardNum: 5,
    upFourBoardNum: 4,
    beijingBoardNum: 2,
    kechuangBoardNum: 3,
    chuangyeBoardNum: 7,
    mainBoardNum: 85,
    firstBoomNum: 29,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 12,
    upFourBoardRate: "33",
    boomRate: "25.19",
    yesterdayUpTodayRise: "0.77",
    yesterdayLineTodayRise: "0.50",
    yesterdayBoomTodayRise: "-1.50",
    topThreeIndustry: "光伏概念:2.96,有色冶炼加工:2.87,石油开采:2.78",
  },
  20241120: {
    upLimitsNum: 151,
    firstBoardNum: 113,
    secondBoardNum: 23,
    thirdBoardNum: 7,
    upFourBoardNum: 8,
    beijingBoardNum: 7,
    kechuangBoardNum: 1,
    chuangyeBoardNum: 13,
    mainBoardNum: 137,
    firstBoomNum: 32,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 2,
    upFourBoardRate: "88",
    boomRate: "16.99",
    yesterdayUpTodayRise: "6.41",
    yesterdayLineTodayRise: "8.92",
    yesterdayBoomTodayRise: "2.90",
    topThreeIndustry: "化学制药:3.02,生物医药:2.66,石油开采:2.12",
  },
  20241121: {
    upLimitsNum: 105,
    firstBoardNum: 62,
    secondBoardNum: 21,
    thirdBoardNum: 10,
    upFourBoardNum: 12,
    beijingBoardNum: 7,
    kechuangBoardNum: 2,
    chuangyeBoardNum: 6,
    mainBoardNum: 97,
    firstBoomNum: 43,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 3,
    upFourBoardRate: "80",
    boomRate: "30.18",
    yesterdayUpTodayRise: "3.56",
    yesterdayLineTodayRise: "5.41",
    yesterdayBoomTodayRise: "-0.37",
    topThreeIndustry: "证券:0.79,养殖业:0.58,光伏概念:0.57",
  },
  20241122: {
    upLimitsNum: 70,
    firstBoardNum: 34,
    secondBoardNum: 11,
    thirdBoardNum: 9,
    upFourBoardNum: 16,
    beijingBoardNum: 4,
    kechuangBoardNum: 1,
    chuangyeBoardNum: 6,
    mainBoardNum: 63,
    firstBoomNum: 59,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 6,
    upFourBoardRate: "72",
    boomRate: "50.00",
    yesterdayUpTodayRise: "2.90",
    yesterdayLineTodayRise: "4.62",
    yesterdayBoomTodayRise: "-3.20",
    topThreeIndustry: "机场航运:-1.08,石油开采:-1.84,房地产:-2.26",
  },
  20241125: {
    upLimitsNum: 154,
    dropLimitsNum: 15,
    firstBoardNum: 110,
    firstBoomNum: 23,
    secondBoardNum: 23,
    secondBoomNum: 1,
    thirdBoardNum: 7,
    thirdBoomNum: 0,
    upFourBoardNum: 17,
    upFourBoardRate: "68",
    boomRate: "13.47",
    yesterdayUpTodayRise: "5.68",
    yesterdayLineTodayRise: "5.07",
    yesterdayBoomTodayRise: "1.54",
    mainBoardNum: 142,
    chuangyeBoardNum: 11,
    kechuangBoardNum: 1,
    beijingBoardNum: 3,
    topThreeIndustry: "养殖业:2.54,食品加工:1.84,石油开采:1.74",
  },
  20241126: {
    upLimitsNum: 91,
    dropLimitsNum: 55,
    firstBoardNum: 61,
    firstBoomNum: 40,
    secondBoardNum: 18,
    secondBoomNum: 11,
    thirdBoardNum: 3,
    thirdBoomNum: 6,
    upFourBoardNum: 9,
    upFourBoardRate: "37",
    boomRate: "38.60",
    yesterdayUpTodayRise: "-1.15",
    yesterdayLineTodayRise: "-3.57",
    yesterdayBoomTodayRise: "-5.30",
    mainBoardNum: 85,
    chuangyeBoardNum: 6,
    kechuangBoardNum: 0,
    beijingBoardNum: 1,
    topThreeIndustry: "食品加工:2.21,养殖业:1.54,白酒概念:0.89",
  },
  20241127: {
    upLimitsNum: 98,
    dropLimitsNum: 15,
    firstBoardNum: 82,
    firstBoomNum: 14,
    secondBoardNum: 11,
    secondBoomNum: 4,
    thirdBoardNum: 3,
    thirdBoomNum: 3,
    upFourBoardNum: 7,
    upFourBoardRate: "58",
    boomRate: "18.25",
    yesterdayUpTodayRise: "1.67",
    yesterdayLineTodayRise: "1.45",
    yesterdayBoomTodayRise: "0.88",
    mainBoardNum: 83,
    chuangyeBoardNum: 13,
    kechuangBoardNum: 2,
    beijingBoardNum: 5,
    topThreeIndustry: "证券:2.31,机场航运:2.05,化学制药:1.72",
  },
  20241128: {
    upLimitsNum: 91,
    dropLimitsNum: 6,
    firstBoardNum: 63,
    firstBoomNum: 42,
    secondBoardNum: 19,
    secondBoomNum: 5,
    thirdBoardNum: 7,
    thirdBoomNum: 2,
    upFourBoardNum: 6,
    upFourBoardRate: "60",
    boomRate: "37.36",
    yesterdayUpTodayRise: "3.64",
    yesterdayLineTodayRise: "6.62",
    yesterdayBoomTodayRise: "0.32",
    mainBoardNum: 83,
    chuangyeBoardNum: 6,
    kechuangBoardNum: 2,
    beijingBoardNum: 4,
    topThreeIndustry: "房地产:1.91,食品加工:1.72,养殖业:1.27",
  },
  20241129: {
    upLimitsNum: 128,
    dropLimitsNum: 7,
    firstBoardNum: 100,
    firstBoomNum: 12,
    secondBoardNum: 15,
    secondBoomNum: 5,
    thirdBoardNum: 8,
    thirdBoomNum: 1,
    upFourBoardNum: 11,
    upFourBoardRate: "84",
    boomRate: "17.86",
    yesterdayUpTodayRise: "3.10",
    yesterdayLineTodayRise: "5.19",
    yesterdayBoomTodayRise: "-1.42",
    mainBoardNum: 112,
    chuangyeBoardNum: 15,
    kechuangBoardNum: 1,
    beijingBoardNum: 6,
    topThreeIndustry: "食品加工:3.21,证券:2.49,白酒概念:2.08",
  },
  20241202: {
    upLimitsNum: 165,
    dropLimitsNum: 5,
    firstBoardNum: 115,
    firstBoomNum: 36,
    secondBoardNum: 31,
    secondBoomNum: 15,
    thirdBoardNum: 8,
    thirdBoomNum: 2,
    upFourBoardNum: 15,
    upFourBoardRate: "79",
    boomRate: "24.27",
    yesterdayUpTodayRise: "5.48",
    yesterdayLineTodayRise: "7.17",
    yesterdayBoomTodayRise: "0.00",
    mainBoardNum: 144,
    chuangyeBoardNum: 17,
    kechuangBoardNum: 4,
    beijingBoardNum: 4,
    topThreeIndustry: "钢铁:3.16,养殖业:3.03,房地产:2.88",
  },
  20241203: {
    upLimitsNum: 116,
    dropLimitsNum: 6,
    firstBoardNum: 72,
    firstBoomNum: 27,
    secondBoardNum: 22,
    secondBoomNum: 10,
    thirdBoardNum: 13,
    thirdBoomNum: 4,
    upFourBoardNum: 12,
    upFourBoardRate: "52",
    boomRate: "29.95",
    yesterdayUpTodayRise: "2.26",
    yesterdayLineTodayRise: "2.57",
    yesterdayBoomTodayRise: "-2.16",
    mainBoardNum: 105,
    chuangyeBoardNum: 9,
    kechuangBoardNum: 2,
    beijingBoardNum: 3,
    topThreeIndustry: "房地产:1.61,银行:1.59,电力:1.23",
  },
  20241204: {
    upLimitsNum: 85,
    firstBoardNum: 56,
    secondBoardNum: 10,
    thirdBoardNum: 5,
    upFourBoardNum: 15,
    beijingBoardNum: 1,
    kechuangBoardNum: 1,
    chuangyeBoardNum: 6,
    mainBoardNum: 78,
    firstBoomNum: 37,
    secondBoomNum: 9,
    thirdBoomNum: 2,
    dropLimitsNum: 15,
    upFourBoardRate: "60",
    boomRate: "38.46",
    yesterdayUpTodayRise: "-0.25",
    yesterdayLineTodayRise: "1.46",
    yesterdayBoomTodayRise: "-2.62",
    topThreeIndustry: "煤炭开采:0.86,银行:0.06,钢铁:-0.33",
  },
  20241205: {
    upLimitsNum: 129,
    firstBoardNum: 91,
    secondBoardNum: 22,
    thirdBoardNum: 3,
    upFourBoardNum: 13,
    beijingBoardNum: 2,
    kechuangBoardNum: 5,
    chuangyeBoardNum: 7,
    mainBoardNum: 117,
    firstBoomNum: 19,
    secondBoomNum: 3,
    thirdBoomNum: 1,
    dropLimitsNum: 9,
    upFourBoardRate: "65.00",
    boomRate: "15.69",
    yesterdayUpTodayRise: "4.09",
    yesterdayLineTodayRise: "3.95",
    yesterdayBoomTodayRise: "-0.08",
    topThreeIndustry: "房地产:1.50,证券:1.37,建筑装饰:1.33",
  },
  20241206: {
    upLimitsNum: 121,
    firstBoardNum: 79,
    secondBoardNum: 27,
    thirdBoardNum: 6,
    upFourBoardNum: 9,
    beijingBoardNum: 0,
    kechuangBoardNum: 2,
    chuangyeBoardNum: 7,
    mainBoardNum: 112,
    firstBoomNum: 35,
    secondBoomNum: 6,
    thirdBoomNum: 5,
    dropLimitsNum: 6,
    upFourBoardRate: "56.25",
    boomRate: "31.25",
    yesterdayUpTodayRise: "3.32",
    yesterdayLineTodayRise: "2.88",
    yesterdayBoomTodayRise: "-1.51",
    topThreeIndustry: "机场航运:2.49,建筑装饰:2.08,房地产:1.96",
  },
  20241209: {
    upLimitsNum: 104,
    firstBoardNum: 73,
    secondBoardNum: 12,
    thirdBoardNum: 12,
    upFourBoardNum: 7,
    beijingBoardNum: 0,
    kechuangBoardNum: 1,
    chuangyeBoardNum: 10,
    mainBoardNum: 93,
    firstBoomNum: 26,
    secondBoomNum: 6,
    thirdBoomNum: 3,
    dropLimitsNum: 24,
    upFourBoardRate: "46.67",
    boomRate: "27.27",
    yesterdayUpTodayRise: "1.28",
    yesterdayLineTodayRise: "2.93",
    yesterdayBoomTodayRise: "-1.54",
    topThreeIndustry: "石油开采:0.96,机场航运:0.75,电力:0.56",
  },
  20241210: {
    upLimitsNum: 109,
    firstBoardNum: 77,
    secondBoardNum: 16,
    thirdBoardNum: 7,
    upFourBoardNum: 9,
    beijingBoardNum: 3,
    kechuangBoardNum: 3,
    chuangyeBoardNum: 12,
    mainBoardNum: 94,
    firstBoomNum: 44,
    secondBoomNum: 10,
    thirdBoomNum: 0,
    dropLimitsNum: 3,
    upFourBoardRate: "47.37",
    boomRate: "36.63",
    yesterdayUpTodayRise: "2.52",
    yesterdayLineTodayRise: "2.79",
    yesterdayBoomTodayRise: "0.17",
    topThreeIndustry: "食品加工:4.24,养殖业:0.99,白酒概念:0.90",
  },
  20241211: {
    upLimitsNum: 145,
    firstBoardNum: 108,
    secondBoardNum: 22,
    thirdBoardNum: 7,
    upFourBoardNum: 8,
    beijingBoardNum: 0,
    kechuangBoardNum: 6,
    chuangyeBoardNum: 9,
    mainBoardNum: 130,
    firstBoomNum: 23,
    secondBoomNum: 5,
    thirdBoomNum: 2,
    dropLimitsNum: 10,
    upFourBoardRate: "50.00",
    boomRate: "19.44",
    yesterdayUpTodayRise: "3.05",
    yesterdayLineTodayRise: "3.56",
    yesterdayBoomTodayRise: "-0.87",
    topThreeIndustry: "房地产:3.51,养殖业:3.43,食品加工:3.27",
  },
  20241212: {
    upLimitsNum: 139,
    firstBoardNum: 86,
    secondBoardNum: 30,
    thirdBoardNum: 14,
    upFourBoardNum: 9,
    beijingBoardNum: 0,
    kechuangBoardNum: 0,
    chuangyeBoardNum: 8,
    mainBoardNum: 131,
    firstBoomNum: 28,
    secondBoomNum: 4,
    thirdBoomNum: 1,
    dropLimitsNum: 4,
    upFourBoardRate: "60.00",
    boomRate: "21.91",
    yesterdayUpTodayRise: "2.89",
    yesterdayLineTodayRise: "5.32",
    yesterdayBoomTodayRise: "-0.44",
    topThreeIndustry: "食品加工:4.67,白酒概念:2.92,养殖业:2.51",
  },
  20241213: {
    upLimitsNum: 97,
    firstBoardNum: 64,
    secondBoardNum: 13,
    thirdBoardNum: 8,
    upFourBoardNum: 12,
    beijingBoardNum: 1,
    kechuangBoardNum: 0,
    chuangyeBoardNum: 10,
    mainBoardNum: 87,
    firstBoomNum: 27,
    secondBoomNum: 5,
    thirdBoomNum: 7,
    dropLimitsNum: 10,
    upFourBoardRate: "52.17",
    boomRate: "33.10",
    yesterdayUpTodayRise: "1.00",
    yesterdayLineTodayRise: "2.47",
    yesterdayBoomTodayRise: "-2.0",
    topThreeIndustry: "建筑装饰:-1.60,电力:-1.73,机场航运:-1.81",
  },
  20241216: {
    upLimitsNum: 101,
    firstBoardNum: 75,
    secondBoardNum: 11,
    thirdBoardNum: 8,
    upFourBoardNum: 7,
    beijingBoardNum: 0,
    kechuangBoardNum: 0,
    chuangyeBoardNum: 8,
    mainBoardNum: 93,
    firstBoomNum: 43,
    secondBoomNum: 10,
    thirdBoomNum: 3,
    dropLimitsNum: 21,
    upFourBoardRate: "35.00",
    boomRate: "42.61",
    yesterdayUpTodayRise: "1.64",
    yesterdayLineTodayRise: "3.27",
    yesterdayBoomTodayRise: "-2.57",
    topThreeIndustry: "电力:1.31,银行:0.68,煤炭开采:0.57",
  },
  20241217: {
    upLimitsNum: 27,
    firstBoardNum: 17,
    secondBoardNum: 6,
    thirdBoardNum: 1,
    upFourBoardNum: 3,
    beijingBoardNum: 0,
    kechuangBoardNum: 0,
    chuangyeBoardNum: 1,
    mainBoardNum: 26,
    firstBoomNum: 18,
    secondBoomNum: 7,
    thirdBoomNum: 2,
    dropLimitsNum: 127,
    upFourBoardRate: "20.00",
    boomRate: "56.45",
    yesterdayUpTodayRise: "-3.23",
    yesterdayLineTodayRise: "-3.27",
    yesterdayBoomTodayRise: "-7.1",
    topThreeIndustry: "证券:-0.51,银行:-0.73,机场航运:-0.85",
  },
  20241218: {
    upLimitsNum: 98,
    firstBoardNum: 79,
    secondBoardNum: 9,
    thirdBoardNum: 6,
    upFourBoardNum: 4,
    beijingBoardNum: 0,
    kechuangBoardNum: 1,
    chuangyeBoardNum: 9,
    mainBoardNum: 88,
    firstBoomNum: 22,
    secondBoomNum: 0,
    thirdBoomNum: 0,
    dropLimitsNum: 10,
    upFourBoardRate: "100.00",
    boomRate: "21.60",
    yesterdayUpTodayRise: "7.85",
    yesterdayLineTodayRise: "10.01",
    yesterdayBoomTodayRise: "-1.57",
    topThreeIndustry: "电力:1.41,钢铁:1.06,石油开采:0.98",
  },
  20241219: {
    upLimitsNum: 74,
    firstBoardNum: 60,
    secondBoardNum: 8,
    thirdBoardNum: 2,
    upFourBoardNum: 4,
    beijingBoardNum: 1,
    kechuangBoardNum: 1,
    chuangyeBoardNum: 15,
    mainBoardNum: 58,
    firstBoomNum: 14,
    secondBoomNum: 9,
    thirdBoomNum: 3,
    dropLimitsNum: 21,
    upFourBoardRate: "40.00",
    boomRate: "30.84",
    yesterdayUpTodayRise: "0.23",
    yesterdayLineTodayRise: "-0.38",
    yesterdayBoomTodayRise: "-2.89",
    topThreeIndustry: "建筑装饰:0.71,光伏概念:0.21,有色冶炼:-0.10",
  },
  20241220: {
    upLimitsNum: 83,
    firstBoardNum: 67,
    secondBoardNum: 12,
    thirdBoardNum: 2,
    upFourBoardNum: 2,
    beijingBoardNum: 1,
    kechuangBoardNum: 3,
    chuangyeBoardNum: 4,
    mainBoardNum: 76,
    firstBoomNum: 22,
    secondBoomNum: 1,
    thirdBoomNum: 1,
    dropLimitsNum: 13,
    upFourBoardRate: "33.33",
    boomRate: "23.85",
    yesterdayUpTodayRise: "1.08",
    yesterdayLineTodayRise: "0.10",
    yesterdayBoomTodayRise: "-2.46",
    topThreeIndustry: "食品加工:2.34,养殖业:1.38,化学制药:0.90",
  },
  20241223: {
    upLimitsNum: 31,
    firstBoardNum: 20,
    secondBoardNum: 7,
    thirdBoardNum: 2,
    upFourBoardNum: 2,
    beijingBoardNum: 1,
    kechuangBoardNum: 1,
    chuangyeBoardNum: 1,
    mainBoardNum: 29,
    firstBoomNum: 10,
    secondBoomNum: 3,
    thirdBoomNum: 0,
    dropLimitsNum: 152,
    upFourBoardRate: "50.00",
    boomRate: "35.42",
    yesterdayUpTodayRise: "-3.22",
    yesterdayLineTodayRise: "0.95",
    yesterdayBoomTodayRise: "-7.04",
    topThreeIndustry: "银行:1.14,机场航运:-0.39,电力:-1.38",
  },
  20241224: {
    upLimitsNum: 75,
    firstBoardNum: 62,
    secondBoardNum: 7,
    thirdBoardNum: 3,
    upFourBoardNum: 3,
    beijingBoardNum: 0,
    kechuangBoardNum: 1,
    chuangyeBoardNum: 7,
    mainBoardNum: 67,
    firstBoomNum: 23,
    secondBoomNum: 1,
    thirdBoomNum: 1,
    dropLimitsNum: 23,
    upFourBoardRate: "75.00",
    boomRate: "27.18",
    yesterdayUpTodayRise: "3.87",
    yesterdayLineTodayRise: "4.68",
    yesterdayBoomTodayRise: "1.7",
    topThreeIndustry: "证券:2.17,食品加工:1.79,电力:1.68",
  },
  20241225: {
    upLimitsNum: 37,
    firstBoardNum: 25,
    secondBoardNum: 8,
    thirdBoardNum: 1,
    upFourBoardNum: 3,
    beijingBoardNum: 0,
    kechuangBoardNum: 1,
    chuangyeBoardNum: 3,
    mainBoardNum: 33,
    firstBoomNum: 10,
    secondBoomNum: 1,
    thirdBoomNum: 3,
    dropLimitsNum: 38,
    upFourBoardRate: "50.00",
    boomRate: "30.19",
    yesterdayUpTodayRise: "-0.74",
    yesterdayLineTodayRise: "0.15",
    yesterdayBoomTodayRise: "-4.89",
    topThreeIndustry: "银行:1.04,煤炭开采:0.55,证券:-0.77",
  },
};
