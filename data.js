var CLIENTS = [
  {
    name: "Moonshot",
    period: "Mar 23 – Mar 29, 2026",
    products: ["Baba", "CC", "Spree"],
    productColors: {"Baba":"#1D9E75","CC":"#378ADD","Spree":"#7F77DD"},
    productChartColors: {"Baba":"#1D9E75","CC":"#378ADD","Spree":"#7F77DD"},
    productPills: {"Baba":"pill-baba","CC":"pill-cc","Spree":"pill-spree"},
    convDefs: [
      {key:"c0", label:"Clickouts"},
      {key:"c1", label:"Signups"},
      {key:"c2", label:"Sales"},
      {key:"c3", label:"Q. Sales"}
    ],
    kpiConv: "c3",
    kpiLabel: "Q. Sales",
    labels: ["Mar 23", "Mar 24", "Mar 25", "Mar 26", "Mar 27", "Mar 28", "Mar 29"],
    totals: {spent:22877.67, clicks:35441, impr:2436007, c0:5614, c1:1166, c2:47, c3:36},
    dayTotals: [
      {spent:3199.02, clicks:5003, impr:285530, c0:1069, c1:209, c2:7, c3:5},
      {spent:3520.65, clicks:6084, impr:422335, c0:882, c1:194, c2:0, c3:0},
      {spent:3281.96, clicks:5317, impr:340514, c0:856, c1:192, c2:11, c3:10},
      {spent:3147.67, clicks:4646, impr:350048, c0:738, c1:170, c2:11, c3:8},
      {spent:3159.27, clicks:4737, impr:345159, c0:684, c1:130, c2:5, c3:5},
      {spent:3202.54, clicks:4598, impr:344144, c0:700, c1:123, c2:6, c3:4},
      {spent:3366.56, clicks:5056, impr:348277, c0:685, c1:148, c2:7, c3:4}
    ],
    prodDaily: {
      "Baba": [1537.14, 1808.84, 1788.11, 1775.76, 1774.99, 1772.47, 1911.19],
      "CC": [1536.68, 1522.07, 1291.70, 1177.87, 1166.67, 1155.19, 1129.56],
      "Spree": [125.20, 189.74, 202.15, 194.04, 217.61, 274.88, 325.81]
    },
    prodOS: [
      {product:"Baba", os:"Android", spent:9464.17, clicks:11478.0, impr:605601.0, c0:2137.0, c1:508.0, c2:24.0, c3:20.0},
      {product:"Baba", os:"iOS", spent:2904.33, clicks:7661.0, impr:542833.0, c0:634.0, c1:99.0, c2:6.0, c3:5.0},
      {product:"Spree", os:"Android", spent:1529.43, clicks:3259.0, impr:164651.0, c0:287.0, c1:60.0, c2:5.0, c3:5.0},
      {product:"CC", os:"Android", spent:7012.20, clicks:8717.0, impr:622603.0, c0:2146.0, c1:447.0, c2:11.0, c3:5.0},
      {product:"CC", os:"iOS", spent:1967.54, clicks:4326.0, impr:500319.0, c0:410.0, c1:52.0, c2:1.0, c3:1.0}
    ],
    campaigns: [
      {name:"Moonshot_Adept_BabaCasino_Android_WL_260226", product:"Baba", os:"Android", spent:5325.62, clicks:6403, impr:230542, c0:1283, c1:331, c2:19, c3:16},
      {name:"Moonshot_Adept_BabaCasino_iOS_Premium_090326", product:"Baba", os:"iOS", spent:2842.94, clicks:7578, impr:538989, c0:625, c1:99, c2:6, c3:5},
      {name:"Moonshot_Adept_BabaCasino_Android_GreyTegna_190326", product:"Baba", os:"Android", spent:2404.86, clicks:3337, impr:157071, c0:615, c1:137, c2:4, c3:3},
      {name:"Moonshot_Adept_Spree_Android_WL_220326", product:"Spree", os:"Android", spent:1529.43, clicks:3259, impr:164651, c0:287, c1:60, c2:5, c3:5},
      {name:"Moonshot_Adept_CC_Android_WL_GreyTegna_190326", product:"CC", os:"Android", spent:804.74, clicks:1167, impr:63396, c0:269, c1:51, c2:2, c3:0},
      {name:"Moonshot_Adept_CC_Android_Premium_110326", product:"CC", os:"Android", spent:2069.63, clicks:2273, impr:132720, c0:591, c1:132, c2:4, c3:4},
      {name:"Moonshot_Adept_CC_iOS_WL_260226", product:"CC", os:"iOS", spent:1838.31, clicks:4080, impr:465213, c0:391, c1:50, c2:1, c3:1},
      {name:"Moonshot_Adept_CC_Android_WL_Article_160326", product:"CC", os:"Android", spent:1709.73, clicks:2488, impr:170183, c0:491, c1:111, c2:2, c3:1},
      {name:"Moonshot_Adept_CC_Android_WL_260226", product:"CC", os:"Android", spent:2428.10, clicks:2789, impr:256304, c0:795, c1:153, c2:3, c3:0},
      {name:"Moonshot_Adept_CC_iOS_Premium_290326", product:"CC", os:"iOS", spent:129.23, clicks:246, impr:35106, c0:19, c1:2, c2:0, c3:0},
      {name:"Moonshot_Adept_BabaCasino_Android_WL_Ads_230326", product:"Baba", os:"Android", spent:1593.76, clicks:1397, impr:201244, c0:202, c1:31, c2:0, c3:0},
      {name:"Moonshot_Adept_BabaCasino_Android_Premium_290326", product:"Baba", os:"Android", spent:139.93, clicks:341, impr:16744, c0:37, c1:9, c2:1, c3:1},
      {name:"Moonshot_Adept_BabaCasino_iOS_Premium_PredSU_160326", product:"Baba", os:"iOS", spent:61.39, clicks:83, impr:3844, c0:9, c1:0, c2:0, c3:0}
    ],
    topAds: {
      "Baba": [
        {id:"4246124177", os:"Android", campaign:"Moonshot_Adept_BabaCasino_Android_WL_260226", spent:3901.63, clicks:5258, impr:173452, c0:943, c1:239, c2:17, c3:14},
        {id:"4249417550", os:"iOS", campaign:"Moonshot_Adept_BabaCasino_iOS_Premium_090326", spent:2033.71, clicks:5641, impr:391070, c0:476, c1:80, c2:6, c3:5},
        {id:"4252796690", os:"Android", campaign:"Moonshot_Adept_BabaCasino_Android_GreyTegna_190326", spent:1523.39, clicks:2432, impr:97716, c0:433, c1:110, c2:3, c3:2},
        {id:"4251306157", os:"iOS", campaign:"Moonshot_Adept_BabaCasino_iOS_Premium_090326", spent:578.90, clicks:1309, impr:94707, c0:108, c1:17, c2:0, c3:0},
        {id:"4246124180", os:"Android", campaign:"Moonshot_Adept_BabaCasino_Android_WL_260226", spent:449.06, clicks:307, impr:10883, c0:97, c1:30, c2:1, c3:1}
      ],
      "Spree": [
        {id:"4254802693", os:"Android", campaign:"Moonshot_Adept_Spree_Android_WL_220326", spent:1081.68, clicks:2383, impr:110959, c0:202, c1:40, c2:4, c3:4},
        {id:"4254802692", os:"Android", campaign:"Moonshot_Adept_Spree_Android_WL_220326", spent:338.07, clicks:640, impr:36230, c0:62, c1:15, c2:1, c3:1},
        {id:"4254802695", os:"Android", campaign:"Moonshot_Adept_Spree_Android_WL_220326", spent:81.72, clicks:188, impr:11006, c0:13, c1:2, c2:0, c3:0},
        {id:"4254808693", os:"Android", campaign:"Moonshot_Adept_Spree_Android_WL_220326", spent:15.10, clicks:23, impr:2792, c0:3, c1:1, c2:0, c3:0},
        {id:"4254808601", os:"Android", campaign:"Moonshot_Adept_Spree_Android_WL_220326", spent:10.07, clicks:20, impr:2874, c0:5, c1:1, c2:0, c3:0}
      ],
      "CC": [
        {id:"4250043066", os:"Android", campaign:"Moonshot_Adept_CC_Android_Premium_110326", spent:1153.10, clicks:1230, impr:56184, c0:328, c1:67, c2:3, c3:3},
        {id:"4251327427", os:"iOS", campaign:"Moonshot_Adept_CC_iOS_WL_260226", spent:942.80, clicks:2167, impr:223312, c0:210, c1:33, c2:1, c3:1},
        {id:"4254586054", os:"Android", campaign:"Moonshot_Adept_CC_Android_WL_260226", spent:851.53, clicks:1092, impr:85451, c0:303, c1:64, c2:2, c3:0},
        {id:"4247633285", os:"Android", campaign:"Moonshot_Adept_CC_Android_WL_260226", spent:458.10, clicks:359, impr:62553, c0:144, c1:24, c2:0, c3:0},
        {id:"4245064059", os:"iOS", campaign:"Moonshot_Adept_CC_iOS_WL_260226", spent:407.38, clicks:894, impr:120127, c0:84, c1:5, c2:0, c3:0}
      ]
    }
  }
];