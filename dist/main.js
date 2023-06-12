import testScss from './testScss/index.js';
import test from './testCjs/index.js';
import sum from './node_modules/lodash-es/sum.js';

// const test = require('./testCjs/index.cjs') // 没有成功打包内部的commonjs模块

function main () {
  console.log(testScss);
  console.log(sum([1, 2, 3]));
  console.log(test.text);
}

export { main as default };
//# sourceMappingURL=main.js.map
