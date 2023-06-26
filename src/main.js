import testScss from './testScss/index.ts'
import { sum } from 'lodash-es'
// const sum = require("lodash-es"); // 可以成功打包外部的commonjs模块（使用了external配置）
<<<<<<< HEAD
import test from "./testCjs/index.js";
// const test = require("./testCjs/index.js"); // 没有成功打包内部的commonjs模块
=======

import test from './testCjs/index.cjs' // 用esm的方式引入cjs
>>>>>>> a27f0732d2452835f12ea015798c505a92583d5e

export default function () {
  console.log(testScss)
  console.log(sum([1, 2, 3]))
  console.log(test.text)
}
