import testScss from './testScss/index.js';
import { sum } from 'lodash-es';

// const sum = require("lodash-es"); // 可以成功打包外部的commonjs模块（使用了external配置）

const test = require("./testCjs/index.js"); // 没有成功打包内部的commonjs模块

function main () {
  console.log(testScss);
  console.log(sum([1, 2, 3]));
  console.log(test.text);
}

export { main as default };
//# sourceMappingURL=main.js.map