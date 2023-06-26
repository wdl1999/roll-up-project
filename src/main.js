import testScss from "./testScss/index.js";
import { sum } from "lodash-es";
// const sum = require("lodash-es"); // 可以成功打包外部的commonjs模块（使用了external配置）
import test from "./testCjs/index.js";
// const test = require("./testCjs/index.js"); // 没有成功打包内部的commonjs模块

export default function () {
  console.log(testScss);
  console.log(sum([1, 2, 3]));
  console.log(test.text);
}
