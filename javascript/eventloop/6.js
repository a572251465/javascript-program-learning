const microAppConfig = `return {
    trainingGarden: {
        name: "trainingGarden",
        url: baseUrl + "/factory/training/",
        route: "",
    },
    trainSetting: {
        name: "trainSetting",
        url: baseUrl + "/factory/training/",
        route: "trainSetting",
    },
    "homePage": {
        name: "homePage",
        url: baseUrl + "/factory/page/",
        route: "homePage",
    },
    "verify": {
        name: "verifyApp",
        url: baseUrl + "/factory/verify/"
    }
};`


// 创建一个动态函数，实现两个数相加
const dynamicFunction = new Function('baseUrl', microAppConfig);

// 调用动态函数并输出结果
console.log(dynamicFunction("a")); // 输出 5


console.log(JSON.stringify(["trainingGarden","trainingGarden","baseUrl/factory/training/","","trainSetting","trainSetting","baseUrl/factory/training/","","homePage","homePage","baseUrl/factory/page/","homePage","verify","verifyApp","baseUrl/factory/verify/",""]))